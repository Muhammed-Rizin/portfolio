import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { getShipments, getSystemLogs, getCertificates, getResumeUrl } from "../services/supabase";
import { getUserRepos } from "../utils/github";
import { getCachedSync } from "../utils/cache";
import {
  FALLBACK_SHIPMENTS,
  FALLBACK_LOGS,
  FALLBACK_CERTIFICATES,
  FALLBACK_RESUME_URL,
} from "../data/fallback";

const PortfolioDataContext = createContext(null);

export function PortfolioDataProvider({ children }) {
  // Synchronous initial cache hit if available
  const initialShipments = getCachedSync("supabase:shipments") || FALLBACK_SHIPMENTS;
  const initialLogs = getCachedSync("supabase:system_logs") || FALLBACK_LOGS;
  const initialCerts = getCachedSync("supabase:certificates") || FALLBACK_CERTIFICATES;
  const initialResume = getCachedSync("supabase:resume_url") || FALLBACK_RESUME_URL;

  const [shipments, setShipments] = useState(initialShipments);
  const [logs, setLogs] = useState(initialLogs);
  const [certificates, setCertificates] = useState(initialCerts);
  const [resumeUrl, setResumeUrl] = useState(initialResume);
  const [repos, setRepos] = useState([]);

  // Check if data was pre-cached or needs initial fetch indicator
  const hasCachedData = Boolean(
    getCachedSync("supabase:shipments") ||
    getCachedSync("supabase:system_logs") ||
    getCachedSync("supabase:certificates"),
  );

  const [loading, setLoading] = useState(!hasCachedData);
  const [isPreloaded, setIsPreloaded] = useState(false);

  const prefetchAll = useCallback(async () => {
    try {
      const [shipmentsRes, logsRes, certsRes, resumeRes, reposRes] = await Promise.allSettled([
        getShipments(),
        getSystemLogs(),
        getCertificates(),
        getResumeUrl(),
        getUserRepos(),
      ]);

      if (shipmentsRes.status === "fulfilled" && shipmentsRes.value) {
        setShipments(shipmentsRes.value);
      }
      if (logsRes.status === "fulfilled" && logsRes.value) {
        setLogs(logsRes.value);
      }
      if (certsRes.status === "fulfilled" && certsRes.value) {
        setCertificates(certsRes.value);
      }
      if (resumeRes.status === "fulfilled" && resumeRes.value) {
        setResumeUrl(resumeRes.value);
      }
      if (reposRes.status === "fulfilled" && Array.isArray(reposRes.value)) {
        setRepos(reposRes.value);
      }
    } catch (err) {
      console.warn("Portfolio data prefetch notice:", err);
    } finally {
      setLoading(false);
      setIsPreloaded(true);
    }
  }, []);

  useEffect(() => {
    // Parallel prefetching starts immediately at root mount
    prefetchAll();
  }, [prefetchAll]);

  return (
    <PortfolioDataContext.Provider
      value={{
        shipments,
        logs,
        certificates,
        resumeUrl,
        repos,
        loading,
        isPreloaded,
        refreshData: prefetchAll,
      }}
    >
      {children}
    </PortfolioDataContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePortfolioData() {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error("usePortfolioData must be used within a PortfolioDataProvider");
  }
  return context;
}
