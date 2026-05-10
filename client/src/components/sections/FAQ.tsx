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
            <AccordionTrigger className="text-white hover:text-primary font-mono">What is Freedom Pay?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Freedom Pay is a simple, lightweight Bitcoin payments API. Powered by Breez SDK's nodeless architecture — no node management, no complex setup. You get checkout pages, donation pages, webhooks, and treasury automation out of the box, deployable to any cloud platform in minutes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Do I need to run my own Lightning node?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No. Freedom Pay is built on Breez SDK's nodeless architecture. You get full Lightning and Liquid Network functionality without managing nodes, channels, or liquidity. Deploy and go.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">What does it cost to run?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Start at $0/month using free tiers from AWS Lambda, Render.com, or Fly.io. Scale to paid tiers as your transaction volume grows. Freedom shouldn't require wealth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Do you have access to my Bitcoin?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Never. Freedom Pay runs in your environment and you control the private keys. We provide open-source software, not custodial services. Your keys, your funds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">What Bitcoin technologies does Freedom Pay support?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Lightning Network and Liquid Network via Breez SDK, with both Liquid and Spark backends supported. Automated treasury routing to onchain Bitcoin wallets is included out of the box.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">How does treasury automation work?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Configure rules to automatically route incoming payments to your onchain Bitcoin wallet, different Lightning wallets, or split across multiple destinations. Set it once and Freedom Pay handles the rest.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Why is Freedom Pay open source?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Financial sovereignty requires the freedom to verify and audit the tools you depend on. Open source ensures Freedom Pay belongs to no one — and can be trusted by everyone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
