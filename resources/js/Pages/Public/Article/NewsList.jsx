import React from "react";
import { Link, usePage } from "@inertiajs/react";
import TagFilter from "../../../components/TagFilter";

export default function NewsList() {
    const { news, tags } = usePage().props;

    return (
        <div className="mx-auto max-w-screen-md px-4 pt-16">
            <h1 className="text-5xl font-bold">Berita</h1>
            <div>
                <TagFilter />
            </div>

            {/* News cards */}
            <div className="space-y-6 py-16">
                {news.data.map((item) => (
                    <Link
                        key={item.id}
                        href={`/news/${item.id}`}
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
