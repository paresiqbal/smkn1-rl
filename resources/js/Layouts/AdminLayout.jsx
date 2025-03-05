import React from "react";
import Sidebar from "../Components/Sidebar";

export default function AdminLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}
