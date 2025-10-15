"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_5259.JPG-Kg0ZYbmn9iPYCIBQaudsJNnuhMeBej.jpeg",
      alt: "UMES participants networking at the summit",
      caption: "Networking & Connections",
      description: "Build lasting professional relationships with peers and industry leaders",
      link: "#", // Add your link here
    },
    {
      src: "/summit-atmosphere-participants.jpg",
      alt: "Engaged participants enjoying the UMES summit",
      caption: "Summit Atmosphere",
      description: "Experience the energy and excitement of Malaysia's premier economics summit",
      link: "#", // Add your link here
    },
    {
      src: "/case-study-challenge.jpg",
      alt: "Students collaborating on case study challenge",
      caption: "Case Study Challenges",
      description: "Tackle real-world economic problems through intensive case competitions",
      link: "#", // Add your link here
    },
    {
      src: "/competitions-awards.jpg",
      alt: "UMES 2025 Awards Ceremony with winners holding prize checks",
      caption: "Competitions & Awards",
      description: "Compete for prizes and recognition at our annual awards ceremony",
      link: "#", // Add your link here
    },
    {
      src: "/interactive-workshops.jpg",
      alt: "Participants engaged in hands-on interactive workshop",
      caption: "Interactive Workshops",
      description: "Gain practical skills through hands-on learning sessions with experts",
      link: "#", // Add your link here
    },
    {
      src: "/expert-panel-discussions.jpg",
      alt: "Expert panelists including economists and industry professionals at UMES",
      caption: "Expert Panel Discussions",
      description: (
        <>
          Learn from leading economists and industry professionals including{" "}
          <a
            href="https://asb.edu.my/about/leadership-team/kristina-rai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 underline font-semibold"
          >
            Kristina Rai
          </a>{" "}
          (COO, Asia School of Business),{" "}
          <a
            href="https://my.linkedin.com/in/sharaad-kuttan-178214104"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 underline font-semibold"
          >
            Sharaad Kuttan
          </a>{" "}
          (BFM Radio),{" "}
          <a
            href="https://my.linkedin.com/in/firdaos-rosli-65a26799"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 underline font-semibold"
          >
            Firdaos Rosli
          </a>{" "}
          (Chief Economist, AmBank), and Dr. Muhammed Abdul Khalid (IKMAS, UKM)
        </>
      ),
      link: "#",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

//swipe detection
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX)
  }

  const onTouchEnd = () => {
    const distance = touchStartX - touchEndX
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) nextSlide()
      else prevSlide()
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore moments from past UMES events showcasing collaboration, learning, and the vibrant economics
            community
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Slideshow Container */}
          <div className="relative overflow-hidden rounded-lg border border-accent/20 bg-card shadow-xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}>
            <div className="aspect-[16/9] relative">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">{image.caption}</h3>
                      <div className="text-white/90 text-base md:text-lg mb-4 max-w-2xl">
                        {typeof image.description === "string" ? image.description : image.description}
                      </div>
                      <a
                        href={image.link}
                        className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      </div>
    </section>
  )
}
