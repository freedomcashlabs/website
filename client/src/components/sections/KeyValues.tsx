import { Cloud, Zap, Server, GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Deploy Anywhere",
    description: "Run on AWS Lambda, Azure, Cloudflare Workers, or Fly.io. You own the infrastructure."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Free Tier Friendly",
    description: "Optimized for lightweight deployment. Run your payments stack on free tiers of major providers."
  },
  {
    icon: <Server className="h-8 w-8 text-secondary" />,
    title: "Full Sovereignty",
    description: "No middlemen. No custodians. You hold the keys and run the code. Truly unstoppable."
  },
  {
    icon: <GlobeLock className="h-8 w-8 text-primary" />,
    title: "Easy Integration",
    description: "Plug into WooCommerce, Shopify, or custom apps with standard APIs in minutes."
  }
];

export function KeyValues() {
  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors hover:border-primary/50 relative"
            >
              <div className="mb-6 p-3 bg-black/50 w-fit border border-white/10 group-hover:border-primary/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
