import { CloudLightning, ShoppingCart, Code2 } from "lucide-react";

const cases = [
  {
    icon: <CloudLightning className="w-6 h-6" />,
    title: "Serverless Deployments",
    desc: "Deploy BTCPay Server on AWS Lambda or Cloudflare Workers for near-zero cost operation."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Merchants",
    desc: "Connect WooCommerce backends directly to your self-hosted instance. No transaction fees."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developers",
    desc: "Spin up freedom.cash APIs on Zeabur or Fly.io and build censorship-resistant apps instantly."
  }
];

export function UseCases() {
  return (
    <section className="py-24 border-y border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-mono text-white mb-12 opacity-50">/ TARGET_USERS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
