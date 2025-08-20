"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimatedUnderlineProps {
  children: ReactNode
  className?: string
}

export default function AnimatedUnderline({ children, className = "" }: AnimatedUnderlineProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-1000 ease-out ${
          isVisible ? "w-full" : "w-0"
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, white, transparent)",
        }}
      />
    </div>
  )
}
