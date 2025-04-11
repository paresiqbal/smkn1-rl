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
                    <div key={item.id} className="mx-auto max-w-xl">
                        <Link
                            href={`/news/${item.id}`}
                            className="hover:shadow-dark hover:dark:shadow-light block overflow-hidden rounded-lg border-2 border-black dark:border-white"
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

                                {/* Date */}
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(
                                        item.created_at,
                                    ).toLocaleDateString("id-ID", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>

                                {/* Tags */}
                                <div className="py-4 text-sm">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag.id}
                                            className="shadow-input-dark dark:shadow-input-light mr-2 border-2 border-black px-3 py-1 text-sm dark:border-white"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>

                                {/* HTML Content */}
                                <div
                                    className="line-clamp-3 text-gray-700 dark:text-gray-200"
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 pb-10">
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
