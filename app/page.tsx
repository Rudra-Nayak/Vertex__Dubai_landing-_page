import { Navbar } from "@/components/vertex/navbar"
import { Hero } from "@/components/vertex/hero"
import { Portfolio } from "@/components/vertex/portfolio"
import { WhyUs } from "@/components/vertex/why-us"
import { Contact } from "@/components/vertex/contact"
import { Footer } from "@/components/vertex/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Portfolio />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
