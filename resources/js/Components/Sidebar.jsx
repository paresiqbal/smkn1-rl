import React from "react";
import { Link } from "@inertiajs/react";

const Sidebar = () => {
    return (
        <aside className="w-64 h-full bg-gray-800 text-white p-4">
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link href="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/admin/profile">Profile</Link>
                    </li>
                    <li className="mb-4">
                        <Link href="/admin/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
