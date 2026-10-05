import { cache } from "./cache";
import { FALLBACK_LEETCODE } from "../data/fallback";

const LEETCODE_USERNAME = "muhammed-rizin";

function normalizeStats(json) {
  if (!json) return null;

  const total = json.totalSolved ?? json.total;
  if (total !== undefined && total !== null) {
    return {
      total: Number(total) || 0,
      easy: Number(json.easySolved ?? json.easy ?? 0),
      medium: Number(json.mediumSolved ?? json.medium ?? 0),
      hard: Number(json.hardSolved ?? json.hard ?? 0),
      rank: Number(json.ranking ?? json.rank ?? 0),
    };
  }

  return null;
}

export async function getLeetCodeStats() {
  return cache(
    `leetcode:${LEETCODE_USERNAME}`,
    async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);
        const res = await fetch(
          `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`,
          { signal: controller.signal },
        );
        clearTimeout(timeoutId);

        if (res.ok) {
          const json = await res.json();
          const normalized = normalizeStats(json);
          if (normalized) return normalized;
        }
      } catch {
        // failover
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);
        const res = await fetch(
          `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`,
          { signal: controller.signal },
        );
        clearTimeout(timeoutId);

        if (res.ok) {
          const json = await res.json();
          const normalized = normalizeStats(json);
          if (normalized) return normalized;
        }
      } catch {
        // failover
      }

      return FALLBACK_LEETCODE;
    },
    15 * 60 * 1000,
  );
}
