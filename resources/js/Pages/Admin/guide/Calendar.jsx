import React from "react";

// layout
import AdminLayout from "../../../Layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function Calendar() {
    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Calendar", href: "/admin/calendar" },
    ];

    return (
        <div className="min-h-screen px-6 pt-14 pb-10 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <h1>Upload Kalender Akademik SMK Negeri 1 Rejang Lebong</h1>
            <button className="dark:shadow-light shadow-dark w-1/5 cursor-pointer border-2 border-black bg-red-400 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none">
                Upload
            </button>
        </div>
    );
}

Calendar.layout = (page) => <AdminLayout children={page} />;
