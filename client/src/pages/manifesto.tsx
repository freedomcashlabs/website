import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-20 border-b border-white/5">
          <div className="container mx-auto px-6">
            <Link href="/" className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-12 cursor-pointer">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-8"
            >
              FREEDOM TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">TRANSACT</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground font-mono"
            >
              A manifesto for parallel financial infrastructure.
            </motion.p>
          </div>
        </section>

        {/* Manifesto Body */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
                  Money is speech.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    How you spend your money says what you value. When someone controls how you spend, they control what you can say. That is censorship.
                  </p>
                  <p>
                    The financial system was supposed to be plumbing. Move value from one place to another, quickly and cheaply. Instead it became a surveillance apparatus. Wire transfers get logged. Card swipes get profiled. Accounts get frozen arbitrarily by institutions that answer to regulators before they answer to you.
                  </p>
                  <p>
                    We did not sign up for this. Nobody asked us.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
                  Privacy is not a crime.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    There is a difference between accountability and surveillance. Accountability means you answer for what you do. Surveillance means someone watches everything you do on the assumption that you might do something wrong. One is justice. The other is control.
                  </p>
                  <p>
                    When you buy coffee with cash, nobody files a report. When you hand a friend twenty dollars, no compliance department flags it. Cash works because it is private by default. Digital payments reversed that. They made exposure the default and privacy the exception, something you have to fight for, explain, justify.
                  </p>
                  <p>
                    We reject that framing entirely. Privacy is the baseline. It is what you start with, not what you earn by proving you have nothing to hide.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
                  Velocity matters.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Money sitting still does nothing. Money moving builds things. It pays the contractor, who buys materials, who pays the supplier, who hires workers. The faster money circulates through an economy, the more work it does along the way. Economists call this the velocity of money. We think the entire payments industry forgot about it.
                  </p>
                  <p>
                    Traditional payment rails were not built for velocity. They were built for control. Three-day settlement windows. Batch processing. Intermediaries extracting rent at every hop. Each delay is friction, and friction slows circulation, and slow circulation means less economic activity for everyone involved.
                  </p>
                  <p>
                    Lightning settles in seconds. Liquid settles in minutes. No batch windows. No three-day holds while some bank earns float on your money. When payments clear instantly, a merchant restocks the same afternoon instead of waiting on receivables. Capital goes where it is needed instead of sitting in settlement queues.
                  </p>
                  <p>
                    Reduce the friction on every transaction and you increase the total throughput of the whole system. Freelancers stop bridging gaps with credit cards. Communities circulate value internally instead of leaking fees to distant intermediaries. The compounding effect of faster settlement is hard to overstate.
                  </p>
                  <p>
                    freedom.cash is built for velocity. Automated treasury management means your incoming payments route to where they need to go without manual intervention. No logging in to move funds around. No waiting for someone to approve a transfer. Set your rules once, and money flows. That is what infrastructure should do: get out of the way and let value move.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
                  Parallel systems, not permissioned platforms.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    We are not trying to fix the existing financial system. We are building next to it.
                  </p>
                  <p>
                    Reform means asking permission from the people who benefit from the current arrangement. It means lobbying regulators who rotate through the same banks they regulate. It means waiting for incumbents to voluntarily give up their advantages. History suggests this takes forever, if it happens at all.
                  </p>
                  <p>
                    Parallel systems skip that step. They do not ask for permission because they do not need it. Bitcoin does not require anyone's approval to exist. Lightning does not need a bank to route a payment. These are facts, not aspirations.
                  </p>
                  <p>
                    freedom.cash makes this practical. You deploy your own payment infrastructure, hold your own keys, set your own treasury rules. The code is open source and the deployment is self-hosted. The only person who can shut it down is you. No platform to get kicked off of. No terms of service that change on a whim.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
                  You hold the keys.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Self-custody is the foundation. Everything else follows from it.
                  </p>
                  <p>
                    Control your keys and nobody can freeze your account. Run your own infrastructure and nobody can deplatform you. There is no gap between you and your money for someone else to occupy.
                  </p>
                  <p>
                    This used to require serious technical knowledge. Running a Lightning node meant managing channels, monitoring liquidity, handling backups, staying online. Most people and most businesses could not justify that overhead. So they used custodians, and custodians became the new banks, and the cycle repeated.
                  </p>
                  <p>
                    Breez SDK changed the equation. Nodeless operation means you get Lightning and Liquid capability without the infrastructure burden. freedom.cash takes it further: deploy a complete payment stack to a cloud provider's free tier, configure your treasury routing, and walk away. Self-custody without the ops work. Sovereignty without the overhead.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
                  Freedom should not require wealth.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Financial sovereignty cannot be a luxury good. If only people with dedicated servers and DevOps teams can run their own payment infrastructure, then we have just recreated the existing hierarchy with different technology.
                  </p>
                  <p>
                    That is why freedom.cash is optimized for free tiers. AWS Lambda, Render, Fly.io, Railway. Your entire payments stack can run on infrastructure that costs nothing. Not cheap. Nothing. The tools are open source. The deployment is automated. The barrier to entry is having an internet connection and caring enough to set it up.
                  </p>
                  <p>
                    Someone selling goods in Lagos should have the same payment infrastructure available to them as a funded startup in San Francisco. The technology already exists. What was missing was packaging it so that normal people could actually use it.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-8">
                  Open source is non-negotiable.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    You cannot verify what you cannot read. You cannot trust what you cannot audit. Freedom to transact requires freedom to inspect the tools you use to transact.
                  </p>
                  <p>
                    Closed-source payment infrastructure is a contradiction. It asks you to trust someone else's code with your money while refusing to show you what that code does. That is the same deal the banks offer, just with a different interface.
                  </p>
                  <p>
                    Every line of freedom.cash is public. Find a bug, fix it. Disagree with a design decision, fork it. If we disappear tomorrow, the code keeps working. Your sovereignty does not depend on our continued existence.
                  </p>
                </div>
              </motion.div>

              {/* Closing declaration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-t border-white/10 pt-16"
              >
                <div className="space-y-2 font-mono font-bold tracking-tighter">
                  <p className="text-3xl md:text-5xl text-white">Money is speech.</p>
                  <p className="text-3xl md:text-5xl text-white/30">Privacy is not a crime.</p>
                  <p className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                    Freedom to transact is non-negotiable.
                  </p>
                </div>
                <p className="text-muted-foreground mt-10 font-mono text-sm">
                  Build it yourself. Run it yourself. Own it.
                </p>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
