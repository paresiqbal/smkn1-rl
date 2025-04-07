import React, { useState, useRef, useContext } from "react";
import { router } from "@inertiajs/react";

// lib
import Delta from "quill-delta";

// Context
import NotyfContext from "@/context/NotyfContext";

// Layout & Components
import AdminLayout from "@/layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";

// components
import Editor from "@/components/Editor";

export default function CreateAgenda() {
    const notyf = useContext(NotyfContext);

    const quillRef = useRef(null);
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    const [submitting, setSubmitting] = useState(false);
    const [agenda, setAgenda] = useState({
        title: "",
        content: "",
        start_date: "",
        end_date: "",
        image: null,
    });

    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Agenda", href: "/admin/agenda" },
        { label: "Buat Agenda", href: "/admin/agenda/create" },
    ];

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        setAgenda((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (submitting) return;

        if (!agenda.title || !agenda.content) {
            notyf.error("Judul dan Konten wajib diisi!");
            return;
        }

        if (agenda.image) {
            const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
            if (!allowedTypes.includes(agenda.image.type)) {
                notyf.error("Format gambar harus JPG, PNG, atau WEBP.");
                return;
            }

            const maxSize = 2 * 1024 * 1024; // 2MB
            if (agenda.image.size > maxSize) {
                notyf.error("Ukuran gambar maksimal 2MB.");
                return;
            }
        }

        const formData = new FormData();
        formData.append("title", agenda.title);
        formData.append("content", agenda.content);
        formData.append("start_date", agenda.start_date || null);
        formData.append("end_date", agenda.end_date || null);
        if (agenda.image instanceof File) {
            formData.append("image", agenda.image);
        }

        setSubmitting(true);

        router.post("/admin/agenda/store", formData, {
            onSuccess: () => {
                notyf.success("Agenda berhasil dibuat!");

                setAgenda({
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
                    "Gagal membuat agenda. Silakan periksa input Anda.",
                );
            },
            onFinish: () => setSubmitting(false),
        });
    };

    return (
        <div className="px-6 pt-14 pb-10 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-6">
                <h1 className="text-2xl font-bold">Buat Agenda Baru</h1>
                <p className="text-sm">
                    Isi rincian untuk membuat agenda baru. Semua kolom wajib
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
                        value={agenda.title}
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
                            setAgenda((prev) => ({
                                ...prev,
                                content: quillRef.current?.root.innerHTML,
                            }));
                        }}
                    />
                </div>

                {/* Gambar */}
                <div>
                    <label className="block font-medium">Gambar</label>
                    {agenda.image && (
                        <img
                            src={URL.createObjectURL(agenda.image)}
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

                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="block font-medium">
                            Tanggal Mulai
                        </label>
                        <div
                            onClick={() => startDateRef.current?.showPicker()}
                            className="cursor-pointer"
                        >
                            <input
                                ref={startDateRef}
                                type="date"
                                name="start_date"
                                value={agenda.start_date}
                                onChange={handleChange}
                                className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium">
                            Tanggal Selesai
                        </label>
                        <div
                            onClick={() => endDateRef.current?.showPicker()}
                            className="cursor-pointer"
                        >
                            <input
                                ref={endDateRef}
                                type="date"
                                name="end_date"
                                value={agenda.end_date}
                                onChange={handleChange}
                                className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                            />
                        </div>
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

CreateAgenda.layout = (page) => <AdminLayout children={page} />;
