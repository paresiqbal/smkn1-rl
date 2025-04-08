import React from "react";
import { usePage } from "@inertiajs/react";

import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="font-regular font-geist flex min-h-screen w-full flex-col antialiased transition-all duration-200">
            <Navbar />
            <main className="flex w-full flex-1 justify-center selection:bg-red-300 lg:px-24 dark:selection:bg-orange-400">
                {children}
            </main>
        </div>
    );
}
