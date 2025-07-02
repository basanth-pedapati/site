'use client'

import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link as HeroLink,
  Button,
} from "@heroui/react";
import NextLink from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="sticky top-0 z-50 py-2 bg-white bg-opacity-90 backdrop-blur">
      <NavbarContent className="pl-4 sm:hidden" justify="start">
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect y="7" width="28" height="3" rx="1.5" fill="currentColor"/>
              <rect y="18" width="28" height="3" rx="1.5" fill="currentColor"/>
            </svg>
          }
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Image
            alt="Logo"
            className="mr-1 ml-10 h-8 sm:h-9"
            src="/pfp.png"
            width={32}
            height={40}
          />
          <p className="font-bold text-inherit">VVS Basanth</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-6 justify-between items-center px-8 w-full sm:flex">
        <NavbarBrand className="flex gap-3 items-center">
          <Image
            alt="Logo"
            className="object-cover object-top w-8 h-8 rounded-full"
            src="/pfp.svg"
            width={32}
            height={32}
          />
          <p className="font-bold text-inherit">VVS Basanth</p>
        </NavbarBrand>
        <div className="flex flex-1 justify-center items-center gap-75 text-md">
          <NavbarItem>
            <NextLink href="/skills" className="px-3 py-1 rounded-md transition-colors hover:gray-300 hover:bg-gray-100 active:bg-gray-200 text-foreground">
              Skills
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink href="/projects" className="px-3 py-1 rounded-md transition-colors hover:gray-300 hover:bg-gray-100 active:bg-gray-200 text-foreground">
              Projects
            </NextLink>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={HeroLink} 
            color="default" 
            href="mailto:vvsbasanth@gmail.com?subject=Hello%20VVS%20Basanth&body=Hi%20VVS%20Basanth,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0A%0A"
            variant="flat"
            className="flex items-center bg-black text-white px-1 py-1 rounded-md min-w-[80px] min-h-[36px] hover:bg-gray-800 transition-all gap-1 mt-1 mr-3"
            style={{ lineHeight: 1.1 }}
            >
              <span className="flex flex-col items-end text-xs font-semibold leading-tight text-right">
                <span>Contact Me</span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                className="my-1"
              >
                <path
                  d="M3 8L10.89 13.26C11.2 13.09 11.48 12.96 11.75 12.82L20 8M3 8L10 2L17 8M3 8V16C3 16.55 3.45 17 4 17H16C16.55 17 17 16.55 17 16V8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
            </svg>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-2 pb-2 pl-4 mt-2 rounded-r-lg backdrop-blur-md bg-gray-100/80">
        <NavbarMenuItem key="Skills">
          <NextLink href="/skills" className="px-2 py-1 w-full text-lg rounded-md transition-colors hover:bg-gray-200 active:bg-gray-300 text-foreground">
            Skills
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem key="Projects">
          <NextLink href="/projects" className="px-2 py-1 w-full text-lg rounded-md transition-colors hover:bg-gray-200 active:bg-gray-300 text-foreground">
            Projects
          </NextLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
