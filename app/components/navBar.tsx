import Link from "next/link";
import { ModeToggle } from "./modeToggle";

export function NavBar() {
  return (
    <nav className="w-full relative flex items-center justify-between py-5">
      <Link href='/' className="font-bold text-3xl">
        Onesio<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  )
}