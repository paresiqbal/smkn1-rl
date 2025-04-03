import React from "react";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }) {
    return (
        <div className="font-regular font-geist flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4 md:ml-64">{children}</main>
        </div>
    );
}
