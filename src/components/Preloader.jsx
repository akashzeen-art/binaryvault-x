import { useEffect, useMemo, useState } from 'react'
import styles from './Preloader.module.css'

const logo = '/Binaryshieldlogo.png'

const RING_SIZE = 240
const RING_RADIUS = 110
const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

const steps = [
  { label: 'Boosting WiFi', at: 0 },
  { label: 'Scanning Threats', at: 35 },
  { label: 'Securing', at: 70 },
]

function statusText(progress) {
  if (progress >= 100) return 'You\'re connected & protected'
  if (progress >= 70) return 'Securing your connection...'
  if (progress >= 35) return 'Scanning for threats...'
  return 'Boosting WiFi signal...'
}

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)

  const columns = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      left: `${(i / 22) * 100 + Math.random() * 2}%`,
      duration: `${6 + Math.random() * 6}s`,
      delay: `${-Math.random() * 10}s`,
      digits: Array.from({ length: 30 }, () => (Math.random() > 0.5 ? '1' : '0')).join('\n'),
    })), [])

  useEffect(() => {
    const duration = 5000
    const interval = 50
    const step = (interval / duration) * 100
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev + step >= 100) {
          clearInterval(timer)
          setFading(true)
          setTimeout(onDone, 600)
          return 100
        }
        return prev + step
      })
    }, interval)
    return () => clearInterval(timer)
  }, [onDone])

  return (
    <div className={`${styles.overlay} ${fading ? styles.fade : ''}`}>
      <div className={styles.rain} aria-hidden="true">
        {columns.map((c, i) => (
          <span
            key={i}
            className={styles.column}
            style={{ left: c.left, animationDuration: c.duration, animationDelay: c.delay }}
          >
            {c.digits}
          </span>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.ringWrap}>
          <div className={styles.pulse} />
          <div className={styles.pulse} />
          <div className={styles.pulse} />
          <div className={styles.glow} />

          <svg className={styles.ring} viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}>
            <defs>
              <linearGradient id="preloaderRing" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <circle
              className={styles.track}
              cx={RING_SIZE / 2}
              cy={RING_SIZE / 2}
              r={RING_RADIUS}
              fill="none"
              strokeWidth="4"
            />
            <circle
              className={styles.progress}
              cx={RING_SIZE / 2}
              cy={RING_SIZE / 2}
              r={RING_RADIUS}
              fill="none"
              stroke="url(#preloaderRing)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - progress / 100)}
            />
          </svg>

          <img src={logo} alt="BinaryShield" className={styles.logo} />
        </div>

        <div className={styles.readout}>
          <div className={styles.percent}>
            {Math.round(progress)}<span>%</span>
          </div>
          <div className={styles.status}>{statusText(progress)}</div>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => {
            const next = steps[i + 1]?.at ?? 100
            const done = progress >= next
            const active = !done && progress >= s.at
            return (
              <div
                key={s.label}
                className={`${styles.step} ${active ? styles.active : ''} ${done ? styles.done : ''}`}
              >
                <span className={styles.stepIcon}>{done ? '✓' : ''}</span>
                {s.label}
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.tagline}>Connect Faster. Stay Protected.</div>
    </div>
  )
}
