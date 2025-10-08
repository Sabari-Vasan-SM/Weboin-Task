import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { AgencyIntro } from "@/components/sections/agency-intro";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AgencyIntro />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </div>
  );
}
