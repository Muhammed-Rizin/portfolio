// ---------------------------------------------------
//  GitHub Global Config
// ---------------------------------------------------

import { cache } from "./cache";

export const WORK_USERNAME = import.meta.env.VITE_WORK_USERNAME;
export const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;


const GITHUB_API = "https://api.github.com";
const GRAPHQL_API = `${GITHUB_API}/graphql`;

/**
 * Centralized authenticated fetch
 */
async function githubFetch(url, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
    ...options.headers,
  };

  const res = await fetch(url, { ...options, headers });

  if (!res.ok) {
    console.warn(`GitHub API Error: ${res.status} — ${url}`);
  }

  return res.json().catch(() => ({}));
}

// ---------------------------------------------------
// 1. Contribution Matrix
// ---------------------------------------------------
export async function getContributionMatrix() {
  return cache(`contrib:${WORK_USERNAME}`, async () => {
    const query = `
      query {
        user(login: "${WORK_USERNAME}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const res = await githubFetch(GRAPHQL_API, {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const cal = res?.data?.user?.contributionsCollection?.contributionCalendar || {};

    return {
      total: cal.totalContributions || 0,
      weeks: cal.weeks?.map((week) => week.contributionDays.map((d) => d.contributionCount)) || [],
    };
  });
}

// ---------------------------------------------------
// 2. Fetch User Repos
// ---------------------------------------------------
export async function getUserRepos() {
  return cache(`repos:${GITHUB_USERNAME}`, async () => {
    const repos = await githubFetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );

    if (!Array.isArray(repos)) return [];

    return repos.map((repo) => ({
      name: repo.name,
      desc: repo.description || "No description provided.",
      lang: repo.language || "Unknown",
      stars: repo.stargazers_count,
      forks: repo.forks,
      url: repo.html_url,
      pushedAt: new Date(repo.pushed_at).getTime(),
    }));
  });
}

// ---------------------------------------------------
// 3. Fetch Push Events
// ---------------------------------------------------
export async function getRecentPushEvents() {
  return cache(`push:${GITHUB_USERNAME}`, async () => {
    const events = await githubFetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/events`);

    if (!Array.isArray(events)) return [];

    return events
      .filter((ev) => ev.type === "PushEvent")
      .map((ev) => ({
        message: ev.payload.commits?.[0]?.message || "update",
        hash: ev.payload.commits?.[0]?.sha?.slice(0, 6) || "------",
        branch: ev.payload.ref?.replace("refs/heads/", "") || "main",
        repo: ev.repo?.name,
        date: ev.created_at,
      }))
      .slice(0, 5);
  });
}

// ---------------------------------------------------
// 4. Language Breakdown (Optimized: 1 GraphQL API Call)
// ---------------------------------------------------
export async function getLanguageBreakdown() {
  return cache(`langs:${GITHUB_USERNAME}`, async () => {
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          repositories(first: 100, ownerAffiliations: OWNER) {
            nodes {
              name
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `;

    const res = await githubFetch(GRAPHQL_API, {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const repos = res?.data?.user?.repositories?.nodes || [];

    let totals = {};

    repos.forEach((repo) => {
      repo.languages?.edges?.forEach(({ size, node }) => {
        totals[node.name] = (totals[node.name] || 0) + size;
      });
    });

    const sum = Object.values(totals).reduce((a, b) => a + b, 0);

    return Object.entries(totals)
      .map(([name, val]) => ({
        name,
        val: Math.round((val / sum) * 100),
      }))
      .sort((a, b) => b.val - a.val)
      .slice(0, 5);
  });
}

// ---------------------------------------------------
// 5. GitHub Profile (followers, avatar, etc.)
// ---------------------------------------------------
export async function getUserProfile() {
  return cache(`profile:${GITHUB_USERNAME}`, async () => {
    return githubFetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`);
  });
}

// ---------------------------------------------------
// 6. Developer Activity — commits, events, repos
// ---------------------------------------------------
export async function getDeveloperStats() {
  return cache(`devstats:${GITHUB_USERNAME}`, async () => {
    const events = await githubFetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/events`);

    if (!Array.isArray(events))
      return {
        commits: 0,
        activeRepos: 0,
        eventCount: 0,
      };

    let commits = 0;
    let eventCount = 0;
    let repos = new Set();

    const now = new Date();
    const monthAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    for (const ev of events) {
      const date = new Date(ev.created_at);
      if (date < monthAgo) continue;

      eventCount++;

      if (ev.repo?.name) repos.add(ev.repo.name);
      if (ev.type === "PushEvent") commits += ev.payload?.commits?.length || 0;
    }

    return {
      commits,
      activeRepos: repos.size,
      eventCount,
    };
  });
}
