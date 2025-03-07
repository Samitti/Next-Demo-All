"use client";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { SignInButton } from '@clerk/nextjs';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className='flex items-center justify-center p-4 '>
        <Link href="/" className={pathname==="/"? "font-bold mr-4" : "mr-4 text-blue-500"}>
            Home
        </Link>
        <Link href="/about" className={pathname==="/about"? "font-bold mr-4" : "mr-4 text-blue-500"}>
            About
        </Link>
        <Link href="/products/1" className={pathname.startsWith("/products/1")? "font-bold mr-4" : "mr-4 text-blue-500"}>
            Product 1
        </Link>
        <SignInButton mode='modal'/>
    </nav>
  )
}

export default Navigation