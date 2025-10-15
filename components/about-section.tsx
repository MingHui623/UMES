export function AboutSection() {
  return (
    <section id= "about" className="py-24 bg-background border-t-4 border-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About UMES</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent text-balance leading-tight">
              Where Economics Meets Innovation
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                The Universiti Malaya Economics Summit (UMES), formerly known as the National Youth Economics Summit
                (NYES), is Malaysia's premier platform for undergraduate students passionate about economics and policy.
              </p>

              <p className="text-pretty">
                Organized by PEKUMA (Persatuan Ekonomi Universiti Malaya), UMES brings together bright minds from across
                the nation to engage in rigorous economic discourse, tackle real-world challenges, and build lasting
                connections with industry leaders and fellow economics enthusiasts.
              </p>

              <p className="text-pretty">
                Through a dynamic blend of case competitions, interactive workshops, panel discussions, and networking
                sessions, UMES empowers the next generation of economists, policymakers, and business leaders to think
                critically about the economic challenges shaping our world.
              </p>
            </div>

            <div className="pt-8 grid md:grid-cols-2 gap-8">
              <div className="space-y-3 border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To cultivate economic literacy and analytical thinking among Malaysian undergraduates through
                  immersive learning experiences and meaningful dialogue.
                </p>
              </div>

              <div className="space-y-3 border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading platform that shapes future economic leaders who drive sustainable and inclusive
                  growth in Malaysia and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
