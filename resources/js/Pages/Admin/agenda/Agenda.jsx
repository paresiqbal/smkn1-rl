import React from "react";
import { Link } from "@inertiajs/react";

// layout
import AdminLayout from "../../../Layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function Agenda({ agenda }) {
    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Agenda", href: "/admin/agenda" },
    ];

    return (
        <div className="px-6 pt-14 pb-10 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-12">
                <h1 className="text-2xl font-bold">Daftar Agenda</h1>
                <p className="text-sm">List Agenda Yang Pernah Dibuat.</p>
            </div>

            <div className="mb-6">
                <Link
                    href="/admin/agenda/create"
                    className="dark:shadow-light shadow-dark w-full border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                >
                    Buat Agenda Baru
                </Link>
            </div>

            {/* Display list of agenda */}
            {agenda && agenda.data && agenda.data.length > 0 ? (
                <ul>
                    {agenda.data.map((item) => (
                        <li
                            key={item.id}
                            className="dark:shadow-light shadow-dark container mb-4 border-2 border-black transition dark:border-white"
                        >
                            <Link
                                href={`/admin/agenda/${item.id}/edit`}
                                className="flex items-center justify-between gap-4 p-4"
                            >
                                <div>
                                    {/* Agenda Title */}
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>

                                    {/* Published Date */}
                                    <div className="text-sm text-gray-600">
                                        {new Date(
                                            item.published_at,
                                        ).toDateString()}
                                    </div>
                                </div>

                                {/* Agenda Image */}
                                <div className="min-w-[120px]">
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-28 w-28 rounded object-cover"
                                        />
                                    )}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="pt-4">Belum ada agenda yang diterbitkan.</p>
            )}
        </div>
    );
}

Agenda.layout = (page) => <AdminLayout children={page} />;
