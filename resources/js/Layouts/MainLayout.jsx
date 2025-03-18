import React from "react";
import { usePage } from "@inertiajs/react";

import Navbar from "../Components/Navbar";

export default function MainLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="text-base antialiased font-normal transition-all duration-200 flex flex-col w-full">
            <Navbar />
            <main className="flex-1 flex justify-center p-4 w-full lg:px-24 selection:bg-red-300 dark:selection:bg-orange-400">
                {children}
            </main>
        </div>
    );
}
