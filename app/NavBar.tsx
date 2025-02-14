"use client";
import React from "react";
import Link from "next/link";
import { PiCoffeeFill } from "react-icons/pi";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const links = [
    {
      item: "Dashboard",
      href: "/dashboard",
    },
    {
      item: "Issues",
      href: "/issues",
    },
  ];

  const path = usePathname();
  return (
    <nav className="flex space-x-6 mb-5 border-b h-16 px-5 items-center ">
      <Link href="/">
        <PiCoffeeFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            className={`${link.href === path ? " text-zinc-900" : " text-zinc-500"} text-zinc-500 hover:text-zinc-900 transition-colors`}
            key={link.item}
          >
            <Link href={link.href}>{link.item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
