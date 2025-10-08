import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/api/placeholder/300/300",
    bio: "Sarah has over 10 years of experience in digital marketing and founded DigitalPro with a vision to democratize access to world-class marketing expertise. She holds an MBA from Stanford and has helped over 200 businesses scale their operations.",
    expertise: ["Strategic Planning", "Business Development", "Team Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@digitalpro.com"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of SEO",
    image: "/api/placeholder/300/300",
    bio: "Michael is a technical SEO expert with 8+ years of experience. He has worked with Fortune 500 companies and startups alike, consistently delivering 200%+ organic traffic growth. He's a frequent speaker at marketing conferences.",
    expertise: ["Technical SEO", "Content Strategy", "Analytics"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@digitalpro.com"
    }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "/api/placeholder/300/300",
    bio: "Emily brings creative excellence to our campaigns with her background in design and brand strategy. She has won multiple awards for her creative work and has helped rebrand over 50 companies.",
    expertise: ["Brand Design", "Creative Strategy", "Content Creation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@digitalpro.com"
    }
  },
  {
    id: 4,
    name: "David Kim",
    role: "PPC Specialist",
    image: "/api/placeholder/300/300",
    bio: "David is a certified Google and Facebook ads expert who has managed over $10M in ad spend. His data-driven approach has helped clients achieve an average 300% ROI on their advertising investments.",
    expertise: ["Paid Advertising", "Data Analysis", "Conversion Optimization"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@digitalpro.com"
    }
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Social Media Manager",
    image: "/api/placeholder/300/300",
    bio: "Lisa specializes in building engaged communities and viral content strategies. She has grown social media accounts from zero to millions of followers and has a deep understanding of all major platforms.",
    expertise: ["Social Media Strategy", "Community Building", "Influencer Marketing"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@digitalpro.com"
    }
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Data Analyst",
    image: "/api/placeholder/300/300",
    bio: "James turns data into actionable insights that drive campaign performance. With a background in statistics and machine learning, he helps our team make data-driven decisions that maximize ROI.",
    expertise: ["Data Analytics", "Reporting", "Performance Optimization"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@digitalpro.com"
    }
  },
]

export function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the Experts Behind
            <br />
            <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of digital marketing experts brings together decades of experience 
            across all aspects of digital marketing. We're passionate about driving results 
            and helping your business thrive.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Member Photo */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Culture Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Culture & Values
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  At DigitalPro, we believe that great results come from great people working 
                  together. Our team culture is built on collaboration, continuous learning, 
                  and a shared passion for helping our clients succeed.
                </p>
                <p className="leading-relaxed">
                  We invest heavily in our team's professional development, attend industry 
                  conferences, and stay at the forefront of digital marketing trends and 
                  technologies. This ensures our clients always benefit from the latest 
                  strategies and best practices.
                </p>
                <p className="leading-relaxed">
                  Our diverse backgrounds and expertise areas allow us to approach challenges 
                  from multiple angles, creating comprehensive solutions that drive real 
                  business results.
                </p>
              </div>
            </div>

            {/* Culture Highlights */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg mt-1">
                  <span className="text-lg">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Results-Driven</h4>
                  <p className="text-muted-foreground text-sm">
                    Every team member is focused on delivering measurable results for our clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg mt-1">
                  <span className="text-lg">🚀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Innovation First</h4>
                  <p className="text-muted-foreground text-sm">
                    We constantly explore new technologies and strategies to stay ahead of the curve.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg mt-1">
                  <span className="text-lg">🤝</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Collaborative Spirit</h4>
                  <p className="text-muted-foreground text-sm">
                    We believe in the power of teamwork and cross-functional collaboration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 text-primary rounded-lg mt-1">
                  <span className="text-lg">📚</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    We invest in our team's growth through training, certifications, and conferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}