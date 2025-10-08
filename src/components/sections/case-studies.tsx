import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Revenue Growth",
    client: "TechStore",
    category: "E-commerce",
    description: "Increased online revenue by 250% through comprehensive SEO and PPC optimization.",
    results: [
      { metric: "Revenue Increase", value: "+250%" },
      { metric: "Organic Traffic", value: "+180%" },
      { metric: "Conversion Rate", value: "+45%" },
    ],
    image: "https://www.grandviewresearch.com/static/img/research/e-commerce-market.webp",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: 2,
    title: "SaaS Lead Generation",
    client: "CloudTech",
    category: "SaaS",
    description: "Generated 500+ qualified leads monthly through strategic content marketing and LinkedIn campaigns.",
    results: [
      { metric: "Monthly Leads", value: "+500" },
      { metric: "Cost per Lead", value: "-60%" },
      { metric: "Demo Requests", value: "+320%" },
    ],
    image: "https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/67b43175bc9d6ead9148d9bd_612e2a5b3712bbce58c07973_What%2520is%2520SaaS.png",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    id: 3,
    title: "Local Business Visibility",
    client: "Urban Café",
    category: "Local Business",
    description: "Boosted local search visibility and foot traffic through Google My Business optimization and local SEO.",
    results: [
      { metric: "Local Rankings", value: "#1" },
      { metric: "Store Visits", value: "+85%" },
      { metric: "Online Orders", value: "+150%" },
    ],
    image: "https://www.vizion.com/wp-content/smush-webp/2017/11/google-local-business.png.webp",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
]

export function CaseStudies() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Case Studies
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories That
            <br />
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how we've helped businesses across different industries achieve remarkable 
            growth through strategic digital marketing initiatives.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card 
              key={study.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <img
                  src={study.image}
                  alt={`${study.category} Project`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* overlay removed to show clean image */}
                <div className="absolute top-4 right-4">
                  <ArrowUpRight className="w-5 h-5 text-white/90 group-hover:text-white group-hover:scale-110 transition-all" />
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <Badge className={study.color}>
                    {study.category}
                  </Badge>
                </div>

                {/* Title & Client */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Client: {study.client}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Results:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {study.results.map((result, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{result.metric}</span>
                        <span className="text-sm font-semibold text-primary">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center">
            View All Case Studies
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}