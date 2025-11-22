// ---------------------------------------------------
// Universal Cache Utility
// ---------------------------------------------------

const cacheStore = new Map();

/**
 * cache() — wrap async fetch functions with caching
 *
 * @param {string} key - cache key
 * @param {Function} fn - async function returning data
 * @param {number} ttl - time-to-live in ms (default 5 minutes)
 */
export function cache(key, fn, ttl = 300000) {
  if (cacheStore.has(key)) {
    const item = cacheStore.get(key);

    // valid cached item
    if (Date.now() - item.time < ttl) return item.data;
  }

  // create promise and store immediately
  const result = fn();
  cacheStore.set(key, { data: result, time: Date.now() });

  return result;
}
