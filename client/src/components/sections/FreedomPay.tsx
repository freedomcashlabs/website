import { motion } from "framer-motion";
import { CreditCard, Heart, Webhook, GitBranch } from "lucide-react";

const features = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Checkout Pages",
    desc: "Hosted, shareable Bitcoin checkout pages. Generate a payment link via API and send customers directly to a branded checkout — no frontend required.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Donation Pages",
    desc: "Dedicated donation flows for creators, open-source projects, and communities. Accept Bitcoin contributions with a single link. Self-custodial, no intermediaries.",
  },
  {
    icon: <Webhook className="w-6 h-6" />,
    title: "Webhooks",
    desc: "Real-time payment event notifications delivered to your app. Subscribe to payment received, settled, and failed events. Build reactive integrations in any stack.",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Treasury Automation",
    desc: "Configure rules to automatically route incoming payments to onchain Bitcoin wallets or split across multiple destinations. Set it once, let it run.",
  },
];

export function FreedomPay() {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-2xl font-mono text-white mb-4 opacity-50">/ FREEDOM_PAY</h2>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
            Simple, lightweight Bitcoin payments — deployable anywhere. Powered by{" "}
            <span className="text-primary font-mono">Breez SDK</span> — no node management,
            no complexity. Just a clean API for accepting Bitcoin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border border-white/10 bg-white/5 rounded-sm p-6 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center rounded mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
