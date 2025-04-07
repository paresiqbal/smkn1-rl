import React, { useState, useRef, useContext, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import NotyfContext from "@/context/NotyfContext";
import AdminLayout from "@/layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Editor from "@/components/Editor";
import Delta from "quill-delta";
import TagSelect from "@/components/TagSelect";

export default function EditNews() {
    const { news: existingNews, tags = [] } = usePage().props;
    const notyf = useContext(NotyfContext);

    const quillRef = useRef(null);
    const dateInputRef = useRef(null);

    const [submitting, setSubmitting] = useState(false);
    const [news, setNews] = useState({
        title: existingNews.title || "",
        content: existingNews.content || "",
        published_at: existingNews.published_at || "",
        tags: existingNews.tags?.map((tag) => tag.id) || [],
        image: null,
        existing_image: existingNews.image || "",
    });

    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Berita", href: "/admin/news" },
        { label: "Edit Berita", href: `/admin/news/${existingNews.id}/edit` },
    ];

    useEffect(() => {
        if (quillRef.current) {
            quillRef.current.root.innerHTML = existingNews.content;
        }
    }, [existingNews.content]);

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        setNews((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitting) return;

        const formData = new FormData();
        formData.append("title", news.title);
        formData.append("content", news.content);
        formData.append("published_at", news.published_at || null);
        news.tags.forEach((tag) => formData.append("tags[]", tag));
        if (news.image instanceof File) {
            formData.append("image", news.image);
        }

        formData.append("_method", "PUT");

        setSubmitting(true);
        router.post(`/admin/news/${existingNews.id}`, formData, {
            onSuccess: () => notyf.success("Berita berhasil diperbarui!"),
            onError: () =>
                notyf.error("Gagal memperbarui berita. Silakan periksa input."),
            onFinish: () => setSubmitting(false),
        });
    };

    return (
        <div className="px-6 pt-14 pb-10 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-6">
                <h1 className="text-2xl font-bold">Edit Berita</h1>
                <p className="text-sm">Perbarui rincian berita di bawah ini.</p>
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
                        onTextChange={() =>
                            setNews((prev) => ({
                                ...prev,
                                content: quillRef.current?.root.innerHTML,
                            }))
                        }
                    />
                </div>

                <div>
                    <label className="block font-medium">Gambar</label>
                    {news.image ? (
                        <img
                            src={URL.createObjectURL(news.image)}
                            alt="Preview"
                            className="mt-2 max-w-xs rounded"
                        />
                    ) : (
                        news.existing_image && (
                            <img
                                src={news.existing_image}
                                alt="Current"
                                className="mt-2 max-w-xs rounded"
                            />
                        )
                    )}
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>

                <div>
                    <label className="block font-medium">Tag</label>
                    <TagSelect
                        options={tags}
                        value={news.tags}
                        onChange={(selectedTags) =>
                            setNews((prev) => ({ ...prev, tags: selectedTags }))
                        }
                    />
                </div>

                <div>
                    <label className="block font-medium">Tanggal Publis</label>
                    <div
                        onClick={() => dateInputRef.current?.showPicker()}
                        className="cursor-pointer"
                    >
                        <input
                            ref={dateInputRef}
                            type="date"
                            name="published_at"
                            value={news.published_at}
                            onChange={handleChange}
                            className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full border-2 border-black px-6 py-3 font-semibold transition-all focus:outline-none ${
                        submitting
                            ? "cursor-not-allowed bg-gray-300 text-gray-600"
                            : "shadow-dark dark:shadow-light bg-yellow-300 text-black hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none"
                    }`}
                >
                    {submitting ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
            </form>
        </div>
    );
}

EditNews.layout = (page) => <AdminLayout children={page} />;
