import { useState, useEffect } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";

const Navbar = () => {
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
        <nav className="p-4 lg:px-0 lg:py-4 lg:mx-24">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold text-black dark:text-white"
                >
                    SMKN 1 RL
                </Link>

                <div className="hidden md:flex space-x-6">
                    <a href="#">Artikel</a>
                    <div className="relative group">
                        <a
                            href="#"
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
                        {showcaseDropdownOpen && (
                            <div className="absolute shadow-lg mt-1">
                                <a
                                    href="#"
                                    className="block px-8 py-2 text-black dark:text-white"
                                >
                                    Visi & Misi
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <button onClick={toggleTheme} className="cursor-pointer">
                        {darkTheme ? (
                            <svg
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
                            <button
                                onClick={handleLogout}
                                className="text-black dark:text-white"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login">Login</Link>
                            <Link href="/auth/register">Register</Link>
                        </>
                    )}
                </div>

                <button
                    id="menu-toggle"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {mobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden transition duration-300"
                >
                    <a
                        href="#"
                        className="block p-2 text-black dark:text-white"
                    >
                        Artikel
                    </a>
                    <div className="relative">
                        <button
                            onClick={() =>
                                setShowcaseMobileDropdownOpen(
                                    !showcaseMobileDropdownOpen
                                )
                            }
                            className="block p-2 w-full text-left text-black dark:text-white"
                        >
                            Profil
                        </button>
                        {showcaseMobileDropdownOpen && (
                            <div className="shadow-lg">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-black dark:text-white"
                                >
                                    Visi & Misi
                                </a>
                            </div>
                        )}
                    </div>
                    {authUser ? (
                        <button
                            onClick={handleLogout}
                            className="block p-2 text-black dark:text-white"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link
                                href="/auth/login"
                                className="block p-2 text-black dark:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                href="/auth/register"
                                className="block p-2 text-black dark:text-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
