import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Drive growth, increase conversions, and build a powerful online presence 
              with our comprehensive digital marketing solutions. From SEO to social media, 
              we've got you covered.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-bg hover:opacity-90 transition-opacity text-white group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 gradient-bg opacity-20 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  {/* SVG Placeholder */}
                  <svg
                    className="w-64 h-64 mx-auto mb-4"
                    viewBox="0 0 300 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="150" cy="150" r="120" fill="currentColor" opacity="0.1" />
                    <circle cx="150" cy="150" r="80" fill="currentColor" opacity="0.2" />
                    <circle cx="150" cy="150" r="40" fill="currentColor" opacity="0.3" />
                    <path
                      d="M150 110 L170 130 L150 150 L130 130 Z"
                      fill="currentColor"
                      opacity="0.8"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Digital Growth</h3>
                  <p className="text-sm opacity-80">Visualizing your success</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 glass-effect">
                <div className="text-xs text-white font-medium">📈 +150% Growth</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 glass-effect">
                <div className="text-xs text-white font-medium">🎯 ROI Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}