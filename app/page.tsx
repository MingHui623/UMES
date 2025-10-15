import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { SpeakersSection } from "@/components/speakers-section"
import { GallerySection } from "@/components/gallery-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BenefitsSection />
      <SpeakersSection />
      <GallerySection />
      <CtaSection />
      <Footer />
    </main>
  )
}
