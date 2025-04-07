import React from "react";
import { Link } from "@inertiajs/react";

// layout
import AdminLayout from "../../../Layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function News({ news, tags }) {
    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Berita", href: "/admin/news" },
    ];

    return (
        <div className="px-6 pt-14 pb-10 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-12">
                <h1 className="text-2xl font-bold">Daftar Berita</h1>
                <p className="text-sm">List Berita Yang Pernah Dibuat.</p>
            </div>

            <div className="mb-6">
                <Link
                    href="/admin/news/create"
                    className="dark:shadow-light shadow-dark w-full border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                >
                    Buat Berita Baru
                </Link>
            </div>

            {/* Display list of news */}
            {news && news.data && news.data.length > 0 ? (
                <ul>
                    {news.data.map((item) => (
                        <li
                            key={item.id}
                            className="dark:shadow-light shadow-dark container mb-4 border-2 border-black transition dark:border-white"
                        >
                            <Link
                                href={`/admin/news/${item.id}/edit`}
                                className="flex items-center justify-between gap-4 p-4"
                            >
                                <div>
                                    {/* News Title */}
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>

                                    {/* Published Date */}
                                    <div className="text-sm text-gray-600">
                                        {new Date(
                                            item.published_at,
                                        ).toDateString()}
                                    </div>

                                    {/* Tags */}
                                    <div>
                                        {Array.isArray(item.tags) &&
                                        item.tags.length > 0 ? (
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {item.tags.map((tag) => (
                                                    <span
                                                        key={tag.id}
                                                        className="dark:shadow-input-light shadow-input-dark border-2 border-black bg-red-400 px-3 py-1 text-sm font-medium text-black dark:border-white"
                                                    >
                                                        {tag.name}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <span className="text-sm text-gray-400 italic">
                                                No tags
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* News Image */}
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
                <p className="pt-4">Belum ada berita yang diterbitkan.</p>
            )}
        </div>
    );
}

News.layout = (page) => <AdminLayout children={page} />;
