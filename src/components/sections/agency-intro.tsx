import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Award } from "lucide-react"
import { Team } from "./team"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with data-driven digital marketing strategies that deliver measurable results and sustainable growth.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading digital marketing agency that transforms how businesses connect with their audiences in the digital age.",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Transparency, innovation, and client success drive everything we do. We believe in building long-term partnerships based on trust and results.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in every campaign, strategy, and client interaction. Your success is our success.",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
]

export function AgencyIntro() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About DigitalPro
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Transforming Businesses Through
            <br />
            <span className="gradient-text">Digital Innovation</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded in 2019, DigitalPro has been at the forefront of digital marketing innovation. 
            We combine creative thinking with data-driven strategies to help businesses of all sizes 
            achieve their digital marketing goals and drive sustainable growth.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                DigitalPro was born from a simple belief: every business deserves access to world-class 
                digital marketing expertise. Our founders, with over 15 years of combined experience 
                in digital marketing, recognized the gap between traditional marketing agencies and 
                the evolving digital landscape.
              </p>
              <p className="leading-relaxed">
                Starting with just three team members and a handful of clients, we&apos;ve grown into a 
                full-service digital marketing agency serving over 500 businesses worldwide. Our 
                growth is a testament to our commitment to delivering measurable results and 
                exceptional client experiences.
              </p>
              <p className="leading-relaxed">
                Today, we&apos;re proud to be a trusted partner for businesses ranging from startups 
                to Fortune 500 companies, helping them navigate the complex digital landscape 
                and achieve remarkable growth.
              </p>
            </div>
          </div>
          
          {/* Video Placeholder: autoplaying YouTube embed */}
          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 gradient-bg opacity-20 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/QsY8fnvMn6c?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1"
                    title="Our Story - DigitalPro"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline Team Section immediately after Our Story */}
        <div className="mt-12">
          <Team />
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={value.title} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg ${value.color} mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="mt-20 pt-16 border-t border-border text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Recognized for Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="font-semibold text-foreground mb-2">Best Digital Agency 2023</h3>
              <p className="text-muted-foreground text-sm">Marketing Excellence Awards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="font-semibold text-foreground mb-2">5-Star Client Rating</h3>
              <p className="text-muted-foreground text-sm">Based on 200+ reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-semibold text-foreground mb-2">Top Growth Agency</h3>
              <p className="text-muted-foreground text-sm">Inc. 5000 List 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}