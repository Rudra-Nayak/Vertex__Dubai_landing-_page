"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="relative w-full border-t border-white/5 px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        <Reveal className="flex flex-col justify-center">
          <p className="mb-5 flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Private Enquiry
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            Begin a quiet <span className="italic">conversation</span>.
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-muted-foreground">
            Share a brief note. A senior advisor will respond personally within
            twenty-four hours — never a call center, never a form reply.
          </p>

          <dl className="mt-10 space-y-5 border-t border-white/5 pt-8 font-sans text-sm">
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Studio
              </dt>
              <dd className="text-right text-foreground">DIFC Gate Village, Dubai</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Direct
              </dt>
              <dd className="text-right text-foreground">+971 4 000 1842</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Email
              </dt>
              <dd className="text-right text-foreground">private@vertex.ae</dd>
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
                Brief
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us a little about what you are looking for…"
                className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group mt-2 inline-flex w-full items-center justify-between border border-gold bg-transparent px-8 py-5 font-sans text-xs uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground sm:w-auto"
            >
              {sent ? "Message Received" : "Send Enquiry"}
              <ArrowRight className="ml-6 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>

            <p className="font-sans text-[11px] leading-relaxed tracking-wide text-muted-foreground/70">
              By submitting, you agree to be contacted by a Vertex advisor. Your
              information is handled with absolute discretion.
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
        className="mt-3 w-full border-b border-white/15 bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none"
      />
    </div>
  )
}
