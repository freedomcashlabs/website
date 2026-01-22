import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import heroBg from "@assets/images/dark_abstract_cypherpunk_mesh_background_for_hero_section.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Digital Mesh Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
          >
            FREEDOM TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">TRANSACT</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Accept and send Bitcoin payments anywhere. 
            <span className="text-white font-medium"> No KYC, no custodians, </span>
            just self custody.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-mono h-14 px-8 text-base">
              <Terminal className="mr-2 h-5 w-5" />
              Start with freedom.cash
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-mono h-14 px-8 text-base">
              Read the Manifesto <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Code Elements */}
      <div className="absolute right-0 bottom-20 hidden lg:block opacity-20 font-mono text-xs text-primary pointer-events-none select-none">
        <pre className="whitespace-pre">
{`> INITIALIZING ENCLAVE...
> VERIFYING SIGNATURES...
> ESTABLISHING SECURE CHANNEL...
> STATUS: CONNECTED [100%]
> PRIVACY_MODE: ACTIVE`}
        </pre>
      </div>
    </section>
  );
}
