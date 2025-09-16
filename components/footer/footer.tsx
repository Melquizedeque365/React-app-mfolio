'use client'

import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Linkedin} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from 'react-scroll'
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const navigationItems = [
    {
    title: "Início",
    section: "home",
    href: "/",
    description: "",
    },
    {
    title: "Sobre",
    section: "about",
    description: "Managing a small business today is already tough.",
    href: "/about"
    },
    {
    title: "Tecnologias",
    section: "technologies",
    description: "Managing a small business today is already tough.",
    href: "/technologies"
    },
    {
    title: "Projectos",
    section: "projects",
    description: "Managing a small business today is already tough.",
    href: "/projects",
    },
    {
    title: "Contacto",
    section: "contact",
    description: "Managing a small business today is already tough.",
    href: "/projects",
    },
];

export const Footer = () => (
  <div className="w-full py-20 lg:py-8 bg-linear-to-r from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950">
    <div className="container mx-auto px-3">
      <div className="flex flex-col gap-10">
        <div className="grid grid-end lg:grid-cols-2 gap-8">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="flex flex-col lg:gap-8 lg:items-start items-center gap-6">
              <p className="font-extrabold text-2xm">
                mfolio
              </p>
              <p>
                Design by Melquizedeque Manuel António 
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="flex flex-col lg:gap-8 lg:items-end items-center gap-6">
              <div>
                  <NavigationMenu className="flex justify-start items-start">
                    <NavigationMenuList className="flex justify-start gap-4 flex-row">
                    {navigationItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                        {
                          <>
                            
                              <ScrollLink  
                                  to={item.section}
                                  smooth={true}
                                  duration={500}
                                  className="cursor-pointer"
                                  >
                                  {item.title}
                              </ScrollLink>
                          </>
                        }
                        </NavigationMenuItem>
                    ))}
                    </NavigationMenuList>
                  </NavigationMenu>
              </div>
              <div className="flex gap-4 items-center">
                <ModeToggle></ModeToggle>
                <div className="flex gap-2 text-gray-600 dark:text-gray-300">
                  <Link href="https://www.facebook.com/melquisedequemanuel.antoniovava">
                    <span><Facebook></Facebook></span>
                  </Link>
                  <Link href="https://www.instagram.com/melquizedeque.ma">
                    <span><Instagram></Instagram></span>
                  </Link>
                  <Link href="https://ao.linkedin.com/in/melquizedeque-ant%C3%B3nio-394537268">
                    <span><Linkedin></Linkedin></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);