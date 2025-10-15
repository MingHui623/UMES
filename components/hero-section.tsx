import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/UMES_background.jpg')",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <img
          src="/umes-logo.png"
          alt="UMES Logo"
          className="mx-auto w-64 md:w-96 object-contain mb-8"
        />

        <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Malaysia's premier undergraduate economics summit bringing together future leaders to tackle real-world
          economic challenges
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
  <a href="#about">
    <Button
      size="lg"
      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 flex items-center transition-all duration-300"
    >
      Learn More About UMES
      <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 hover:translate-x-1" />
    </Button>
  </a>
</div>
    </section>
  )
}
