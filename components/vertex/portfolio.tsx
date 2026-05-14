"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "./reveal"

type Property = {
  title: string
  location: string
  price: string
  size: string
  image: string
  span: string
  tag: string
}

const properties: Property[] = [
  {
    title: "Skyline Penthouse",
    location: "Downtown Dubai",
    price: "AED 48,000,000",
    size: "8,420 sqft",
    image: "/properties/penthouse.jpg",
    span: "md:col-span-2 md:row-span-2",
    tag: "Featured",
  },
  {
    title: "Frond M Villa",
    location: "Palm Jumeirah",
    price: "AED 92,000,000",
    size: "12,100 sqft",
    image: "/properties/villa.jpg",
    span: "md:col-span-2",
    tag: "Waterfront",
  },
  {
    title: "Marina Sky Suite",
    location: "Dubai Marina",
    price: "AED 18,500,000",
    size: "4,260 sqft",
    image: "/properties/marina.jpg",
    span: "",
    tag: "New",
  },
  {
    title: "The Opus Residence",
    location: "Business Bay",
    price: "AED 24,000,000",
    size: "5,840 sqft",
    image: "/properties/tower.jpg",
    span: "",
    tag: "Off-Market",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-8 bg-gold" />
              The Portfolio
            </p>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground md:text-6xl">
              A selection of <span className="italic">remarkable</span> addresses.
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
            Each residence in our portfolio is hand-selected for its architecture,
            provenance, and the quiet stature of its address.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[18rem] md:gap-5">
          {properties.map((p, i) => (
            <PropertyCard key={p.title} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PropertyCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden border border-white/5 bg-card ${property.span}`}
    >
      <div className="relative h-72 w-full md:h-full">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-700 group-hover:from-background/95" />
      </div>

      {/* Tag */}
      <div className="absolute left-5 top-5 flex items-center gap-2 border border-gold/40 bg-background/30 px-3 py-1 backdrop-blur-md">
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold">
          {property.tag}
        </span>
      </div>

      {/* Hover arrow */}
      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/10 bg-background/30 text-foreground backdrop-blur-md transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-primary-foreground">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold/80">
          {property.location}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-foreground md:text-3xl">
          {property.title}
        </h3>
        <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Guide Price
            </p>
            <p className="mt-1 font-serif text-base text-foreground md:text-lg">
              {property.price}
            </p>
          </div>
          <p className="font-sans text-xs tracking-wide text-muted-foreground">
            {property.size}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
