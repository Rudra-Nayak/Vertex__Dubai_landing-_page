"use client"

import React, { useState, useEffect } from "react"

interface LeadCaptureFormProps {
  onSubmit: (formData: {
    name: string
    phone: string
    projectType: string
    otherProject?: string
    date: string
    time: string
  }) => void
}

export function LeadCaptureForm({ onSubmit }: LeadCaptureFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [projectType, setProjectType] = useState("Villa Landscape")
  const [otherProject, setOtherProject] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("Morning")

  const [phoneError, setPhoneError] = useState("")
  const [touchedPhone, setTouchedPhone] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [minDate, setMinDate] = useState("")

  // Set minimum date to today in local time format YYYY-MM-DD
  useEffect(() => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    setMinDate(`${year}-${month}-${day}`)
  }, [])

  // Validation function
  const validatePhone = (val: string) => {
    const regex = /^\d{7,15}$/
    if (!val) {
      setPhoneError("Phone number is required")
      return false
    }
    if (!regex.test(val)) {
      setPhoneError("Enter a valid phone number")
      return false
    }
    setPhoneError("")
    return true
  }

  // Handle phone changes
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10) // digits only, max 10
    setPhone(val)
    if (touchedPhone) {
      validatePhone(val)
    }
  }

  const handlePhoneBlur = () => {
    setTouchedPhone(true)
    validatePhone(phone)
  }

  // Validate form overall
  useEffect(() => {
    const isPhoneValid = /^\d{7,15}$/.test(phone)
    const isNameValid = name.trim().length > 0
    const isDateValid = date !== ""
    const isTimeValid = time !== ""
    const isOtherValid = projectType !== "Other" || otherProject.trim().length > 0

    setIsValid(isNameValid && isPhoneValid && isDateValid && isTimeValid && isOtherValid)
  }, [name, phone, projectType, otherProject, date, time])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return

    onSubmit({
      name: name.trim(),
      phone,
      projectType,
      otherProject: projectType === "Other" ? otherProject.trim() : undefined,
      date,
      time,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white p-5 rounded-2xl border border-border shadow-sm flex flex-col gap-4 font-sans text-foreground mt-2"
    >
      <div className="text-center border-b border-border pb-3">
        <h4 className="font-serif text-[16px] text-gold font-semibold leading-tight">
          Project Consultation
        </h4>
        <p className="text-[11px] text-muted-foreground mt-1">
          Provide your details to schedule a design consultation.
        </p>
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
          className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-background placeholder:text-muted-foreground/45 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all font-light"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Phone Number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          required
          placeholder="e.g. 9845012345"
          className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-background placeholder:text-muted-foreground/45 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all font-light"
        />
        {touchedPhone && phoneError && (
          <span className="text-[10px] text-red-500 font-light mt-0.5 px-0.5">
            {phoneError}
          </span>
        )}
      </div>

      {/* Project Select */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Project Type
        </label>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-background focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all font-light"
        >
          <option value="Villa Landscape">Villa Landscape</option>
          <option value="Modern Facade">Modern Facade</option>
          <option value="Pool & Outdoor Living">Pool & Outdoor Living</option>
          <option value="Architectural Lighting">Architectural Lighting</option>
          <option value="Other">Other Project</option>
        </select>
      </div>

      {/* Other Project Input */}
      {projectType === "Other" && (
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Describe Project
          </label>
          <input
            type="text"
            value={otherProject}
            onChange={(e) => setOtherProject(e.target.value)}
            required
            placeholder="Specify project type"
            className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-background placeholder:text-muted-foreground/45 focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all font-light"
          />
        </div>
      )}

      {/* Date and Time Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Preferred Date
          </label>
          <input
            type="date"
            value={date}
            min={minDate}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-background focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all font-light"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Time Slot
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full px-3 py-2 text-xs border border-border rounded-lg bg-background focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all font-light"
          >
            <option value="Morning">Morning (8 AM - 12 PM)</option>
            <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="Evening">Evening (4 PM - 7 PM)</option>
          </select>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid}
        className="w-full mt-2 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gold text-white hover:bg-gold-soft disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-sm transition-all duration-300 cursor-pointer"
      >
        Submit Details
      </button>
    </form>
  )
}
