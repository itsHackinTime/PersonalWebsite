import Link from "next/link"
import styles from "./navbar.module.scss"
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

