"use client";

import React, { forwardRef, useEffect, useState } from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useForm, usePage } from "@inertiajs/react";

const components = [
    {
        title: "Alert Dialog",
        href: "https://ui.shadcn.com/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "https://ui.shadcn.com/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "https://ui.shadcn.com/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "https://ui.shadcn.com/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "https://ui.shadcn.com/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "https://ui.shadcn.com/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export default function NavigationMenuDemo() {
    const { auth } = usePage().props;
    const authUser = auth.user;
    const { post } = useForm();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showcaseDropdownOpen, setShowcaseDropdownOpen] = useState(false);
    const [showcaseMobileDropdownOpen, setShowcaseMobileDropdownOpen] =
        useState(false);
    const [darkTheme, setDarkTheme] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkTheme]);

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
        localStorage.setItem("theme", darkTheme ? "light" : "dark");
    };

    const handleLogout = (e) => {
        e.preventDefault();
        post("/logout");
    };

    return (
        <NavigationMenu className="z-[5] m750:max-w-[300px]">
            <NavigationMenuList className="m750:max-w-[300px]">
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
                        <span className="m750:hidden">Getting started</span>
                        <span className="hidden m750:inline">Home</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[500px] gap-3 p-6 lg:grid-cols-[.75fr_1fr] m750:w-[300px]">
                            <ListItem
                                href="https://ui.shadcn.com/docs"
                                title="Introduction"
                            >
                                Re-usable components built using Radix UI and
                                Tailwind CSS.
                            </ListItem>
                            <ListItem
                                href="https://ui.shadcn.com/docs/installation"
                                title="Installation"
                            >
                                How to install dependencies and structure your
                                app.
                            </ListItem>
                            <ListItem
                                href="https://ui.shadcn.com/docs/primitives/typography"
                                title="Typography"
                            >
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
                        Components
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link
                        href="https://ui.shadcn.com/docs"
                        legacyBehavior
                        passHref
                    >
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            <span className="m750:max-w-[80px] m750:text-xs">
                                Documentation
                            </span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "hover:bg-accent block text-text select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-border dark:hover:border-darkBorder",
                        className
                    )}
                    {...props}
                >
                    <div className="text-base font-heading leading-none">
                        {title}
                    </div>
                    <p className="text-muted-foreground font-base line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";
