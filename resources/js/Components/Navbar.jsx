"use client";

import { useState, useEffect } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
    const { auth } = usePage().props;
    const authUser = auth.user;
    const { post } = useForm();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Track which sub-menu is open for desktop and mobile separately
    const [openDesktopSub, setOpenDesktopSub] = useState(null);
    const [openMobileSub, setOpenMobileSub] = useState(null);

    const [darkTheme, setDarkTheme] = useState(
        () => localStorage.getItem("theme") === "dark",
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

    const navItems = [
        {
            label: "Profil",
            subItems: [
                { label: "Visi & Misi", path: "/profile/visi-misi" },
                { label: "Fasilitas", path: "/profile/fasilitas" },
                { label: "Sambutan Kepala Sekolah", path: "/profile/sambutan" },
            ],
        },
        {
            label: "Artikel",
            subItems: [
                { label: "Berita", path: "/article/news-list" },
                { label: "Agenda", path: "/article/agenda" },
                { label: "Blog", path: "/profil/visi-misi" },
            ],
        },
        {
            label: "Jurusan",
            subItems: [
                { label: "Komputer & Jaringan", path: "/majors/tkj" },
                { label: "Bisnis Sepeda Motor", path: "/majors/tbsm" },
                { label: "Kendaraan Ringan", path: "/majors/tkr" },
                { label: "Elektronika", path: "/majors/tei" },
                { label: "Desain Pemodelan", path: "/majors/dpib" },
                {
                    label: "Instalasi Tenaga Listrik",
                    path: "/profil/visi-misi",
                },
                { label: "Pengelasan", path: "/profil/visi-misi" },
            ],
        },
        {
            label: "Panduan",
            subItems: [
                { label: "Pendaftaran", path: "/profil/pendaftaran" },
                { label: "Biaya Sekolah", path: "/profil/pendaftaran" },
                { label: "Kalender Akademik", path: "/profil/pendaftaran" },
                { label: "FAQ", path: "/profil/pendaftaran" },
                { label: "Download", path: "/profil/pendaftaran" },
            ],
        },
    ];

    // Close sub-menus when clicking outside (optional)
    useEffect(() => {
        const handleClickOutside = () => {
            setOpenDesktopSub(null);
            setOpenMobileSub(null);
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const toggleDesktopSub = (label, event) => {
        event.stopPropagation();
        setOpenDesktopSub((prev) => (prev === label ? null : label));
    };

    const toggleMobileSub = (label, event) => {
        event.stopPropagation();
        setOpenMobileSub((prev) => (prev === label ? null : label));
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-yellow-50 dark:bg-zinc-900">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4 font-semibold lg:px-0 lg:py-4">
                <Link
                    href="/"
                    className="flex items-center text-2xl font-bold text-black dark:text-white"
                >
                    <img
                        src="/assets/blud.png"
                        alt="SMKN 1 RL Logo"
                        className="mr-2 h-8 w-8"
                    />
                    <span>SMKN 1 RL</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center md:flex">
                    <div className="mr-6 flex space-x-6">
                        {navItems.map((item) => (
                            <div key={item.label} className="group relative">
                                {item.subItems ? (
                                    <button
                                        onClick={(e) =>
                                            toggleDesktopSub(item.label, e)
                                        }
                                        className="flex items-center space-x-1 rounded-md px-3 py-2 transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-800"
                                        aria-expanded={
                                            openDesktopSub === item.label
                                        }
                                        aria-haspopup="true"
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown className="h-4 w-4" />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="rounded-md px-3 py-2 transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-800"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                                {item.subItems &&
                                    openDesktopSub === item.label && (
                                        <div className="ring-opacity-5 absolute right-0 mt-1 min-w-[180px] rounded-md bg-yellow-300 py-1 shadow-lg ring-2 ring-black dark:bg-gray-800">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.path}
                                                    className="block px-4 py-2 text-sm hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                                    onClick={() =>
                                                        setOpenDesktopSub(null)
                                                    }
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>

                    {/* Theme Toggle + Auth Buttons */}
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-800"
                            aria-label={
                                darkTheme
                                    ? "Switch to light mode"
                                    : "Switch to dark mode"
                            }
                        >
                            {darkTheme ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>

                        {authUser ? (
                            <div className="flex items-center space-x-4">
                                <span className="font-medium text-yellow-500 dark:text-yellow-300">
                                    {authUser.name}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="block transform border-2 border-black bg-yellow-300 px-4 py-2 text-center font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/auth/login"
                                    className="transform border-2 border-black bg-yellow-300 px-3 py-1 font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/auth/register"
                                    className="rounded-md px-3 py-2 transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-800"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    className="rounded-md p-2 hover:bg-orange-100 md:hidden dark:text-gray-200 dark:hover:bg-gray-800"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMobileMenuOpen(!mobileMenuOpen);
                    }}
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="mt-2 rounded-md border-b-2 border-black p-2 md:hidden">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative">
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={(e) =>
                                                toggleMobileSub(item.label, e)
                                            }
                                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                            aria-expanded={
                                                openMobileSub === item.label
                                            }
                                        >
                                            <span>{item.label}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform ${
                                                    openMobileSub === item.label
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        {openMobileSub === item.label && (
                                            <div className="mt-1 space-y-1 pl-4">
                                                {item.subItems.map(
                                                    (subItem) => (
                                                        <Link
                                                            key={subItem.label}
                                                            href={subItem.path}
                                                            className="block rounded-md px-3 py-2 text-sm hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                                            onClick={() => {
                                                                setOpenMobileSub(
                                                                    null,
                                                                );
                                                                setMobileMenuOpen(
                                                                    false,
                                                                );
                                                            }}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ),
                                                )}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="block rounded-md px-3 py-2 transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="mt-4 flex flex-col space-y-3 pt-2">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center space-x-2 rounded-md px-3 py-2 transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                            >
                                {darkTheme ? (
                                    <>
                                        <Sun className="h-5 w-5" />
                                        <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <Moon className="h-5 w-5" />
                                        <span>Dark Mode</span>
                                    </>
                                )}
                            </button>

                            {authUser ? (
                                <div className="space-y-2">
                                    <div className="px-3 py-1 font-medium text-yellow-500 dark:text-yellow-300">
                                        {authUser.name}
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <Link
                                        href="/auth/login"
                                        className="block transform border-2 border-black bg-yellow-300 px-4 py-2 text-center font-semibold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/auth/register"
                                        className="block rounded-md px-3 py-2 text-center transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
