'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail } from 'lucide-react'

export function ConciergeBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="flex items-center gap-6 border border-gold/20 rounded-full px-6 py-4 backdrop-blur-lg bg-background/30 hover:border-gold/60 transition-colors duration-300">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-light">
          Direct Concierge
        </span>

        <div className="flex items-center gap-4">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/YOUR_NUMBER?text=I'm%20interested%20in%20a%20Vertex%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full hover:bg-gold/10 transition-colors duration-300"
            aria-label="Contact via WhatsApp"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MessageCircle className="h-5 w-5 text-gold/70 group-hover:text-gold transition-colors duration-300" />
          </motion.a>

          {/* Email */}
          <a
            href="mailto:private@vertex.ae"
            className="group p-2 rounded-full hover:bg-gold/10 transition-colors duration-300"
            aria-label="Contact via Email"
          >
            <Mail className="h-5 w-5 text-gold/70 group-hover:text-gold transition-colors duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
