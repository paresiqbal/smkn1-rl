import React from "react";
import AdminLayout from "../../../Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function News({ news, tags }) {
    console.log("News Data:", news);
    console.log("First News Tags:", news.data?.[0]?.tags);

    return (
        <div className="mx-auto max-w-2xl rounded-lg p-6 shadow-md">
            <h1 className="mb-4 text-center text-2xl font-bold">News List</h1>

            {/* Button to navigate to Create News page */}
            <div className="mb-4">
                <Link
                    href="/admin/news/create"
                    className="rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
                >
                    Create New News
                </Link>
            </div>

            {/* Display list of news */}
            {news && news.data && news.data.length > 0 ? (
                <ul>
                    {news.data.map((item) => (
                        <li key={item.id} className="mb-4 rounded border p-4">
                            {/* News Title */}
                            <h3 className="text-lg font-semibold">
                                {item.title}
                            </h3>

                            {/* Published Date */}
                            <div className="text-sm text-gray-600">
                                Published:
                                {new Date(item.published_at).toDateString()}
                            </div>

                            {/* Tags */}
                            <div>
                                Tags:
                                {Array.isArray(item.tags) &&
                                item.tags.length > 0
                                    ? item.tags
                                          .map((tag) => tag.name)
                                          .join(", ")
                                    : "No tags"}
                            </div>

                            {/* Read More Button */}
                            <div className="mt-2">
                                <Link
                                    href={`/admin/news/${item.id}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No news published yet.</p>
            )}
        </div>
    );
}

News.layout = (page) => <AdminLayout children={page} />;
