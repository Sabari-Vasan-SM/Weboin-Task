"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "/api/placeholder/60/60",
    content: "DigitalPro transformed our online presence completely. Our organic traffic increased by 300% in just 6 months, and our conversion rates have never been better. Their team is professional, responsive, and truly understands our business goals.",
    rating: 5,
    results: "300% traffic increase",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "E-commerce Plus",
    image: "/api/placeholder/60/60",
    content: "Working with DigitalPro has been a game-changer for our e-commerce business. Their PPC campaigns generated over $2M in revenue while maintaining a fantastic ROAS. The team's expertise in data-driven marketing is unmatched.",
    rating: 5,
    results: "$2M+ revenue generated",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Local Bistro",
    image: "/api/placeholder/60/60",
    content: "As a local business, we were struggling to compete online. DigitalPro's local SEO strategies helped us dominate our market. We now rank #1 for all our target keywords and see a steady stream of new customers every day.",
    rating: 5,
    results: "#1 local rankings",
  },
  {
    id: 4,
    name: "David Kim",
    role: "VP Marketing",
    company: "SaaS Solutions",
    image: "/api/placeholder/60/60",
    content: "The social media campaigns created by DigitalPro have been phenomenal. Our engagement rates improved by 400%, and we've built a loyal community of over 50K followers. Their content strategy is both creative and results-driven.",
    rating: 5,
    results: "400% engagement increase",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Owner",
    company: "Wellness Studio",
    image: "/api/placeholder/60/60",
    content: "DigitalPro helped us establish a strong brand identity and online presence from scratch. Their comprehensive approach covering everything from website design to social media has been instrumental in our rapid growth.",
    rating: 5,
    results: "Brand built from scratch",
  },
]

// Skeleton component for loading state
export function TestimonialSkeleton() {
  return (
    <Card className="w-full mx-auto">
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-muted rounded-full animate-pulse"></div>
          <div>
            <div className="w-32 h-5 bg-muted rounded animate-pulse mb-2"></div>
            <div className="w-24 h-4 bg-muted rounded animate-pulse"></div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-muted rounded animate-pulse"></div>
          <div className="w-full h-4 bg-muted rounded animate-pulse"></div>
          <div className="w-3/4 h-4 bg-muted rounded animate-pulse"></div>
        </div>
        <div className="w-32 h-6 bg-muted rounded animate-pulse"></div>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-slide functionality
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped 
            achieve remarkable growth through our digital marketing strategies.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {isLoading ? (
              <TestimonialSkeleton />
            ) : (
              <Card className="w-full mx-auto hover:shadow-lg transition-shadow">
                <CardContent className="p-8 lg:p-12">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary/60" />
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-foreground text-lg">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-muted-foreground">
                          {currentTestimonial.role} at {currentTestimonial.company}
                        </div>
                        {/* Star Rating */}
                        <div className="flex items-center mt-1">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results Badge */}
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {currentTestimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            {!isLoading && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-background border border-border hover:bg-accent transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-background border border-border hover:bg-accent transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Pagination Dots */}
          {!isLoading && (
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}