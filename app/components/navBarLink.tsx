import Link from "next/link";
import { ComponentProps } from "react";

interface NavBarLinkProps extends ComponentProps<'a'> {
  children: string
  href: string
}

export function NavBarLink(props: NavBarLinkProps) {
  return (
    <Link {...props} href={props.href} className="font-bold text-xl hidden lg:flex hover:text-primary">{props.children}</Link>
  )
}