import React, { useState, useRef } from "react";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import Editor from "@/components/Editor";
import Delta from "quill-delta";

// layout
import AdminLayout from "@/layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";

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

    const quillRef = useRef(null);

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
                    <label className="block font-medium">Judul</label>
                    <input
                        type="text"
                        name="title"
                        value={news.title}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>

                <div>
                    <label className="block font-medium">Konten</label>
                    <Editor
                        ref={quillRef}
                        defaultValue={new Delta()}
                        onTextChange={(delta, oldDelta, source) => {
                            setNews((prev) => ({
                                ...prev,
                                content: quillRef.current?.root.innerHTML,
                            }));
                        }}
                    />
                </div>

                <div>
                    <label className="block font-medium">Tanggal</label>
                    <input
                        type="date"
                        name="published_at"
                        value={news.published_at}
                        onChange={handleChange}
                        className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>

                <div>
                    <label className="block font-medium">Tag</label>
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
                        className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
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
                    <label className="block font-medium">Gambar</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>

                <button
                    type="submit"
                    className="dark:shadow-light shadow-dark w-full border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                >
                    Post
                </button>
            </form>
        </div>
    );
}

CreateNews.layout = (page) => <AdminLayout children={page} />;
