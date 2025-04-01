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
        setNews((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);
        formData.append("published_at", values.published_at);
        formData.append("tags", values.tags);
        if (values.image) {
            formData.append("image", values.image);
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
                        value={values.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Published Date</label>
                    <input
                        type="date"
                        name="published_at"
                        value={values.published_at}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tags (comma separated)</label>
                    <input
                        type="text"
                        name="tags"
                        value={values.tags}
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
