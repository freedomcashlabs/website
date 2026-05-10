import { motion } from "framer-motion";
import networkImg from "@assets/images/minimal_network_nodes_for_how-it-works_section.webp";

const steps = [
  {
    id: "01",
    title: "Deploy Freedom Pay",
    desc: "One command to deploy Freedom Pay to Fly.io, Render, AWS Lambda, or your preferred platform. Breez SDK initialized automatically. SSL handled. Live in under 5 minutes.",
  },
  {
    id: "02",
    title: "Create Payment Links",
    desc: "Use the REST API to generate hosted checkout pages and donation pages in seconds. Share the link. Accept Bitcoin payments immediately — no frontend code needed.",
  },
  {
    id: "03",
    title: "Receive & Route Automatically",
    desc: "Webhooks notify your app on every payment event. Treasury automation routes funds to your onchain wallet or splits across destinations. You're your own payment provider.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-32 bg-background relative border-y border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                HOW <span className="text-primary">IT WORKS</span>
              </h2>

              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="font-mono text-4xl text-white/20 font-bold group-hover:text-primary transition-colors">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-mono font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              src={networkImg}
              alt="Network Diagram"
              loading="lazy"
              className="w-full rounded-lg border border-white/10 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
