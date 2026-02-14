import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { subscriberSchema } from "../shared/subscriber";
import { getSupabase } from "./supabase";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/subscribers", async (req, res) => {
    const parsed = subscriberSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid contact value" });
    }

    const { contact } = parsed.data;
    const contact_type = contact.startsWith("npub1") ? "npub" : "email";

    const { error } = await getSupabase()
      .from("subscribers")
      .insert({ contact_value: contact, contact_type });

    if (error) {
      if (error.code === "23505") {
        return res.status(409).json({ message: "Already on the list" });
      }
      return res.status(500).json({ message: "Something went wrong" });
    }

    return res.status(201).json({ message: "Subscribed" });
  });

  return httpServer;
}
