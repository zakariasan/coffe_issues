import React from "react";
import Link from "next/link";
import { PiCoffeeFill } from "react-icons/pi";

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

  return (
    <nav className="flex space-x-6 mb-5 border-b h-16 px-5 items-center ">
      <Link href="/">
        <PiCoffeeFill />

      </Link>
      <ul className="flex space-x-6" >
        {links.map((link) => (
          <li className="text-zinc-500 hover:text-zinc-900 transition-colors" key={link.item}>
            <Link href={link.href}>{link.item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
