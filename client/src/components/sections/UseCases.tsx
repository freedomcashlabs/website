import { CloudLightning, ShoppingCart, Code2, Users } from "lucide-react";

const cases = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Merchants & Businesses",
    desc: "Accept Lightning and Liquid payments without intermediaries. Deploy your own payment API to WooCommerce, Shopify, or custom checkouts. Automated treasury routes funds to your wallets. Freedom to transact on your terms."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developers & Builders",
    desc: "Deploy Breez SDK-powered payment APIs in minutes. Build censorship-resistant apps with nodeless infrastructure. REST APIs, webhooks, Lightning and Liquid support included. Freedom to build."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Communities & Projects",
    desc: "Operate community payment infrastructure with automated treasury management. Route incoming payments to multiple destinations automatically. Self-custodial coordination without intermediaries. Freedom to organize."
  },
  {
    icon: <CloudLightning className="w-6 h-6" />,
    title: "Anyone Seeking Sovereignty",
    desc: "Be your own bank. Deploy personal payment infrastructure powered by Breez SDK, receive Lightning and Liquid payments, automate your treasury routing. Freedom to transact is for everyone."
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
