import { CloudLightning, ShoppingCart, Code2, Users } from "lucide-react";

const cases = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Merchants & Businesses",
    desc: "Deploy Freedom Pay and accept Bitcoin without intermediaries. Generate hosted checkout pages, integrate with your existing stack via REST API. Treasury automation routes funds directly to your wallets."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developers & Builders",
    desc: "Freedom Pay gives you a clean REST API, webhooks, and hosted checkout pages out of the box. Build Bitcoin-native apps without managing Lightning nodes or running complex payment infrastructure."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Communities & Projects",
    desc: "Create a donation page in seconds. Route contributions to multiple wallets automatically. Freedom Pay handles the infrastructure — you focus on your community."
  },
  {
    icon: <CloudLightning className="w-6 h-6" />,
    title: "Anyone Seeking Sovereignty",
    desc: "Be your own payment provider. Freedom Pay runs in your environment, you hold the keys, and no one can freeze your funds. Powered by Breez SDK — nodeless, lightweight, sovereign."
  }
];

export function UseCases() {
  return (
    <section className="py-24 border-y border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-mono text-white mb-12 opacity-50">/ WHO_NEEDS_FREEDOM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((item, i) => (
            <div key={i} className="group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-mono">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
