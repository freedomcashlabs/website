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
            <AccordionTrigger className="text-white hover:text-primary font-mono">Do you require KYC?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No. We do not collect identity information. We believe privacy is a human right.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Do you ever hold customer funds?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No. We are non-custodial. You maintain full control of your private keys and funds at all times.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">Can you block my transactions?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No. Our architecture prevents us from censoring transactions. The system is designed to be neutral infrastructure.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border border-white/10 px-4 bg-white/5 rounded-sm">
            <AccordionTrigger className="text-white hover:text-primary font-mono">What chains do you support?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Bitcoin (On-chain) and Lightning Network.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
