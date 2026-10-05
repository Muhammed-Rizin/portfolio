import { createClient } from "@supabase/supabase-js";
import { cache } from "../utils/cache";
import {
  FALLBACK_SHIPMENTS,
  FALLBACK_LOGS,
  FALLBACK_CERTIFICATES,
  FALLBACK_RESUME_URL,
} from "../data/fallback";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      })
    : null;

export async function getShipments() {
  if (!supabase) return FALLBACK_SHIPMENTS;

  return cache(
    "supabase:shipments",
    async () => {
      const { data, error } = await supabase
        .from("shipments")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) return FALLBACK_SHIPMENTS;
      return data;
    },
    5 * 60 * 1000,
  );
}

export async function getSystemLogs() {
  if (!supabase) return FALLBACK_LOGS;

  return cache(
    "supabase:system_logs",
    async () => {
      const { data, error } = await supabase
        .from("system_logs")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) return FALLBACK_LOGS;
      return data;
    },
    5 * 60 * 1000,
  );
}

export async function getCertificates() {
  if (!supabase) return FALLBACK_CERTIFICATES;

  return cache(
    "supabase:certificates",
    async () => {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) return FALLBACK_CERTIFICATES;
      return data;
    },
    5 * 60 * 1000,
  );
}

export async function getResumeUrl() {
  if (import.meta.env.VITE_RESUME_URL) {
    return import.meta.env.VITE_RESUME_URL;
  }

  if (!supabase) return FALLBACK_RESUME_URL;

  return cache(
    "supabase:resume_url",
    async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", "resume_url")
        .maybeSingle();

      if (error || !data || !data.value) return FALLBACK_RESUME_URL;
      return data.value;
    },
    15 * 60 * 1000,
  );
}
