"use client";
import { link } from "fs";
import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

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
  const [input,setInout] = useState("")
  
  return (
    <>
      <div>
        <div>
          <input className="form-input" type="text" value={input} onChange={(e)=>setInout(e.target.value)} />
        </div>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href); 
          return (
            <Link className={isActive ? "font-bold mr-4":"text-blue-500 mr-4"} href={link.href} key={link.name}>{ link.name }</Link>
          );
        }
         
        )}
      </div>
      {children}
    </>
  )
}
