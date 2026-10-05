import styles from './Features.module.css'

const features = [
  { icon: '🌍', title: 'Global Reach', desc: 'Works wherever you are across the globe.', color: '#2563eb' },
  { icon: '🛡️', title: 'Smart Detection', desc: 'Advanced scanning detects zero-day threats in real time.', color: '#22c55e' },

  { icon: '🔒', title: '99.9% Detection', desc: 'Industry-leading threat detection rate, certified globally.', color: '#22c55e' },
  { icon: '📱', title: 'Multi-Platform', desc: 'Android, Windows, and Mac — all covered under one plan.', color: '#2563eb' },
]

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Why BinaryShield</p>
        <h2 className={styles.title}>Built for the Modern World</h2>
        <p className={styles.sub}>Powerful features that work together seamlessly.</p>
      </div>
      <div className={styles.grid}>
        {features.map(f => (
          <div key={f.title} className={styles.card}>
            <div className={styles.icon} style={{ background: `${f.color}18`, border: `1px solid ${f.color}33` }}>
              {f.icon}
            </div>
            <h3 className={styles.cardTitle} style={{ color: f.color }}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>



      <div className={styles.cta}>
        <div className={styles.ctaBox}>
          <h3>Ready to get the bundle?</h3>
          <div className={styles.ctaBtns}>
            <button className={styles.btnMain}>Start Free Trial</button>
          </div>
        </div>
      </div>
    </section>
  )
}
