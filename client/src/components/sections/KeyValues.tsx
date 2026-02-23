import { Cloud, Zap, Server, GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Deploy Anywhere",
    description: "Run on AWS Lambda, Render.com, Fly.io, Railway, or any cloud platform. Your infrastructure, your sovereignty, zero vendor lock-in."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Nodeless & Lightweight",
    description: "Powered by Breez SDK. No node management required. Instant Bitcoin payments built-in. Deploy on free tiers."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Full Sovereignty",
    description: "You hold the keys. You run the code. No third party can freeze, censor, or access your funds. True freedom to transact."
  },
  {
    icon: <GlobeLock className="w-6 h-6" />,
    title: "Automated Treasury",
    description: "Automatically route payments to your onchain Bitcoin wallet or other wallets. Set it once, let it run."
  }
];

export function KeyValues() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-mono text-white mb-12 opacity-50">/ CORE_CAPABILITIES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
