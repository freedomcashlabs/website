import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function addSubscriber(
  contactValue: string,
  contactType: string,
): Promise<"ok" | "duplicate"> {
  const { error } = await supabase.from("leads").insert({
    site_id: "freedom-cash",
    contact_type: contactType,
    contact_value: contactValue.trim(),
    metadata: {},
  });

  if (error?.code === "23505") return "duplicate";
  if (error) throw new Error(error.message);
  return "ok";
}
