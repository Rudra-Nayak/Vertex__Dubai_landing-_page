'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Sparkles } from 'lucide-react'
import { Chatbot } from './vertex/Chatbot'

export function ConciergeBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ===================================================================== */}
      {/* CHATBOT WIDGET EMBED POINT                                           */}
      {/* You can embed your third-party WhatsApp chatbot widget script here   */}
      {/* ===================================================================== */}
      {/* <!-- CHATBOT WIDGET EMBED POINT --> */}

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed bottom-8 right-8 z-50"
      >
        <div className="flex items-center gap-6 border border-gold/20 rounded-full px-6 py-4 backdrop-blur-lg bg-background/30 hover:border-gold/60 transition-colors duration-300">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-light">
            Wellness Concierge
          </span>

          <div className="flex items-center gap-4">
            {/* AI Chatbot */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="group p-2 rounded-full hover:bg-gold/10 transition-colors duration-300 relative cursor-pointer"
              aria-label="Chat with AI Wellness Assistant"
            >
              <Sparkles className={`h-5 w-5 transition-colors duration-300 ${isChatOpen ? 'text-gold' : 'text-gold/70 group-hover:text-gold'}`} />
              <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
              </span>
            </button>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/971501234567?text=Hello,%20I'd%20like%20to%20discuss%20a%20design%20project%20with%20Vertex."
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
              href="mailto:contact@vertexdesign.ae"
              className="group p-2 rounded-full hover:bg-gold/10 transition-colors duration-300"
              aria-label="Contact via Email"
            >
              <Mail className="h-5 w-5 text-gold/70 group-hover:text-gold transition-colors duration-300" />
            </a>
          </div>
        </div>
      </motion.div>

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}
