import CTA from "@/components/ui/CTA"
import FAQs from "@/components/ui/FAQs"
import Features from "@/components/ui/Features"
import Hero from "@/components/ui/Hero"
import { LogoGrid } from "@/components/ui/Logogrid/LogoGrid"
import Testimonial from "@/components/ui/Testimonial"
import Time from "@/components/ui/Time"
import TimeLine from "@/components/ui/Timeline/TimeLine"
import VisualFeatures from "@/components/ui/VisualFeatures"
export default function Home() {
  return (
    <>
      <Hero />
      <LogoGrid />
      <VisualFeatures />
      <Features />
      <Time />
      {/* <TimeLine /> */}
      <CTA />
      <Testimonial />
      {/* <Pricing /> */}
      <FAQs />
    </>
  )
}
