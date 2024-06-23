"use client"
import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { Instagram, Menu, Twitter, X } from "lucide-react";
import { useState } from "react";

export function NavBar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <div className="w-full relative flex items-center justify-between py-5">
        <Link href='/' className="font-bold text-3xl">
          Onesio<span className="text-primary">Blog</span>
        </Link>
        <Link href='/' className="font-bold text-xl hidden lg:flex">Artigos</Link>
        <Link href='/about-us' className="font-bold text-xl hidden lg:flex">Sobre nós</Link>
        <ModeToggle />
        <div className="lg:hidden items-center">
          <Menu onClick={() => toggleNavBar()}/>
        </div>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 w-[65%] h-screen lg:hidden bg-[#ecf0f3] p-10 ease-in duration-500 z-50 dark:bg-background">
          <div className="flex w-full items-center justify-end">
            <X onClick={() => toggleNavBar()}/>
          </div>
          <div className="flex flex-col py-10">
            <Link href='/' className="font-bold text-xl py-4">Artigos</Link>
            <Link href='/about-us' className="font-bold text-xl py-4">Sobre nós</Link>
          </div>
          <div className="flex flex-row justify-around pt-10 items-center">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}