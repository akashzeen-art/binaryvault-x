import { useState } from 'react'
import styles from './Navbar.module.css'
const logo = '/Binaryshieldlogo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt="BinaryShield Logo" className={styles.logoImg} />
      </div>
      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li><a href="#products">Products</a></li>
        <li><a href="#features">Features</a></li>

      </ul>
      <button className={styles.burger} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </nav>
  )
}
