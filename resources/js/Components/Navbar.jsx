import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

const Navbar = ({ authUser }) => {
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

    return (
        <nav className="p-4 lg:px-0 lg:py-4 lg:mx-24">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-black dark:text-white"
                >
                    SMKN 1 RL
                </Link>

                {/* Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#">Artikel</a>
                    <div className="relative group">
                        <a
                            href="#"
                            id="showcase-desktop-toggle"
                            className="inline-flex items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowcaseDropdownOpen(!showcaseDropdownOpen);
                            }}
                        >
                            Profil
                            <svg
                                className="ml-1 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 9l6 6 6-6"
                                />
                            </svg>
                        </a>
                        <div
                            id="showcase-desktop-dropdown"
                            className={`absolute ${
                                showcaseDropdownOpen ? "" : "hidden"
                            } shadow-lg mt-1`}
                        >
                            <a
                                href="#"
                                className="block px-8 py-2 text-black dark:text-white"
                            >
                                Visi&Misi
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    {/* Theme Toggle Button */}
                    <button
                        id="theme-toggle"
                        onClick={toggleTheme}
                        className="cursor-pointer"
                    >
                        {darkTheme ? (
                            <svg
                                id="sun-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                id="moon-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                />
                            </svg>
                        )}
                    </button>
                    {authUser ? (
                        <>
                            <span className="text-yellow-300">
                                {authUser.name}
                            </span>
                            <form action="/logout" method="POST">
                                <button type="submit">Logout</button>
                            </form>
                        </>
                    ) : (
                        <>
                            <a href="/auth/login">Login</a>
                            <a href="/auth/register">Register</a>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    id="menu-toggle"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <svg
                            id="close-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-black dark:text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            id="burger-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-black dark:text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden ${
                    mobileMenuOpen ? "" : "hidden"
                } transition duration-300`}
            >
                <a href="#" className="block p-2 text-black dark:text-white">
                    Artikel
                </a>
                <div className="relative">
                    <button
                        className="block p-2 w-full text-left text-black dark:text-white"
                        id="showcase-mobile-toggle"
                        onClick={() =>
                            setShowcaseMobileDropdownOpen(
                                !showcaseMobileDropdownOpen
                            )
                        }
                    >
                        Profil
                        <svg
                            className="ml-1 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 9l6 6 6-6"
                            />
                        </svg>
                    </button>
                    <div
                        id="showcase-mobile-dropdown"
                        className={`${
                            showcaseMobileDropdownOpen ? "" : "hidden"
                        } shadow-lg`}
                    >
                        <a
                            href="#"
                            className="block px-4 py-2 text-black dark:text-white"
                        >
                            Visi & Misi
                        </a>
                    </div>
                </div>
                {authUser ? (
                    <form action="/logout" method="POST" className="p-2">
                        <button
                            type="submit"
                            className="text-black dark:text-white"
                        >
                            Logout
                        </button>
                    </form>
                ) : (
                    <>
                        <a
                            href="/auth/login"
                            className="block p-2 text-black dark:text-white"
                        >
                            Login
                        </a>
                        <a
                            href="/auth/register"
                            className="block p-2 text-black dark:text-white"
                        >
                            Register
                        </a>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
