import styles from './Products.module.css'

const wifiFeatures = ['Global Coverage', 'Dual-Band WiFi', 'Plug & Play Setup', 'Dead Zone Eliminator']
const vaultFeatures = ['Global Protection', 'Smart Threat Detection', 'Real-Time Scanning', 'Ransomware Shield']

function PlatformBadge({ label, color }) {
  return <span className={styles.platform} style={{ borderColor: color, color }}>{label}</span>
}

export default function Products() {
  return (
    <section className={styles.section} id="products">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Our Products</p>
        <h2 className={styles.title}>Two Products. One Powerful Bundle.</h2>
        <p className={styles.sub}>Everything you need to stay connected and protected — worldwide.</p>
      </div>

      <div className={styles.grid}>
        {/* WiFi Card */}
        <div className={`${styles.card} ${styles.wifiCard}`}>
          <div className={styles.cardTop}>
            <div className={styles.iconWrap} style={{ background: 'linear-gradient(135deg,#2563eb22,#06b6d422)', border: '1px solid rgba(37,99,235,0.3)' }}>
              <span>📶</span>
            </div>
            <div className={styles.tagRow}>
              <span className={styles.tag} style={{ background: 'rgba(37,99,235,0.1)', color: '#2563eb' }}>Best Connectivity</span>
            </div>
          </div>
          <h3 className={styles.cardTitle}>WiFi Extender</h3>
          <p className={styles.cardHeadline}>Whole-Home Coverage</p>
          <p className={styles.cardDesc}>
            Eliminate dead zones and boost WiFi signal worldwide. Dual-band plug-and-play setup — available globally on Android and Windows.
          </p>
          <div className={styles.featureList}>
            {wifiFeatures.map(f => (
              <div key={f} className={styles.featureItem}>
                <span className={styles.check} style={{ color: '#2563eb' }}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className={styles.metaRow}>
            <div className={styles.metaStat}>
              <span className={styles.metaNum} style={{ color: '#2563eb' }}>Global</span>
              <span className={styles.metaLabel}>Reach</span>
            </div>
            <div className={styles.metaStat}>
              <span className={styles.metaNum} style={{ color: '#2563eb' }}>Dual</span>
              <span className={styles.metaLabel}>Bands</span>
            </div>
            <div className={styles.metaStat}>
              <span className={styles.metaNum} style={{ color: '#2563eb' }}>Android & Win</span>
              <span className={styles.metaLabel}>Platforms</span>
            </div>
          </div>
          <div className={styles.platforms}>
            <PlatformBadge label="Global" color="#2563eb" />
            <PlatformBadge label="Android" color="#2563eb" />
            <PlatformBadge label="Windows" color="#2563eb" />
          </div>
          <a href="https://wifi.vault-x.world/" target="_blank" rel="noopener noreferrer" className={styles.btnWifi}>Get WiFi Extender →</a>
          <div className={styles.statusBar} style={{ background: 'rgba(37,99,235,0.08)', borderColor: 'rgba(37,99,235,0.2)' }}>
            <span className={styles.dot} style={{ background: '#2563eb' }} />
            <span style={{ color: '#2563eb', fontSize: '0.78rem', fontWeight: 600 }}>Signal Boosted · 100% home coverage</span>
          </div>
        </div>

        {/* VaultX Card */}
        <div className={`${styles.card} ${styles.vaultCard}`}>
          <div className={styles.cardTop}>
            <div className={styles.iconWrap} style={{ background: 'linear-gradient(135deg,#22c55e22,#16a34a22)', border: '1px solid rgba(34,197,94,0.3)' }}>
              <span>🔒</span>
            </div>
            <div className={styles.tagRow}>
              <span className={styles.tag} style={{ background: 'rgba(34,197,94,0.1)', color: '#16a34a' }}>Best Security</span>
            </div>
          </div>
          <h3 className={styles.cardTitle}>Shield Antivirus</h3>
          <p className={styles.cardHeadline}>Total Device Protection</p>
          <p className={styles.cardDesc}>
            Advanced real-time threat detection available globally. Blocks viruses, malware, and ransomware before they reach your device on Mac and Windows.
          </p>
          <div className={styles.featureList}>
            {vaultFeatures.map(f => (
              <div key={f} className={styles.featureItem}>
                <span className={styles.check} style={{ color: '#16a34a' }}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className={styles.metaRow}>
            <div className={styles.metaStat}>
              <span className={styles.metaNum} style={{ color: '#16a34a' }}>Global</span>
              <span className={styles.metaLabel}>Reach</span>
            </div>
            <div className={styles.metaStat}>
              <span className={styles.metaNum} style={{ color: '#16a34a' }}>99.9%</span>
              <span className={styles.metaLabel}>Threats Blocked</span>
            </div>
            <div className={styles.metaStat}>
              <span className={styles.metaNum} style={{ color: '#16a34a' }}>Mac & Win</span>
              <span className={styles.metaLabel}>Platforms</span>
            </div>
          </div>
          <div className={styles.platforms}>
            <PlatformBadge label="Global" color="#16a34a" />
            <PlatformBadge label="Mac" color="#16a34a" />
            <PlatformBadge label="Windows" color="#16a34a" />
          </div>
          <a href="https://antivirus.vault-x.world" target="_blank" rel="noopener noreferrer" className={styles.btnVault}>Get Shield Antivirus →</a>
          <div className={styles.statusBar} style={{ background: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.2)' }}>
            <span className={styles.dot} style={{ background: '#22c55e' }} />
            <span style={{ color: '#16a34a', fontSize: '0.78rem', fontWeight: 600 }}>Protected · Scan clean · 2 min ago</span>
          </div>
        </div>
      </div>
    </section>
  )
}
