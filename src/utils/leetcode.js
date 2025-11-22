import { cache } from "./cache";

const LEETCODE_USERNAME = "muhammed-rizin";

export async function getLeetCodeStats() {
  return cache(`leetcode:${LEETCODE_USERNAME}`, async () => {
    try {
      const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);

      const json = await res.json();

      if (json.status === "success" || json.totalSolved !== undefined) {
        return {
          total: json.totalSolved || 0,
          easy: json.easySolved || 0,
          medium: json.mediumSolved || 0,
          hard: json.hardSolved || 0,
        };
      }

      return null;
    } catch (err) {
      console.error("LeetCode API error:", err);
      return null;
    }
  });
}
