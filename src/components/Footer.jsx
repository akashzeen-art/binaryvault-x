import styles from './Footer.module.css'
const logo = '/Binaryshieldlogo.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img src={logo} alt="BinaryShield" className={styles.logoImg} />
        <p className={styles.tagline}>Connect faster. Stay protected.</p>

        <div className={styles.divider} />

        <h4 className={styles.colTitle}>Products</h4>
        <div className={styles.links}>
          <a href="https://wifi.vault-x.world/" target="_blank" rel="noopener noreferrer">WiFi Extender</a>
          <a href="https://antivirus.vault-x.world" target="_blank" rel="noopener noreferrer">Shield Antivirus</a>
          <a href="#">Bundle Deal</a>
        </div>

        <div className={styles.divider} />

        <p className={styles.copy}>© 2026 BinaryShield. All rights reserved.</p>
      </div>
    </footer>
  )
}
