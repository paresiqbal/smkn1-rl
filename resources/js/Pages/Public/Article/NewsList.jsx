import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function NewsList() {
    const { news, tags } = usePage().props;

    return (
        <div className="mx-auto max-w-5xl space-y-8 p-4">
            <h1 className="text-center text-3xl font-bold">Daftar Berita</h1>

            {/* Optional tag filters */}
            <div className="flex flex-wrap justify-center gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag.id}
                        className="rounded-full bg-gray-200 px-3 py-1 text-sm"
                    >
                        {tag.name}
                    </span>
                ))}
            </div>

            {/* News cards */}
            <div className="space-y-6">
                {news.data.map((item) => (
                    <Link
                        key={item.id}
                        href={`/news/${item.id}`} // change if you use slug
                        className="block overflow-hidden rounded-lg border border-gray-300 transition hover:shadow-lg"
                    >
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-64 w-full object-cover"
                            />
                        )}
                        <div className="space-y-2 p-4">
                            <h2 className="text-xl font-semibold">
                                {item.title}
                            </h2>
                            <div className="text-sm text-gray-600">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="mr-2 rounded-full bg-red-100 px-2 py-1 text-xs text-red-600"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                            <p className="line-clamp-3 text-gray-700">
                                {item.content}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2">
                {news.links.map((link, i) =>
                    link.url ? (
                        <Link
                            key={i}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`rounded border px-3 py-1 ${
                                link.active
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                            }`}
                        />
                    ) : (
                        <span
                            key={i}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="px-3 py-1 text-gray-400"
                        />
                    ),
                )}
            </div>
        </div>
    );
}
