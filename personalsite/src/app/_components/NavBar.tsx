'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathname = usePathname();
  return (
      <div className={'navbar'}>
        <Link className={pathname === '/' ? 'active' : 'link'}href="/">HOME</Link>
        <Link className={pathname === '/projects' ? 'active' : 'link'}href="/projects">PROJECTS</Link>
        <Link  className={pathname === '/contact' ? 'active' : 'link'} href="/contact">CONTACT</Link>
      </div>
  
  )
}

