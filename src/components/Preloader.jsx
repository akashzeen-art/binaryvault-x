import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'
import { WifiIcon, ShieldIcon, CheckIcon } from './Icons'
import useLang from '../i18n/useLang'

const logo = '/BinaryShieldlogo.png'

const DURATION = 2000

export default function Preloader({ onDone }) {
  const { t } = useLang()
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = 30
    const step = (interval / DURATION) * 100
    let fadeTimer
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev + step >= 100) {
          clearInterval(timer)
          setFading(true)
          fadeTimer = setTimeout(onDone, 600)
          return 100
        }
        return prev + step
      })
    }, interval)
    return () => {
      clearInterval(timer)
      clearTimeout(fadeTimer)
    }
  }, [onDone])

  const steps = [
    { label: t.preloader.boosting, Icon: WifiIcon, done: progress >= 50, active: progress < 50 },
    { label: t.preloader.scanning, Icon: ShieldIcon, done: progress >= 100, active: progress >= 50 && progress < 100 },
  ]

  return (
    <div className={`${styles.overlay} ${fading ? styles.fade : ''}`} role="status" aria-label={t.preloader.loading}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blobBlue}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blobGreen}`} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <div className={styles.halo} aria-hidden="true" />
          <img src={logo} alt="Binary Shield" className={styles.logo} />
          <div className={styles.shine} style={{ '--logo': `url(${logo})` }} aria-hidden="true" />
        </div>

        <p className={styles.tagline}>{t.preloader.tagline}</p>

        <div className={styles.progress}>
          <div className={styles.track}>
            <div className={styles.bar} style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.percent}>{Math.round(progress)}%</span>
        </div>

        <div className={styles.steps}>
          {steps.map(({ label, Icon, done, active }) => (
            <span
              key={label}
              className={`${styles.step} ${done ? styles.done : ''} ${active ? styles.active : ''}`}
            >
              <span className={styles.stepIcon}>
                {done ? <CheckIcon size={12} strokeWidth={3} /> : <Icon size={13} />}
              </span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
