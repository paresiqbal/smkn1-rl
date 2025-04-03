import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

// layout
import AdminLayout from "../../../Layouts/AdminLayout";
import Breadcrumb from "../../../components/Breadcrumb";

export default function CreateNews() {
    const { tags = [] } = usePage().props;
    const [news, setNews] = useState({
        title: "",
        content: "",
        published_at: "",
        tags: [],
        image: null,
    });

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "News", href: "/admin/news" },
    ];

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
        <div className="px-6 pt-14 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-6">
                <h1 className="text-2xl font-bold">Buat Berita Baru</h1>
                <p className="text-sm">
                    Isi rincian untuk membuat berita baru. Semua kolom wajib
                    diisi.
                </p>
            </div>
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
                        className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>
                <div>
                    <label className="block font-medium">Content</label>
                    <textarea
                        name="content"
                        value={news.content}
                        onChange={handleChange}
                        required
                        className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>
                <div>
                    <label className="block font-medium">Published Date</label>
                    <input
                        type="date"
                        name="published_at"
                        value={news.published_at}
                        onChange={handleChange}
                        className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
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
                        className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    >
                        {tags.length > 0 ? (
                            tags.map((tag) => (
                                <option key={tag.id} value={tag.name}>
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
                        className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
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

CreateNews.layout = (page) => <AdminLayout children={page} />;
