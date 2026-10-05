import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span>📶</span> WiFi + <span>🔒</span> Security — One Bundle
        </div>
        <h1 className={styles.title}>
          Connect Faster.<br />
          <span className={styles.gradWifi}>Stay Protected.</span>
        </h1>
        <p className={styles.sub}>
          The world's first combo solution — whole-home WiFi coverage with
          advanced antivirus protection. One subscription, total peace of mind.
        </p>
        <div className={styles.ctas}>
          <a href="https://wifi.vault-x.world/" target="_blank" rel="noopener noreferrer" className={styles.btnMain}>Get WiFi Extender →</a>
          <a href="https://antivirus.vault-x.world" target="_blank" rel="noopener noreferrer" className={styles.btnSec}>Get Antivirus →</a>
        </div>

      </div>
      <div className={styles.visual}>
        <a href="https://wifi.vault-x.world/" target="_blank" rel="noopener noreferrer" className={styles.card} data-type="wifi">
          <div className={styles.cardIcon}>📶</div>
          <div className={styles.cardInfo}>
            <span className={styles.cardTitle}>WiFi Extender</span>
            <span className={styles.cardSub}>Signal Boosted · 100% coverage</span>
          </div>
          <div className={styles.cardBadge} style={{background:'linear-gradient(135deg,#06b6d4,#2563eb)'}}>LIVE</div>
        </a>
        <div className={styles.signalRings}>
          <div className={styles.ring} />
          <div className={styles.ring} />
          <div className={styles.ring} />
        </div>
        <a href="https://antivirus.vault-x.world" target="_blank" rel="noopener noreferrer" className={styles.card} data-type="vault">
          <div className={styles.cardIcon}>🔒</div>
          <div className={styles.cardInfo}>
            <span className={styles.cardTitle}>Shield Antivirus</span>
            <span className={styles.cardSub}>Protected · Scan clean · 2 min ago</span>
          </div>
          <div className={styles.cardBadge} style={{background:'linear-gradient(135deg,#22c55e,#16a34a)'}}>SAFE</div>
        </a>
      </div>
    </section>
  )
}
