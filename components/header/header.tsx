"use client";

import { Button } from "@/components/ui/button";
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll'

export const Header = () => {
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

const [isOpen, setOpen] = useState(false);
return (
    <header className="w-full z-40 fixed top-0 left-0 bg-linear-to-r from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950">
        <div className="container relative mx-auto h-18 px-3 flex gap-4 flex-row lg:grid lg:grid-cols-2 items-center">
            
            <div className="flex lg:justify-start gap-3 items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Avatar>
                    <AvatarImage src="photo.jpg" />
                    <AvatarFallback>MNA</AvatarFallback>
                    </Avatar>
                    <p className="font-extrabold">mfolio</p>
                </Link>
            </div>
            
            <div className="flex justify-end w-full gap-4">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                <NavigationMenu className="flex justify-start items-start">
                    <NavigationMenuList className="flex justify-start gap-4 flex-row">
                    {navigationItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                        {
                            <>
                                <Button variant="link">
                                    <ScrollLink  
                                        to={item.section}
                                        smooth={true}
                                        duration={500}
                                        >
                                        {item.title}
                                    </ScrollLink>
                                </Button>
                            </>
                        }
                        </NavigationMenuItem>
                    ))}
                    </NavigationMenuList>
                </NavigationMenu>
                </div>
            </div>
            
            <div className="flex w-12 shrink lg:hidden items-end justify-end">
            <Button variant="link" onClick={() => setOpen(!isOpen)}>
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            {isOpen && (
                <div className="absolute top-18 h-screen border-t flex flex-col w-full right-0 bg-linear-to-l from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950  py-4 px-3 container gap-8">
                {navigationItems.map((item) => (
                    <div key={item.title}>
                    <div className="flex flex-col gap-2">
                        <ScrollLink
                            to={item.section}
                            href={item.href}
                            smooth={true}
                            duration={500}
                            className="flex justify-center items-center"
                        >
                            <span className="text-lg">{item.title}</span>
                        </ScrollLink>
                    </div>
                    </div>
                ))}
                </div>
            )}
            </div>
        </div>
    </header>
);
};