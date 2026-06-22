"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

type CursorMode = "default" | "action" | "listing" | "text"

export function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, {
    stiffness: 420,
    damping: 32,
    mass: 0.5,
  })

  const springY = useSpring(mouseY, {
    stiffness: 420,
    damping: 32,
    mass: 0.5,
  })

  const [mode, setMode] = useState<CursorMode>("default")
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches

    setEnabled(canHover)

    if (!canHover) return

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

      if (target.closest("button, a")) {
        setMode("action")
        return
      }

      const isTextNode =
        target.closest("p, h1, h2, h3, h4, h5, h6, span, li, blockquote, label") &&
        !target.closest("button, a, [data-cursor='property']")

      if (isTextNode) {
        setMode("text")
        return
      }

      setMode("default")
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

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center"
      style={{
        x: springX,
        y: springY,
      }}
    >
      {/* OUTER CURSOR */}
      <motion.div
        animate={{
          width:
            mode === "listing" ? 84
            : mode === "action" ? 34
            : mode === "text" ? 68
            : 10,

          height:
            mode === "listing" ? 84
            : mode === "action" ? 34
            : mode === "text" ? 68
            : 10,

          borderColor:
            mode === "default"
              ? "rgba(176, 139, 87, 0)"
              : "rgba(176, 139, 87, 0.7)",

          backgroundColor:
            mode === "default"
              ? "rgba(176, 139, 87, 1)"
              : mode === "text"
              ? "rgba(176, 139, 87, 0.06)"
              : "rgba(176, 139, 87, 0.03)",

          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 24,
        }}
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          backdrop-blur-[0px]
        "
      />

      {/* INNER DOT */}
      <motion.div
        animate={{
          scale:
            mode === "listing" ? 0
            : mode === "text" ? 0
            : mode === "action" ? 0.7
            : 1,

          opacity:
            mode === "listing" || mode === "text" ? 0 : 1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          h-1.5
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#B08B57]
        "
      />

      {/* LISTING LABEL */}
      <motion.div
        animate={{
          opacity: mode === "listing" ? 1 : 0,
          scale: mode === "listing" ? 1 : 0.92,
          y: mode === "listing" ? 0 : 4,
        }}
        transition={{
          duration: 0.22,
        }}
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
        "
      >
        <span
          className="
            font-sans
            text-[9px]
            uppercase
            tracking-[0.32em]
            text-[#B08B57]
          "
        >
          Discover
        </span>
      </motion.div>

      {/* TEXT MAGNIFY LABEL */}
      <motion.div
        animate={{
          opacity: mode === "text" ? 1 : 0,
          scale: mode === "text" ? 1 : 0.92,
          y: mode === "text" ? 0 : 4,
        }}
        transition={{
          duration: 0.22,
        }}
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
        "
      >
        <span
          className="
            font-sans
            text-[9px]
            uppercase
            tracking-[0.32em]
            text-[#B08B57]
          "
        >
        </span>
      </motion.div>
    </motion.div>
  )
}