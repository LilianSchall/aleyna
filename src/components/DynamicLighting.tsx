"use client"

import { useEffect, useState } from "react"

export default function DynamicLighting() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const lightX = (mousePosition.x / dimensions.width) * 100
  const lightY = (mousePosition.y / dimensions.height) * 100

  return (
    <>
      {/* Primary light source */}
      <div
        className="fixed inset-0 pointer-events-none z-10 opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${lightX}% ${lightY}%, rgba(255, 255, 255, 0.1), transparent 60%)`,
        }}
      />

      {/* Secondary ambient light */}
      <div
        className="fixed inset-0 pointer-events-none z-10 opacity-10"
        style={{
          background: `radial-gradient(ellipse 1200px 800px at ${lightX}% ${lightY}%, rgba(200, 200, 200, 0.05), transparent 80%)`,
        }}
      />
    </>
  )
}
