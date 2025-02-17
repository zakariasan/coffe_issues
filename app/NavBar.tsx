"use client";
import React from "react";
import Link from "next/link";
import { PiCoffeeFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";

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
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Flex justify="start" gap="3" align="center">

                  <Text size="2">Hello {session.user!.name!}</Text>
                  <Avatar
                    src={session.user!.image!}
                    fallback="?"
                    size="2"
                    radius="full"
                    className="cursor-pointer"
                  />

                  </Flex>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">
                      {session.user!.email}
                    </Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                     <Link href="/api/auth/signout">Log out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
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
