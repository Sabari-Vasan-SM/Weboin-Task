import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Target, Users, Palette, ArrowRight } from "lucide-react"

const services = [
  {
    title: "SEO Optimization",
    description: "Boost your organic visibility and drive qualified traffic with data-driven SEO strategies.",
    icon: Search,
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Paid Advertising",
    description: "Maximize ROI with targeted PPC campaigns across Google, Facebook, and other platforms.",
    icon: Target,
    features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "A/B Testing"],
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    title: "Social Media Marketing",
    description: "Build engaged communities and amplify your brand across all social platforms.",
    icon: Users,
    features: ["Content Creation", "Community Management", "Social Analytics", "Influencer Marketing"],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Brand Strategy",
    description: "Develop a compelling brand identity that resonates with your target audience.",
    icon: Palette,
    features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Market Positioning"],
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
]

// Skeleton component for loading state
export function ServiceCardSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-muted rounded-lg animate-pulse"></div>
          <div>
            <div className="w-32 h-5 bg-muted rounded animate-pulse mb-2"></div>
            <div className="w-24 h-4 bg-muted rounded animate-pulse"></div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-muted rounded animate-pulse"></div>
          <div className="w-3/4 h-4 bg-muted rounded animate-pulse"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-6 bg-muted rounded animate-pulse"></div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function ServiceCard({ service, isLoading = false }: { service: typeof services[0], isLoading?: boolean }) {
  if (isLoading) {
    return <ServiceCardSkeleton />
  }

  const IconComponent = service.icon

  return (
    <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg ${service.color} group-hover:scale-110 transition-transform`}>
            <IconComponent className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {service.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4 leading-relaxed">
          {service.description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.map((feature) => (
            <Badge key={feature} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
          Learn more
          <ArrowRight className="ml-1 h-3 w-3" />
        </div>
      </CardContent>
    </Card>
  )
}

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Digital Marketing
            <br />
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From search engine optimization to social media marketing, we provide 
            end-to-end digital marketing services that drive results and grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* CTA Section removed per request */}
      </div>
    </section>
  )
}