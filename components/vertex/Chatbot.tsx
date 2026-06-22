'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, Sparkles, ArrowRight, Menu } from 'lucide-react'

// ==========================================
// 1. TypeScript Types & Interfaces
// ==========================================
interface Message {
  id: string
  role: 'assistant' | 'user'
  content: string
  timestamp: Date
}

interface ChatApiResponse {
  reply: string
  isLead: boolean
  name: string
  phone: string
  service: string
  budget: string
  intent: string
}

interface LeadState {
  isLead: boolean
  name: string
  phone: string
  service: string
  budget: string
  intent: string
}

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

// ==========================================
// 2. API Communication Layer
// ==========================================
async function sendChatMessage(message: string, sessionId: string): Promise<ChatApiResponse> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      sessionId,
    }),
  })

  if (!response.ok) {
    throw new Error('API communication failed')
  }

  return response.json()
}

// ==========================================
// 3. Lead Tracking State Hook
// ==========================================
function useLeadTracking() {
  const [leadState, setLeadState] = useState<LeadState>({
    isLead: false,
    name: '',
    phone: '',
    service: '',
    budget: '',
    intent: ''
  })

  // Synchronize state from API response and trigger analytics logs
  const trackLead = (apiData: ChatApiResponse) => {
    setLeadState((prev) => {
      const updated = {
        isLead: apiData.isLead ?? prev.isLead,
        name: apiData.name || prev.name,
        phone: apiData.phone || prev.phone,
        service: apiData.service || prev.service,
        budget: apiData.budget || prev.budget,
        intent: apiData.intent || prev.intent
      }

      // Log updates to standard analytics console
      if (updated.isLead) {
        console.log('%c[Design Lead Captured]', 'color: #B08B57; font-weight: bold;', updated)
      }
      return updated
    })
  }

  const resetLeadState = () => {
    setLeadState({
      isLead: false,
      name: '',
      phone: '',
      service: '',
      budget: '',
      intent: ''
    })
  }

  return { leadState, trackLead, resetLeadState }
}

const SUGGESTIONS = [
  "Book a Consultation",
  "Villa Landscapes",
  "Modern Facades",
  "Main Menu"
]

// ==========================================
// 4. UI Rendering Component
// ==========================================
export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const [forceShowSuggestions, setForceShowSuggestions] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Use the lead tracking state sub-hook
  const { leadState, trackLead, resetLeadState } = useLeadTracking()

  // Generate a fresh session ID and reset history on mount (page refresh)
  useEffect(() => {
    const newSessionId = crypto.randomUUID()
    setSessionId(newSessionId)
    localStorage.setItem('vertex_chat_session_id', newSessionId)

    // Clear previous chat messages from localStorage to match the new session
    localStorage.removeItem('vertex_chat_messages')

    // Reset messages to the default welcome message
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: "Welcome to Vertex Design. I am your exterior design concierge. I can help guide you through our services, explain our design process, or schedule a consultation. How may I assist you today?",
        timestamp: new Date()
      }
    ])
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading])

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  // Save messages to local storage
  const saveMessages = (updatedMessages: Message[]) => {
    localStorage.setItem('vertex_chat_messages', JSON.stringify(updatedMessages))
  }

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return

    const userMessage: Message = {
      id: Math.random().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    saveMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      // Use isolated API service layer
      const data = await sendChatMessage(textToSend, sessionId)
      
      // Update lead states for analytics tracking internally
      trackLead(data)

      const assistantMessage: Message = {
        id: Math.random().toString(),
        role: 'assistant',
        // ONLY display the reply text string inside bubbles
        content: data.reply || "I apologize, but I received an empty response. Please try again or reach out directly.",
        timestamp: new Date()
      }

      const newMessages = [...updatedMessages, assistantMessage]
      setMessages(newMessages)
      saveMessages(newMessages)
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: Math.random().toString(),
        role: 'assistant',
        content: "A temporary connection issue occurred. Please email our studio directly at contact@vertexdesign.ae or click the WhatsApp link for immediate assistance.",
        timestamp: new Date()
      }
      const newMessages = [...updatedMessages, errorMessage]
      setMessages(newMessages)
      saveMessages(newMessages)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearChat = () => {
    if (window.confirm("Would you like to reset your wellness consultation chat history?")) {
      const defaultMsg: Message[] = [
        {
          id: 'welcome',
          role: 'assistant',
          content: "Welcome to Vertex Design. I am your exterior design concierge. I can help guide you through our services, explain our design process, or schedule a consultation. How may I assist you today?",
          timestamp: new Date()
        }
      ]
      setMessages(defaultMsg)
      localStorage.setItem('vertex_chat_messages', JSON.stringify(defaultMsg))
      resetLeadState()
      setForceShowSuggestions(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-28 right-6 md:right-8 z-50 flex flex-col w-[calc(100vw-3rem)] sm:w-[420px] h-[580px] max-h-[calc(100vh-10rem)] border border-border rounded-2xl shadow-2xl backdrop-blur-xl bg-card/95 font-sans overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-gold/30 bg-gold/10 text-gold">
                <Sparkles className="h-4 w-4" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <h3 className="font-serif text-[15px] uppercase tracking-[0.2em] text-gold font-light leading-none">
                  Design Assistant
                </h3>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground mt-1 block">
                  Wellness Advisor
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClearChat}
                className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors duration-300 mr-2 p-1 font-light cursor-pointer"
                title="Reset conversation"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-muted-foreground hover:text-gold hover:bg-muted transition-all duration-300 cursor-pointer"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5 scrollbar-thin scrollbar-thumb-gold/10 scrollbar-track-transparent">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col max-w-[85%] ${
                  msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                }`}
              >
                <div
                  className={`px-4 py-3.5 rounded-xl text-[13.5px] leading-relaxed font-light ${
                    msg.role === 'user'
                      ? 'bg-gold/10 border border-gold/20 text-gold rounded-tr-none font-medium'
                      : 'bg-muted border border-border text-foreground rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>

                <span className="text-[9px] text-muted-foreground/50 tracking-wider mt-1 px-1 font-mono uppercase">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </motion.div>
            ))}

            {isLoading && (
              <div className="flex flex-col max-w-[85%] mr-auto items-start">
                <div className="px-5 py-4 bg-muted border border-border text-foreground rounded-xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {(messages.length <= 2 || forceShowSuggestions) && !isLoading && (
            <div className="px-6 py-2 flex flex-wrap gap-2 border-t border-border pt-4 bg-muted/20">
              {SUGGESTIONS.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    handleSendMessage(suggestion)
                    setForceShowSuggestions(false)
                  }}
                  className="px-3 py-1.5 text-[11px] rounded-full border border-border bg-card text-muted-foreground hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 font-medium cursor-pointer"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage(input)
              setForceShowSuggestions(false)
            }}
            className="p-6 border-t border-border bg-muted/40"
          >
            <div className="relative flex items-center">
              {/* Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setForceShowSuggestions(!forceShowSuggestions)}
                className={`absolute left-2.5 p-1.5 rounded-md transition-all duration-300 cursor-pointer ${
                  forceShowSuggestions ? 'text-gold bg-gold/10' : 'text-muted-foreground hover:text-gold hover:bg-muted'
                }`}
                aria-label="Toggle main menu suggestions"
                title="Toggle Main Menu Options"
              >
                <Menu className="h-4 w-4" />
              </button>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, consultations, or design goals..."
                disabled={isLoading}
                className="w-full pr-12 pl-10 py-3.5 bg-card border border-border rounded-xl text-[13px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/50 focus:bg-muted/30 transition-all duration-300 font-light"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2 rounded-md text-muted-foreground hover:text-gold disabled:opacity-30 disabled:hover:text-muted-foreground transition-all duration-300 cursor-pointer"
                aria-label="Send message"
              >
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Premium Lead Tracking Indicator for Real-time UX Feedback */}
            {leadState.isLead ? (
              <div className="flex justify-between items-center mt-3 px-1">
                <span className="text-[9px] text-gold uppercase tracking-widest font-mono flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                  Lead Tracked: {leadState.service || 'Consultation'}
                </span>
                <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest font-light">
                  CRM Synchronized
                </span>
              </div>
            ) : (
              <div className="flex justify-between items-center mt-3 px-1">
                <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest font-light">
                  Encrypted Connection
                </span>
                <span className="text-[9px] text-muted-foreground/40 uppercase tracking-widest font-light">
                  Vertex Design
                </span>
              </div>
            )}
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
