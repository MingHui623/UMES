import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">UMES</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Universiti Malaya Economics Summit - Empowering the next generation of economic leaders.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#about" className="hover:text-secondary transition-colors">
                    About UMES
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-secondary transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#register" className="hover:text-secondary transition-colors">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-secondary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#schedule" className="hover:text-secondary transition-colors">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#speakers" className="hover:text-secondary transition-colors">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#sponsors" className="hover:text-secondary transition-colors">
                    Sponsors
                  </a>
                </li>
                <li>
                  <a href="#past-events" className="hover:text-secondary transition-colors">
                    Past Events
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/umeconsummit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/um.econsummit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/umeconsummit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=exaffairs.umes@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
  aria-label="Email"
>
  <Mail className="h-5 w-5" />
</a>
              </div>
              <p className="text-sm text-primary-foreground/70">
                Organized by PEKUMA
                <br />
                Universiti Malaya
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} UMES. All rights reserved. Organized by PEKUMA, Universiti Malaya.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
