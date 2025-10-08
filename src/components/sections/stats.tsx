import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Award, Calendar } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
    description: "Businesses we've helped grow",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: TrendingUp,
    number: "1000+",
    label: "Projects Completed",
    description: "Successful campaigns delivered",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Calendar,
    number: "5+",
    label: "Years Experience",
    description: "In digital marketing excellence",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Award,
    number: "98%",
    label: "Client Retention",
    description: "Long-term partnerships",
    color: "text-orange-600 dark:text-orange-400",
  },
]

const achievements = [
  { metric: "Average ROI Increase", value: "250%" },
  { metric: "Traffic Growth", value: "180%" },
  { metric: "Conversion Rate Improvement", value: "65%" },
  { metric: "Cost Per Acquisition Reduction", value: "40%" },
  { metric: "Brand Awareness Lift", value: "320%" },
  { metric: "Social Media Engagement", value: "400%" },
]

export function Stats() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Numbers That Tell
            <br />
            <span className="gradient-text">Our Story</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These metrics represent more than just numbers—they reflect the real impact 
            we&apos;ve made on businesses across various industries.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-muted/50 ${stat.color} mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>

        {/* Performance Metrics */}
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Average Client Results
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the average improvements our clients experience within the first 12 months 
              of working with us. Your results may vary based on industry, budget, and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.metric} className="text-center p-6">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {achievement.value}
                </div>
                <div className="text-foreground font-medium">
                  {achievement.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to become our next success story?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their digital presence 
            and achieved remarkable growth with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Start Your Growth Journey
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}