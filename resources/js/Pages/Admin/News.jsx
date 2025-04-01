import React, { useState } from "react";
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
        const formData = new FormData();
        formData.append("title", news.title);
        formData.append("content", news.content);
        formData.append("published_at", news.published_at);
        formData.append("tags", news.tags);
        if (news.image) {
            formData.append("image", news.image);
        }
        Inertia.post("/news", formData);
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
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        name="content"
                        value={news.content}
                        onChange={handleChange}
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
                    <input type="file" name="image" onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

News.layout = (page) => <AdminLayout children={page} />;
