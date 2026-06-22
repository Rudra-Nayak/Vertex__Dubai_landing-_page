"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative w-full border-t border-border px-6 py-24 md:py-32 lg:px-10 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        <Reveal className="flex flex-col justify-center">
          <p className="mb-5 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Book a Consultation
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            Begin your design <span className="italic text-gold">journey</span>.
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-muted-foreground">
            Share a brief note about your project. A lead architect will review your inquiry and 
            confirm a consultation time within 12 hours.
          </p>

          <dl className="mt-10 space-y-5 border-t border-border pt-8 font-sans text-sm">
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Studio Address
              </dt>
              <dd className="text-right text-foreground max-w-xs font-light">
                Dubai Design District (d3), Building 4, Office 502, Dubai, UAE
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Direct Phone
              </dt>
              <dd className="text-right text-foreground font-light">+91 80 4958 2901</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                WhatsApp
              </dt>
              <dd className="text-right text-foreground font-light">+91 98450 12345</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Email
              </dt>
              <dd className="text-right text-foreground font-light">contact@vertexdesign.ae</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="flex flex-col gap-8"
          >
            <Field label="Full Name" name="name" type="text" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone (optional)" name="phone" type="tel" />
            <div>
              <label className="block font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Project Details
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us briefly about your property and vision for the exterior space…"
                className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group mt-2 inline-flex w-full items-center justify-between border border-gold bg-transparent rounded-full px-8 py-5 font-sans text-xs uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground sm:w-auto cursor-pointer"
            >
              {sent ? "Request Received" : "Book Consultation"}
              <ArrowRight className="ml-6 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>

            <p className="font-sans text-[11px] leading-relaxed tracking-wide text-muted-foreground/70">
              By submitting, you agree to be contacted by Vertex Exterior Design. Your project
              information and location details are handled with strict confidentiality.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string
  name: string
  type: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none"
      />
    </div>
  )
}
