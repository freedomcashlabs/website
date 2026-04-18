import { submitLead } from "@leads/supabase-backend";

const supabaseUrl = import.meta.env.VITE_LEADS_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_LEADS_SUPABASE_ANON_KEY;

export async function addSubscriber(
  contactValue: string,
  contactType: string,
): Promise<"ok" | "duplicate"> {
  const result = await submitLead(supabaseUrl, supabaseAnonKey, {
    siteId: "freedom-cash",
    contactType,
    contactValue,
  });
  if (result.status === "duplicate") return "duplicate";
  if (result.status === "error") throw new Error(result.message);
  return "ok";
}
