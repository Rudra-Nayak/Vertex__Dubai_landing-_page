"use client"

import { useId, type ReactNode } from "react"
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
    title: "Sky Mansion",
    location: "Penthouse",
    price: "AED 45M",
    size: "Private sky residence",
    image: "/properties/penthouse.jpg",
    span: "md:col-span-2",
    tag: "Large",
  },
  {
    title: "Waterfront Villa",
    location: "Jumeirah",
    price: "AED 12M",
    size: "Beachfront estate",
    image: "/properties/villa.jpg",
    span: "",
    tag: "Waterfront",
  },
  {
    title: "Modern Loft",
    location: "Downtown",
    price: "AED 5.5M",
    size: "Design-led residence",
    image: "/properties/tower.jpg",
    span: "",
    tag: "Urban",
  },
  {
    title: "Private Island Plot",
    location: "World Islands",
    price: "AED 88M",
    size: "Rare land release",
    image: "/properties/marina.jpg",
    span: "",
    tag: "Ultra Rare",
  },
  {
    title: "Canal Glass House",
    location: "Business Bay",
    price: "AED 19M",
    size: "Waterfront duplex",
    image: "/properties/tower.jpg",
    span: "",
    tag: "New Arrival",
  },
]

const cardTransition = { type: "spring", damping: 20, stiffness: 100 } as const

const imageVariants = {
  rest: { scale: 1, filter: "blur(0px)" },
  hover: { scale: 1.05, filter: "blur(2px) contrast(120%) brightness(110%)" },
}

const glassVariants = {
  rest: { y: "105%", opacity: 0 },
  hover: { y: "0%", opacity: 1 },
}

const overlayContentVariants = {
  rest: {},
  hover: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.16,
    },
  },
}

const overlayTextVariants = {
  rest: { opacity: 0, y: 16 },
  hover: { opacity: 1, y: 0 },
}

const liquidMaskVariants = {
  rest: {
    d: "M0 92C60 104 120 80 180 92C240 104 300 80 360 92V120H0Z",
  },
  hover: {
    d: "M0 24C60 6 120 42 180 24C240 6 300 42 360 24V120H0Z",
  },
}

export function Portfolio() {
  return (
    <section id="listings" className="relative w-full px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
              <span className="h-px w-8 bg-gold" />
              The Listings
            </p>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground md:text-6xl">
              A bento selection of <span className="italic">rare</span> addresses.
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
            Five private opportunities across Dubai&apos;s most coveted addresses,
            each curated for rarity, privacy, and long-term value.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[20rem] md:gap-5">
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
    <ListingCardWrapper property={property} index={index}>
      <div className="relative h-72 w-full md:h-full">
        <motion.div
          variants={imageVariants}
          transition={{ ...cardTransition, duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
      </div>

      <div className="absolute left-5 top-5 flex items-center gap-2 border border-gold/40 bg-background/30 px-3 py-1 backdrop-blur-md">
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold">
          {property.tag}
        </span>
      </div>

      <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/10 bg-background/30 text-foreground backdrop-blur-md transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-primary-foreground">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
      </div>

      <motion.div
        variants={glassVariants}
        transition={cardTransition}
        className="absolute inset-x-0 bottom-0 overflow-hidden rounded-t-[45%_18%] border-t border-white/25 bg-white/20 px-6 pb-6 pt-14 shadow-2xl shadow-black/30 backdrop-blur-lg md:px-8 md:pb-8"
      >
        <div className="absolute -top-12 left-1/2 h-24 w-[115%] -translate-x-1/2 rounded-[50%] bg-white/20 blur-sm" />
        <motion.div variants={overlayContentVariants} className="relative">
          <motion.p
            variants={overlayTextVariants}
            transition={cardTransition}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold"
          >
            {property.price}
          </motion.p>
          <motion.div variants={overlayTextVariants} transition={cardTransition}>
            <LiquidTitle title={property.title} />
          </motion.div>
          <motion.div
            variants={overlayTextVariants}
            transition={cardTransition}
            className="mt-5 flex items-end justify-between gap-4 border-t border-white/25 pt-4"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-foreground/70">
              {property.location}
            </p>
            <p className="font-sans text-xs tracking-wide text-foreground/70">
              {property.size}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </ListingCardWrapper>
  )
}

function ListingCardWrapper({
  property,
  index,
  children,
}: {
  property: Property
  index: number
  children: ReactNode
}) {
  return (
    <motion.article
      data-cursor="property"
      layout
      initial="rest"
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        layout: cardTransition,
        opacity: { duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
        scale: cardTransition,
      }}
      variants={{
        rest: { opacity: 0, y: 30 },
        hover: { scale: 1.025 },
      }}
      className={`group relative overflow-hidden border border-white/5 bg-card ${property.span}`}
    >
      {children}
    </motion.article>
  )
}

function LiquidTitle({ title }: { title: string }) {
  const maskId = useId()

  return (
    <svg
      className="mt-2 block h-12 w-full overflow-visible md:h-14"
      viewBox="0 0 360 72"
      role="img"
      aria-label={title}
      preserveAspectRatio="xMinYMid meet"
    >
      <defs>
        <mask id={maskId}>
          <rect width="360" height="72" fill="black" />
          <motion.path
            variants={liquidMaskVariants}
            transition={{ ...cardTransition, duration: 0.9 }}
            fill="white"
          />
        </mask>
      </defs>
      <text
        x="0"
        y="48"
        fill="rgba(255,255,255,0.28)"
        fontFamily="var(--font-playfair)"
        fontSize="34"
      >
        {title}
      </text>
      <text
        x="0"
        y="48"
        fill="currentColor"
        className="text-foreground"
        fontFamily="var(--font-playfair)"
        fontSize="34"
        mask={`url(#${maskId})`}
      >
        {title}
      </text>
    </svg>
  )
}
