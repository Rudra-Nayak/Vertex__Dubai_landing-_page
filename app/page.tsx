import { GoldFlash } from "@/components/GoldFlash"
import { Navbar } from "@/components/vertex/navbar"
import { Hero } from "@/components/vertex/hero"
import { About } from "@/components/vertex/about"
import { Portfolio } from "@/components/vertex/portfolio"
import { WhyUs } from "@/components/vertex/why-us"
import { Testimonials } from "@/components/vertex/testimonials"
import { Contact } from "@/components/vertex/contact"
import { Footer } from "@/components/vertex/footer"

export default function Page() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <GoldFlash />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
