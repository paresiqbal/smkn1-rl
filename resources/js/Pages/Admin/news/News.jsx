import React from "react";

// layout
import AdminLayout from "../../../Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function News({ news, tags }) {
    console.log(news);

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
                            <h3 className="font-semibold">{item.title}</h3>

                            {/* Render HTML content */}
                            <div
                                className="prose ql-editor max-w-none"
                                dangerouslySetInnerHTML={{
                                    __html: item.content,
                                }}
                            />

                            <div>
                                Published:{" "}
                                {new Date(item.published_at).toDateString()}
                            </div>
                            <div>
                                Tags:{" "}
                                {item.tags.length > 0
                                    ? item.tags
                                          .map((tag) => tag.name)
                                          .join(", ")
                                    : "No tags"}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading news...</p>
            )}
        </div>
    );
}

News.layout = (page) => <AdminLayout children={page} />;
