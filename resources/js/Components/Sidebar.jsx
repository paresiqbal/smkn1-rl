import { useState, useEffect, useRef } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import {
    ChevronDown,
    Menu,
    X,
    Sun,
    Moon,
    LogOut,
    User,
    Newspaper,
    BadgeHelp,
} from "lucide-react";

const Sidebar = () => {
    const { auth } = usePage().props;
    const authUser = auth.user;
    const { post } = useForm();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState({});
    const sidebarRef = useRef(null);

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

    useEffect(() => {
        // Close sidebar when clicking outside
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                sidebarOpen
            ) {
                setSidebarOpen(false);
            }
        };

        // Close sidebar when pressing escape key
        const handleEscKey = (event) => {
            if (event.key === "Escape" && sidebarOpen) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [sidebarOpen]);

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
        localStorage.setItem("theme", darkTheme ? "light" : "dark");
    };

    const handleLogout = (e) => {
        e.preventDefault();
        post("/logout");
    };

    const toggleMenu = (label) => {
        setExpandedMenus((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const navItems = [
        {
            label: "Artikel",
            icon: <Newspaper size="16" />,
            subItems: [
                { label: "Tag", path: "/admin/tags" },
                { label: "Berita", path: "/admin/news" },
                { label: "Agenda", path: "/admin/agenda" },
            ],
        },
        {
            label: "Profil",
            icon: <User size="16" />,
            subItems: [
                { label: "Visi & Misi", path: "/profil/visi-misi" },
                { label: "Sejarah", path: "/profil/visi-misi" },
                { label: "Fasilitas", path: "/profil/visi-misi" },
            ],
        },
        {
            label: "Panduan",
            icon: <BadgeHelp size="16" />,
            subItems: [
                { label: "Pendaftaran", path: "/panduan/pendaftaran" },
                { label: "Kalender", path: "/admin/guide/calendar" },
                { label: "FAQ", path: "/panduan/faq" },
                { label: "Download", path: "/panduan/download" },
            ],
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Mobile sidebar toggle */}
            <div className="fixed top-4 left-4 z-50 md:hidden">
                <button
                    aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
                    className="rounded-md bg-white p-2 shadow-md transition-all hover:bg-orange-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 z-50 w-64 transform overflow-y-auto bg-orange-50 shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 dark:bg-zinc-800 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col">
                    {/* Sidebar header */}
                    <div className="flex items-center justify-between border-b p-4">
                        <Link
                            href="/admin/dashboard"
                            className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white"
                        >
                            <img
                                src="/assets/blud.png"
                                alt="SMKN 1 RL Logo"
                                className="h-8 w-8"
                            />
                            <span>SMKN 1 RL</span>
                        </Link>
                        {/* X button - ONLY visible on mobile */}
                        <button
                            className="block rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close sidebar"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 p-4">
                        {navItems.map((item) => (
                            <div key={item.label} className="py-1">
                                <button
                                    onClick={() => toggleMenu(item.label)}
                                    className="group flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                    aria-expanded={expandedMenus[item.label]}
                                >
                                    <div className="flex items-center">
                                        <span className="mr-2">
                                            {item.icon}
                                        </span>
                                        <span>{item.label}</span>
                                    </div>
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-200 ${
                                            expandedMenus[item.label]
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                {/* Submenu with smooth height transition */}
                                <div
                                    className={`mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                                        expandedMenus[item.label]
                                            ? "max-h-96 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="space-y-1 pl-6">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.path}
                                                className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-gray-700"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Footer */}
                    <div className="border-t p-4 dark:border-gray-700">
                        <button
                            onClick={toggleTheme}
                            className="mb-4 flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                            <span className="flex items-center">
                                {darkTheme ? (
                                    <>
                                        <Sun className="mr-2 h-4 w-4" />
                                        <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <Moon className="mr-2 h-4 w-4" />
                                        <span>Dark Mode</span>
                                    </>
                                )}
                            </span>
                        </button>

                        {authUser && (
                            <div className="space-y-2 rounded-md bg-orange-50 p-3 dark:bg-zinc-800">
                                <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                    <User className="h-4 w-4" />
                                    <span>{authUser.name}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex w-full cursor-pointer items-center space-x-2 rounded-md py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                                >
                                    <LogOut className="h-4 w-4" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
