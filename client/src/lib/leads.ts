import { turnstileToken } from "./turnstile";

// Shared leads collector (Cloudflare Worker + D1, leads-collector repo). Public URL, no build secrets.
const LEADS_ENDPOINT = "https://leads.aljaz-c36.workers.dev";

export async function addSubscriber(
  contactValue: string,
  contactType: string,
): Promise<"ok" | "duplicate"> {
  const res = await fetch(LEADS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ siteId: "freedom-cash", contactType, contactValue, turnstileToken: await turnstileToken() }),
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) throw new Error(body?.message ?? res.statusText);
  return body?.status === "duplicate" ? "duplicate" : "ok";
}
