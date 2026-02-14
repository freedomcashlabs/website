import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-mono text-white mb-12 text-center">FREQUENTLY ASKED</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Do I need to run my own Lightning node?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No. We use Breez SDK's nodeless architecture. You get full Lightning and Liquid Network functionality without managing nodes, channels, or liquidity. Deploy and go.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">What does it cost to run?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Start at $0/month using free tiers from AWS Lambda, Render.com, or Fly.io. Scale to paid tiers as your transaction volume grows. Freedom shouldn't require wealth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Do you have access to my Bitcoin?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Never. You control the private keys. Infrastructure runs in your environment. We provide deployment tools, not custodial services. Your freedom, your keys.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Can this handle real transaction volume?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes. The architecture is production-ready and scales horizontally. Start on free tiers, scale to dedicated infrastructure as needed. Same code, zero refactoring.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">What Bitcoin technologies are supported?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Lightning Network and Liquid Network via Breez SDK. We support both Liquid and Spark backends. Automated treasury routing to onchain Bitcoin wallets included.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">How does automated treasury management work?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Configure rules to automatically route incoming payments to your onchain Bitcoin wallet, different Lightning wallets, or split between multiple destinations. Set it once and payments flow automatically according to your rules.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Why build this as open source?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Freedom to transact requires freedom to verify, audit, and trust. Open source ensures no one controls the tools of financial sovereignty. Your freedom shouldn't depend on our permission.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
