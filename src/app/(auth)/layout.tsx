"use client";
import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <>
      <div>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link> 
         )
        )
        }
      </div>
      {children}
    </>
  )
}
