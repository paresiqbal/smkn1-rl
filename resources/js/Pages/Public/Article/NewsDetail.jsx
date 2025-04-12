import React from "react";
import { Link } from "@inertiajs/react";

export default function NewsDetail({ news }) {
    return (
        <div className="mx-auto max-w-3xl p-4">
            <h1 className="mb-2 text-3xl font-bold">{news.title}</h1>
            <p className="mb-4 text-sm text-gray-500">{news.created_at}</p>
            {news.image && (
                <img
                    src={news.image}
                    alt={news.title}
                    className="mb-4 rounded-lg"
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
            <div className="mt-4">
                {news.tags.map((tag) => (
                    <span
                        key={tag.id}
                        className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm"
                    >
                        #{tag.name}
                    </span>
                ))}
            </div>
            <Link
                href="/article/news-list"
                className="mt-6 block text-blue-600 hover:underline"
            >
                ← Back to News List
            </Link>
        </div>
    );
}
