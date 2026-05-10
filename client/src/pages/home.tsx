import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { KeyValues } from "@/components/sections/KeyValues";
import { FreedomPay } from "@/components/sections/FreedomPay";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Manifesto } from "@/components/sections/Manifesto";
import { UseCases } from "@/components/sections/UseCases";
import { Security } from "@/components/sections/Security";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <KeyValues />
        <FreedomPay />
        <HowItWorks />
        <Manifesto />
        <UseCases />
        <Security />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
