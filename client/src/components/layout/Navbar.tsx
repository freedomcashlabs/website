import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-white hover:text-primary transition-colors cursor-pointer">
            freedom<span className="text-primary">.cash</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-mono text-muted-foreground hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-mono text-muted-foreground hover:text-white transition-colors">How it Works</a>
          <a href="#manifesto" className="text-sm font-mono text-muted-foreground hover:text-white transition-colors">Manifesto</a>
          <a href="#security" className="text-sm font-mono text-muted-foreground hover:text-white transition-colors">Security</a>
          <Button variant="outline" className="font-mono text-primary border-primary/50 hover:bg-primary/10 hover:text-primary">
            Get Early Access
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-background p-4 flex flex-col gap-4">
          <a href="#features" className="text-sm font-mono text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-sm font-mono text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>How it Works</a>
          <a href="#manifesto" className="text-sm font-mono text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>Manifesto</a>
          <a href="#security" className="text-sm font-mono text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>Security</a>
          <Button className="w-full font-mono bg-primary text-black hover:bg-primary/90">
            Get Early Access
          </Button>
        </div>
      )}
    </nav>
  );
}
