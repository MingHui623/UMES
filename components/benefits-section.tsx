import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Practical Economic Skills",
    description:
      "Move beyond textbooks and apply economic theories to real-world scenarios through case studies and simulations.",
  },
  {
    title: "Industry Connections",
    description: "Network with professionals, academics, and peers who share your passion for economics and policy.",
  },
  {
    title: "Policy Exposure",
    description:
      "Gain insights into how economic policies are formulated and their impact on society from experienced policymakers.",
  },
  {
    title: "Critical Thinking",
    description:
      "Sharpen your analytical abilities by tackling complex economic problems and engaging in rigorous debates.",
  },
  {
    title: "Career Advancement",
    description:
      "Stand out in your academic and professional journey with experience from Malaysia's premier economics summit.",
  },
  {
    title: "Collaborative Learning",
    description:
      "Work with diverse teams, exchange ideas, and learn from the perspectives of students from across Malaysia.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why Attend</span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-foreground bg-clip-text text-transparent text-balance leading-tight">
                Transform Your Understanding of Economics
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                UMES offers more than just academic learning. It's an opportunity to develop the skills, connections,
                and insights that will shape your future career in economics, policy, or business.
              </p>

              <div className="pt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hands-On Experience</h4>
                    <p className="text-muted-foreground text-sm">
                      Apply economic concepts in practical, competitive environments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Mentorship</h4>
                    <p className="text-muted-foreground text-sm">
                      Learn directly from economists, policymakers, and industry leaders
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Lasting Impact</h4>
                    <p className="text-muted-foreground text-sm">
                      Build skills and connections that extend far beyond the summit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all"
                >
                  <CardContent className="p-6 space-y-2">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
