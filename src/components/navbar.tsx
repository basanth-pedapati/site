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
  Link,
  Button,
} from "@heroui/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Me",
    "Skills",
    "Projects",
    "Contact Me",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur py-2">
      <NavbarContent className="sm:hidden pl-4" justify="start">
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

      <NavbarContent className="sm:hidden pr-3" justify="center">
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

      <NavbarContent className="hidden sm:flex w-full items-center justify-between px-8 gap-6">
        <NavbarBrand className="flex items-center gap-3">
          <Image
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover object-top"
            src="/pfp.svg"
            width={32}
            height={32}
          />
          <p className="font-bold text-inherit">VVS Basanth</p>
        </NavbarBrand>
        <div className="flex-1 flex items-center justify-center gap-75 text-md">
          <NavbarItem>
            <Link 
              className="rounded-md px-3 py-1 transition-colors hover:gray-300 hover:bg-gray-100 active:bg-gray-200"
              color="foreground" href="#"
            >
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link 
              className="rounded-md px-3 py-1 transition-colors hover:gray-300 hover:bg-gray-100 active:bg-gray-200"
              aria-current="page" href="#"
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              className="rounded-md px-3 py-1 transition-colors hover:gray-300 hover:bg-gray-100 active:bg-gray-200"
              color="foreground" href="#"
            >
              Contact Me
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            color="default" 
            href="/resume.pdf" 
            variant="flat"
            download
            className="flex items-center bg-black text-white px-1 py-1 rounded-md min-w-[80px] min-h-[36px] hover:bg-gray-800 transition-all gap-1 mt-1 mr-3"
            style={{ lineHeight: 1.1 }}
            >
              <span className="flex flex-col items-end text-xs font-semibold leading-tight text-right">
                <span>Resume</span>
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
                  d="M10 3V13M10 13L6 9M10 13L14 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="15"
                  width="14"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
            </svg>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pl-4 pt-2 pb-2 bg-gray-100/80 backdrop-blur-md rounded-r-lg mt-2">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full rounded-md px-2 py-1 transition-colors hover:bg-gray-200 active:bg-gray-300"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
