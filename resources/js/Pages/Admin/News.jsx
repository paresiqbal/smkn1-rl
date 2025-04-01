import React, { useState } from "react";
import { router } from "@inertiajs/react";
import AdminLayout from "../../Layouts/AdminLayout";

export default function News() {
    const [news, setNews] = useState({
        title: "",
        content: "",
        published_at: "",
        tags: "",
        image: null,
    });

    function handleChange(e) {
        const key = e.target.name;
        let value = e.target.value;

        if (e.target.type === "file") {
            value = e.target.files[0];
        }

        setNews((news) => ({
            ...news,
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

        const tagsArray = news.tags
            ? news.tags.split(",").map((tag) => tag.trim())
            : [];
        tagsArray.forEach((tag) => formData.append("tags[]", tag));

        if (news.image instanceof File) {
            formData.append("image", news.image);
        }

        router.post("/admin/news/store", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    }

    return (
        <div>
            <h1>Upload News</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={news.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        name="content"
                        value={news.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Published Date</label>
                    <input
                        type="date"
                        name="published_at"
                        value={news.published_at}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tags (comma separated)</label>
                    <input
                        type="text"
                        name="tags"
                        value={news.tags}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

News.layout = (page) => <AdminLayout children={page} />;
