import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServerKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabaseServerClient() {
  if (!supabaseUrl || !supabaseServerKey) {
    throw new Error(
      "Missing Supabase configuration. Set SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and either SUPABASE_SERVICE_ROLE_KEY or SUPABASE_PUBLISHABLE_KEY."
    );
  }

  return createClient(supabaseUrl, supabaseServerKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function getWaitlistTableName() {
  return process.env.SUPABASE_WAITLIST_TABLE ?? "mimesis_waitlist";
}

export function getContactTableName() {
  return process.env.SUPABASE_CONTACT_TABLE ?? "contact_inquiries";
}
