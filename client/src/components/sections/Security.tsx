import { Cloud, Zap, Server } from "lucide-react";
import { motion } from "framer-motion";
import enclaveImg from "@assets/images/abstract_secure_enclave_visualization_for_security_section.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Security() {
  return (
    <section id="security" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-lg blur opacity-20"></div>
              <img 
                src={enclaveImg} 
                alt="Secure Enclave" 
                className="relative rounded-lg border border-white/10 w-full shadow-2xl hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/90 border border-white/20 p-2 rounded text-[10px] font-mono text-primary animate-pulse">
                ● STATUS: DEPLOY_READY
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              DEPLOY YOUR <br/>
              <span className="text-muted-foreground">PAYMENTS STACK.</span>
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Make Bitcoin payments trivial. Deploy BTCPay or Nutshell to AWS, Azure, Cloudflare, or Render.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="mt-1">
                  <Cloud className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-mono mb-2">Cloud Agnostic</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deploy to AWS Lambda, Azure Functions, Cloudflare Workers, or low-cost VPS providers like Fly.io.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-mono mb-2">Free Tier Friendly</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Optimized for lightweight deployment. Run your entire payments stack on free tiers of major providers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1">
                  <Server className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-mono mb-2">Self-Hosted Sovereignty</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    True financial freedom is self-hosted. You own the keys, the code, and the infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
               <h4 className="text-white font-bold font-mono mb-2">Confidential Compute (Coming Soon)</h4>
               <p className="text-muted-foreground text-xs mb-4">
                 Interested in managed secure enclaves instead? Join the waitlist.
               </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="bg-black border-white/20 text-white font-mono" />
                <Button className="bg-secondary text-black hover:bg-secondary/90 font-mono">
                  Notify Me
                </Button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
