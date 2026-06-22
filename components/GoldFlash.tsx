"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function GoldFlash() {
  const mouseX = useMotionValue(-400)
  const mouseY = useMotionValue(-400)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25, mass: 0.5 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    setEnabled(canHover)

    if (!canHover) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    const handleMouseLeave = () => {
      mouseX.set(-400)
      mouseY.set(-400)
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
      className="pointer-events-none fixed left-0 top-0 -ml-[400px] -mt-[400px] h-[800px] w-[800px]"
      style={{
        x: springX,
        y: springY,
        zIndex: 30,
        transform: "translate3d(0,0,0)",
        mixBlendMode: "multiply",
        background:
          "radial-gradient(circle, rgba(74, 107, 83, 0.08) 0%, rgba(74, 107, 83, 0) 70%)",
      }}
    />
  )
}
