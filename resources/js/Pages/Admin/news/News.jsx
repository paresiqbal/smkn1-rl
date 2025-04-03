import React from "react";

// layout
import AdminLayout from "../../../Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function News({ news, tags }) {
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
            {news.length > 0 ? (
                <ul>
                    {news.map((item) => (
                        <li key={item.id} className="mb-4 rounded border p-4">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p>{item.content}</p>
                            <div>Published: {item.published_at}</div>
                            <div>
                                Tags:{" "}
                                {item.tags.map((tag) => tag.name).join(", ")}
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
