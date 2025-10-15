"use client"

import { Users } from "lucide-react"
import Image from "next/image"

const speakers = [
  {
    name: "Dr Ririn Salwa Purnamasari",
    title: "Senior Economist, World Bank",
    description: "East Asia and Pacific Poverty and Equity Global Practice",
    category: "World Bank Lecture",
    image: "/dr-ririn-salwa-purnamasari.png",
    link: "https://www.worldbank.org/en/about/people/r/ririn-salwa-purnamasari",
  },
  {
    name: "Ibrahim Sani",
    title: "CEO, Yayasan Peneraju",
    description: "Moderator - Forum 1",
    category: "Forum 1",
    image: "/Ibrahim_Sani_pfp.jpeg",
    link: "https://www.linkedin.com/in/ibrahimsani",
  },
  {
    name: "Shakira Teh Sharifuddin",
    title: "Senior Economist, World Bank",
    description: "People/Human Development Vice Presidency",
    category: "Forum 1",
    image: "/Shakira_Teh_pfp.jpeg",
    link: "https://my.linkedin.com/in/shakirateh",
  },
  {
    name: "Shahnaz Al-Sadat",
    title: "Managing Director, Sekolah Anak Malaysia",
    description: "Education Reform & Talent Development",
    category: "Forum 1",
    image: "/Shahnaz_pfp.jpeg",
    link: "https://www.linkedin.com/in/shahnaz-al-sadat",
  },
  {
    name: "Prof. Dr Jomo Kwame Sundaram",
    title: "Council of Elders, KRI",
    description: "Visiting Fellow, Khazanah Research Institute",
    category: "Forum 1",
    image: "/Jomo_pfp.png",
    link: "https://www.krinstitute.org/people/jomo-kwame-sundaram/",
  },
  {
    name: "Kristina Rai",
    title: "COO, Asia School of Business",
    description: "Moderator - Forum 2",
    category: "Forum 2",
    image: "/Kristina-Rai_pfp.jpg",
    link: "https://www.asb.edu.my/about/leadership-team/kristina-rai/",
  },
  {
    name: "Dr Muhammed Abdul Khalid",
    title: "Author of The Colour of Inequality",
    description: "Research Fellow, IKMAS",
    category: "Forum 2",
    image: "/abdul_khalid.avif",
    link: "https://www.ukm.my/ikmas/dr-muhammed-abdul-khalid/",
  },
  {
    name: "Sharaad Kuttan",
    title: "BFM Producer",
    description: "Anchor & Presenter, BFM 89.9",
    category: "Forum 2",
    image: "/Sharaad-Kuttan.jpg",
    link: "https://my.linkedin.com/in/sharaad-kuttan-178214104",
  },
  {
    name: "Firdaos Rosli",
    title: "Chief Economist, AmBank",
    description: "AmBank Group",
    category: "Forum 2",
    image: "/Firdaos.jpeg",
    link: "https://my.linkedin.com/in/firdaos-rosli-65a26799",
  },
]

export function SpeakersSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Users className="h-4 w-4" />
            <span className="text-sm font-medium">Previous Speakers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Learn From Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            UMES brings together distinguished economists, policymakers, and industry professionals to share their
            expertise and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <a key={index} href={speaker.link} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 h-full">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
                    {speaker.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-semibold text-accent mb-2">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground">{speaker.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
