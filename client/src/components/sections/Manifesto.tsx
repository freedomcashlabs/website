import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[80vh]">

        {/* Left: Dark side -- Declarations */}
        <div className="w-full lg:w-1/2 bg-black relative flex items-center">
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)`,
            }}
          />

          {/* Orange vertical accent line */}
          <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden lg:block" />

          <div className="relative z-10 px-8 md:px-16 lg:px-20 py-24 lg:py-32 w-full">
            <div className="space-y-1 font-mono font-bold tracking-tighter leading-[0.85]">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
              >
                MONEY IS{" "}
                <span className="text-primary">SPEECH</span>.
              </motion.div>

              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/30"
              >
                PRIVACY IS NOT
              </motion.div>

              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/30"
              >
                A <span className="text-primary">CRIME</span>.
              </motion.div>

              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white pt-4"
              >
                FREEDOM TO
              </motion.div>

              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600"
              >
                TRANSACT.
              </motion.div>

              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/20 pt-2"
              >
                IS{" "}
                <span className="text-white">NON-NEGOTIABLE</span>.
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right: Light side -- Explanation */}
        <div className="w-full lg:w-1/2 bg-zinc-100 relative flex items-center">
          {/* Noise/grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
            }}
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative z-10 px-8 md:px-16 lg:px-20 py-24 lg:py-32 w-full"
          >
            {/* Small label */}
            <div className="font-mono text-xs text-zinc-400 tracking-widest uppercase mb-8">
              / manifesto
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-black font-medium leading-relaxed">
                We build parallel systems, not permissioned platforms.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                freedom.cash is built for individuals and businesses who refuse surveillance finance,
                want permissionless payments, and understand Bitcoin as freedom tech.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Your keys. Your infrastructure. No intermediaries. No permission required.
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-zinc-300 mb-12" />

            <Link
              href="/manifesto"
              className="group inline-flex items-center text-lg font-mono font-bold text-black hover:text-primary transition-colors cursor-pointer"
            >
              <span className="border-b-2 border-black group-hover:border-primary transition-colors pb-0.5">
                Read the full manifesto
              </span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
