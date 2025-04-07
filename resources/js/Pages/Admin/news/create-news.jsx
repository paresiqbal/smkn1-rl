import React, { useState, useRef, useContext } from "react";
import { router, usePage } from "@inertiajs/react";

// Context
import NotyfContext from "@/context/NotyfContext";

// Layout & Components
import AdminLayout from "@/layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Editor from "@/components/Editor";
import Delta from "quill-delta";
import TagSelect from "@/components/TagSelect";

export default function CreateNews() {
    const { tags = [] } = usePage().props;
    const notyf = useContext(NotyfContext);

    const quillRef = useRef(null);
    const dateInputRef = useRef(null);

    const [submitting, setSubmitting] = useState(false);
    const [news, setNews] = useState({
        title: "",
        content: "",
        published_at: "",
        tags: [],
        image: null,
    });

    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Berita", href: "/admin/news" },
        { label: "Buat Berita", href: "/admin/news/create" },
    ];

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

        if (!news.title || !news.content) {
            notyf.error("Judul dan Konten wajib diisi!");
            return;
        }

        if (news.image) {
            const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
            if (!allowedTypes.includes(news.image.type)) {
                notyf.error("Format gambar harus JPG, PNG, atau WEBP.");
                return;
            }

            const maxSize = 2 * 1024 * 1024; // 2MB
            if (news.image.size > maxSize) {
                notyf.error("Ukuran gambar maksimal 2MB.");
                return;
            }
        }

        const formData = new FormData();
        formData.append("title", news.title);
        formData.append("content", news.content);
        formData.append("published_at", news.published_at || null);
        news.tags.forEach((tag) => formData.append("tags[]", tag));
        if (news.image instanceof File) {
            formData.append("image", news.image);
        }

        setSubmitting(true);

        router.post("/admin/news/store", formData, {
            onSuccess: () => {
                notyf.success("Berita berhasil dibuat!");

                setNews({
                    title: "",
                    content: "",
                    published_at: "",
                    tags: [],
                    image: null,
                });

                if (quillRef.current) {
                    quillRef.current.setContents(new Delta());
                }
            },
            onError: () => {
                notyf.error(
                    "Gagal membuat berita. Silakan periksa input Anda.",
                );
            },
            onFinish: () => setSubmitting(false),
        });
    };

    return (
        <div className="px-6 pt-14 pb-10 md:pt-0">
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
                {/* Judul */}
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

                {/* Konten */}
                <div>
                    <label className="block font-medium">Konten</label>
                    <Editor
                        ref={quillRef}
                        defaultValue={new Delta()}
                        onTextChange={() => {
                            setNews((prev) => ({
                                ...prev,
                                content: quillRef.current?.root.innerHTML,
                            }));
                        }}
                    />
                </div>

                {/* Gambar */}
                <div>
                    <label className="block font-medium">Gambar</label>
                    {news.image && (
                        <img
                            src={URL.createObjectURL(news.image)}
                            alt="Preview"
                            className="mt-2 max-w-xs rounded"
                        />
                    )}
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>

                {/* Tag */}
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

                {/* Tanggal Publis */}
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

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full border-2 border-black px-6 py-3 font-semibold transition-all focus:outline-none ${
                        submitting
                            ? "cursor-not-allowed bg-gray-300 text-gray-600"
                            : "shadow-dark dark:shadow-light cursor-pointer bg-yellow-300 text-black hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none"
                    }`}
                >
                    {submitting ? "Menyimpan..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

CreateNews.layout = (page) => <AdminLayout children={page} />;
