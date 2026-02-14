import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Manifesto() {
  return (
    <section id="manifesto" className="py-32 bg-white text-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-2 font-mono font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.9]">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              MONEY IS SPEECH.
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500"
            >
              PRIVACY IS NOT A CRIME.
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              FREEDOM TO TRANSACT
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-500"
            >
              IS NON-NEGOTIABLE.
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-lg md:text-xl leading-relaxed font-medium">
              <p>
                We build parallel systems, not permissioned platforms. freedom.cash is built for individuals and businesses who refuse surveillance finance, want permissionless payments, and understand Bitcoin as freedom tech.
              </p>
            </div>
            <div className="flex items-end justify-start md:justify-end">
              <a href="#" className="group inline-flex items-center text-xl font-mono font-bold hover:text-primary transition-colors border-b-2 border-black hover:border-primary pb-1">
                Read the full manifesto
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
