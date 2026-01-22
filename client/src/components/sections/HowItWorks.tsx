import { motion } from "framer-motion";
import networkImg from "@assets/images/minimal_network_nodes_for_how-it-works_section.png";

const steps = [
  {
    id: "01",
    title: "Choose Your Tools",
    desc: "Select from eCash mints (Nutshell), lightweight BTCPayServer deployments, custom Lightning nodes, or combine multiple services. Pre-configured, production-ready.",
  },
  {
    id: "02",
    title: "Deploy in Minutes",
    desc: "One-click deployment to Fly.io, Render, AWS Lambda, or your preferred platform. Environment setup automated. SSL handled. Live in under 5 minutes.",
  },
  {
    id: "03",
    title: "Transact Freely",
    desc: "Generate payment APIs, integrate with your apps, configure automated treasury management. You're now your own Bitcoin payment provider. No permission required.",
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
              className="w-full rounded-lg border border-white/10 opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
