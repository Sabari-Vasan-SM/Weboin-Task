import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white border-0">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Transform Your
                  <br />
                  Digital Presence?
                </h2>
                <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of successful businesses that have partnered with us to achieve 
                  remarkable growth. Let's discuss how we can help you reach your goals.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 transition-colors group font-semibold"
                  >
                    Get Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/50 text-white hover:bg-white/10 transition-colors"
                  >
                    View Our Work
                  </Button>
                </div>

                {/* Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-white/10 rounded-full mb-3">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-sm opacity-80">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-white/10 rounded-full mb-3">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-sm opacity-80">hello@digitalpro.com</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-white/10 rounded-full mb-3">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-1">Schedule</h3>
                    <p className="text-sm opacity-80">Book a consultation</p>
                  </div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.1" />
                  <circle cx="100" cy="100" r="60" fill="currentColor" opacity="0.2" />
                  <circle cx="100" cy="100" r="40" fill="currentColor" opacity="0.3" />
                  <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-foreground mb-2">Fast Results</h3>
              <p className="text-muted-foreground text-sm">
                See measurable improvements in your digital presence within 30 days
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">Proven Strategies</h3>
              <p className="text-muted-foreground text-sm">
                Data-driven approaches that have generated millions in revenue
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-foreground mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground text-sm">
                Personal account manager and 24/7 support for all your needs
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-lg italic text-muted-foreground mb-4">
              "Working with DigitalPro has been transformational for our business. Their strategic 
              approach and execution have exceeded all our expectations."
            </blockquote>
            <cite className="text-sm font-medium text-foreground">
              — Sarah Johnson, CEO of TechStart Inc.
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}