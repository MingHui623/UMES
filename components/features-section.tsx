import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, TrendingUp, Users, Lightbulb, Award, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Briefcase,
    title: "Case Competitions",
    description:
      "Tackle real-world economic challenges with case studies designed by industry experts. Apply theoretical knowledge to practical scenarios and compete for prizes.",
  },
  {
    icon: TrendingUp,
    title: "Market Simulations",
    description:
      "Experience the thrill of financial markets through interactive trading games and economic simulations that test your strategic thinking.",
  },
  {
    icon: MessageSquare,
    title: "Panel Discussions",
    description:
      "Engage with economists, policymakers, and industry leaders in thought-provoking discussions about current economic issues and future trends.",
  },
  {
    icon: Lightbulb,
    title: "Interactive Workshops",
    description:
      "Develop practical skills through hands-on workshops covering data analysis, economic modeling, policy evaluation, and more.",
  },
  {
    icon: Users,
    title: "Networking Forums",
    description:
      "Connect with like-minded peers, mentors, and professionals. Build relationships that extend beyond the summit.",
  },
  {
    icon: Award,
    title: "Recognition & Prizes",
    description:
      "Compete for a prize pool of RM 10,000 and gain recognition for your analytical prowess and innovative thinking.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-secondary/5 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent text-balance">
              A Comprehensive Learning Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              UMES combines competitive challenges, expert insights, and collaborative learning to create an
              unforgettable experience for aspiring economists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border-border hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all group"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all">
                      <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
