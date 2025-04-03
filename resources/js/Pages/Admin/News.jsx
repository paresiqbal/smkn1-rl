import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import AdminLayout from "../../Layouts/AdminLayout";

export default function News() {
    const { tags = [] } = usePage().props; // Ensure tags is always an array

    console.log(tags); // Log the tags to check if they are being passed correctly

    const [news, setNews] = useState({
        title: "",
        content: "",
        published_at: "",
        tags: [],
        image: null,
    });

    function handleChange(e) {
        const key = e.target.name;
        let value = e.target.value;

        if (e.target.type === "file") {
            value = e.target.files[0];
        }

        setNews((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!news.title || !news.content) {
            alert("Title and Content are required!");
            return;
        }

        const formData = new FormData();
        formData.append("title", news.title);
        formData.append("content", news.content);
        formData.append("published_at", news.published_at || null);
        news.tags.forEach((tag) => formData.append("tags[]", tag));

        if (news.image instanceof File) {
            formData.append("image", news.image);
        }

        router.post("/admin/news/store", formData);
    }

    return (
        <div className="mx-auto max-w-2xl rounded-lg p-6 shadow-md">
            <h1 className="mb-4 text-center text-2xl font-bold">Upload News</h1>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="space-y-4"
            >
                <div>
                    <label className="block font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={news.title}
                        onChange={handleChange}
                        required
                        className="w-full rounded border p-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Content</label>
                    <textarea
                        name="content"
                        value={news.content}
                        onChange={handleChange}
                        required
                        className="w-full rounded border p-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Published Date</label>
                    <input
                        type="date"
                        name="published_at"
                        value={news.published_at}
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Tags</label>
                    <select
                        name="tags"
                        multiple
                        value={news.tags}
                        onChange={(e) =>
                            setNews((prev) => ({
                                ...prev,
                                tags: [...e.target.selectedOptions].map(
                                    (o) => o.value,
                                ),
                            }))
                        }
                        className="w-full rounded border p-2"
                    >
                        {tags.length > 0 ? (
                            tags.map((tag) => (
                                <option key={tag.id} value={tag.id}>
                                    {tag.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>No tags available</option>
                        )}
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

News.layout = (page) => <AdminLayout children={page} />;
