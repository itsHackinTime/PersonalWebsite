import Link from "next/link"

export const NavBar = () => {
  return (
      <div className={'navbar'}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
  
  )
}

