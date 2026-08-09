import { useRef, useState, type CSSProperties } from 'react'

interface FadingVideoProps {
  src: string | string[]
  className?: string
  style?: CSSProperties
}

const FADE_IN_MS = 500
const FADE_OUT_MS = 550
const FADE_OUT_THRESHOLD = 0.55

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [opacity, setOpacity] = useState(0)
  const indexRef = useRef(0)
  const fadingOutRef = useRef(false)
  const rafRef = useRef<number | null>(null)

  const sources = Array.isArray(src) ? src : [src]
  const currentSrc = sources[indexRef.current % sources.length]

  const animateOpacity = (from: number, to: number, duration: number) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      const value = from + (to - from) * t
      setOpacity(value)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }

  const handleLoadedData = () => {
    fadingOutRef.current = false
    animateOpacity(0, 1, FADE_IN_MS)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || fadingOutRef.current) return
    const remaining = video.duration - video.currentTime
    if (!Number.isNaN(remaining) && remaining <= FADE_OUT_THRESHOLD) {
      fadingOutRef.current = true
      animateOpacity(1, 0, FADE_OUT_MS)
    }
  }

  const handleEnded = () => {
    const video = videoRef.current
    if (!video) return
    if (sources.length === 1) {
      video.currentTime = 0
      video.play()
      fadingOutRef.current = false
      animateOpacity(0, 1, FADE_IN_MS)
    } else {
      indexRef.current = (indexRef.current + 1) % sources.length
      video.load()
    }
  }

  return (
    <video
      ref={videoRef}
      key={currentSrc}
      src={currentSrc}
      className={className}
      style={{ ...style, opacity }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  )
}
