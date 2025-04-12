import React from "react";
import { Link } from "@inertiajs/react";

export default function NewsDetail({ news }) {
    return (
        <div className="mx-auto max-w-screen-md px-4 pt-8 pb-16 md:pt-16">
            <h1 className="col-span-7 text-4xl font-bold sm:text-6xl">
                {news.title}
            </h1>
            <div className="mt-8 mb-8 border-b border-b-gray-300 pb-8 text-lg text-gray-600 dark:text-gray-300">
                <p className="mb-4 text-sm">
                    {new Date(news.created_at).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
                <p className="text-sm">
                    By {""}
                    <span className="font-semibold">{news.author?.name}</span>
                </p>
                <div className="mt-4">
                    {news.tags.map((tag) => (
                        <span
                            key={tag.id}
                            className="shadow-input-dark dark:shadow-input-light mr-2 inline-block border-2 border-black px-3 py-1 text-sm dark:border-white"
                        >
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </div>
            {news.image && (
                <img
                    src={news.image}
                    alt={news.title}
                    className="mx-auto mb-4 w-full rounded-lg md:w-3/4 lg:w-2/5"
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: news.content }} />

            <Link
                href="/article/news-list"
                className="mt-6 block text-blue-300 hover:underline"
            >
                ← Kembali Ke Daftar Berita
            </Link>
        </div>
    );
}
