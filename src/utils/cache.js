// ---------------------------------------------------
// Universal Persistent Cache Utility
// ---------------------------------------------------

const cacheStore = new Map();
const STORAGE_PREFIX = "portfolio_cache:v1:";

/**
 * Read cached item synchronously from localStorage
 */
function readStorage(key, ttl) {
  if (typeof window === "undefined" || !window.localStorage) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.time < ttl) {
      return parsed.data;
    }
  } catch {
    // ignore json or storage errors
  }
  return null;
}

/**
 * Write item to localStorage
 */
function writeStorage(key, data) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    window.localStorage.setItem(
      STORAGE_PREFIX + key,
      JSON.stringify({ data, time: Date.now() }),
    );
  } catch {
    // ignore quota or storage errors
  }
}

/**
 * Get synchronously cached data if available (from memory or localStorage)
 */
export function getCachedSync(key, ttl = 300000) {
  if (cacheStore.has(key)) {
    const item = cacheStore.get(key);
    if (Date.now() - item.time < ttl && !(item.data instanceof Promise)) {
      return item.data;
    }
  }
  return readStorage(key, ttl);
}

/**
 * cache() — wrap async fetch functions with persistent caching
 *
 * @param {string} key - cache key
 * @param {Function} fn - async function returning data
 * @param {number} ttl - time-to-live in ms (default 5 minutes)
 */
export function cache(key, fn, ttl = 300000) {
  // 1. In-memory hit
  if (cacheStore.has(key)) {
    const item = cacheStore.get(key);
    if (Date.now() - item.time < ttl) {
      return item.data;
    }
  }

  // 2. LocalStorage hit
  const storedData = readStorage(key, ttl);
  if (storedData !== null) {
    const resolvedPromise = Promise.resolve(storedData);
    cacheStore.set(key, { data: resolvedPromise, time: Date.now() });
    return resolvedPromise;
  }

  // 3. Fresh fetch
  const result = fn().then((data) => {
    writeStorage(key, data);
    cacheStore.set(key, { data, time: Date.now() });
    return data;
  });

  cacheStore.set(key, { data: result, time: Date.now() });
  return result;
}

/**
 * Clear cache for a key or all keys
 */
export function clearCache(key) {
  if (key) {
    cacheStore.delete(key);
    try {
      window.localStorage.removeItem(STORAGE_PREFIX + key);
    } catch {
      // ignore
    }
  } else {
    cacheStore.clear();
    try {
      Object.keys(window.localStorage).forEach((k) => {
        if (k.startsWith(STORAGE_PREFIX)) {
          window.localStorage.removeItem(k);
        }
      });
    } catch {
      // ignore
    }
  }
}
