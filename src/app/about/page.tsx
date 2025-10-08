import { AgencyIntro } from "@/components/sections/agency-intro"
import { Team } from "@/components/sections/team"
import { Stats } from "@/components/sections/stats"
import { CTASection } from "@/components/sections/cta-section"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      {/* Agency intro (mission + vision) */}
      <section id="about" className="mb-16">
        <AgencyIntro />
      </section>

      {/* Team section */}
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-6">Our Team</h2>
        <Team />
      </section>

      {/* Stats / fun facts */}
      <section className="mb-16">
        <Stats />
      </section>

      {/* CTA */}
      <section className="mb-16">
  <CTASection />
      </section>
    </main>
  )
}
