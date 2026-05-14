"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const gold = "#C5A059"
type CursorMode = "default" | "action" | "listing"

export function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { stiffness: 420, damping: 32, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 420, damping: 32, mass: 0.5 })
  const [mode, setMode] = useState<CursorMode>("default")
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    setEnabled(canHover)

    if (!canHover) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target

      mouseX.set(event.clientX)
      mouseY.set(event.clientY)

      if (!(target instanceof Element)) {
        setMode("default")
        return
      }

      if (target.closest('[data-cursor="property"]')) {
        setMode("listing")
        return
      }

      setMode(target.closest("button, a") ? "action" : "default")
    }

    const handleMouseLeave = () => {
      mouseX.set(-100)
      mouseY.set(-100)
      setMode("default")
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mouseX, mouseY])

  if (!enabled) {
    return null
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -ml-12 -mt-12 flex h-24 w-24 items-center justify-center"
      style={{
        x: springX,
        y: springY,
        zIndex: 2147483647,
      }}
    >
      <motion.div
        className="absolute rounded-full border"
        animate={{
          width: mode === "listing" ? 88 : mode === "action" ? 36 : 12,
          height: mode === "listing" ? 88 : mode === "action" ? 36 : 12,
          backgroundColor: mode === "default" ? gold : "rgba(197, 160, 89, 0)",
          borderColor: gold,
          borderStyle: mode === "listing" ? "dashed" : "solid",
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
      <motion.div
        className="absolute rounded-full border border-dashed border-gold"
        animate={{
          width: mode === "listing" ? 88 : 12,
          height: mode === "listing" ? 88 : 12,
          opacity: mode === "listing" ? 1 : 0,
          rotate: mode === "listing" ? 360 : 0,
        }}
        transition={{
          width: { type: "spring", stiffness: 260, damping: 22 },
          height: { type: "spring", stiffness: 260, damping: 22 },
          opacity: { duration: 0.2 },
          rotate: {
            duration: 5,
            repeat: mode === "listing" ? Infinity : 0,
            ease: "linear",
          },
        }}
      />
      <motion.span
        className="relative max-w-16 text-center font-sans text-[9px] font-medium uppercase leading-tight tracking-[0.18em] text-gold"
        animate={{
          opacity: mode === "listing" ? 1 : 0,
          scale: mode === "listing" ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
      >
        View Detail
      </motion.span>
    </motion.div>
  )
}
