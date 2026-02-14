import { z } from "zod";

const npubPattern = /^npub1[023456789acdefghjklmnpqrstuvwxyz]{58}$/;

export const subscriberSchema = z.object({
  contact: z.string().refine(
    (val) => {
      if (val.startsWith("npub1")) {
        return npubPattern.test(val);
      }
      return z.string().email().safeParse(val).success;
    },
    { message: "Enter a valid email address or Nostr npub" },
  ),
});

export type SubscriberInput = z.infer<typeof subscriberSchema>;
