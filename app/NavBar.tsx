"use client";
import React from "react";
import Link from "next/link";
import { PiCoffeeFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { Box, Container, Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import { stat } from "fs";

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
  const { status, data: session } = useSession();

  const path = usePathname();
  return (
    <nav className="flex space-x-6 mb-5 border-b h-16 px-5 items-center ">
      <Container>
        <Flex justify="between">
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

      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Log Out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin"> Login</Link>
        )}
      </Box>
      </Flex>
      </Container>
    </nav>
  );
};
