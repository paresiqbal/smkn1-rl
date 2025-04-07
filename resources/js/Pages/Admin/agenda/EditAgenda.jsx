import React, { useState, useRef, useContext, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import NotyfContext from "@/context/NotyfContext";
import AdminLayout from "@/layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Editor from "@/components/Editor";
import Delta from "quill-delta";
import ConfirmDeleteModal from "../../../components/ConfirmDeleteModal";

export default function EditAgenda() {
    const { agenda: existingAgenda } = usePage().props;
    const notyf = useContext(NotyfContext);

    const quillRef = useRef(null);
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    const [showConfirm, setShowConfirm] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const [agenda, setAgenda] = useState({
        title: existingAgenda.title || "",
        content: existingAgenda.content || "",
        start_date: existingAgenda.start_date || "",
        end_date: existingAgenda.end_date || "",
        image: null,
        existing_image: existingAgenda.image || "",
    });

    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Agenda", href: "/admin/agenda" },
        {
            label: "Edit Agenda",
            href: `/admin/agenda/${existingAgenda.id}/edit`,
        },
    ];

    useEffect(() => {
        if (quillRef.current) {
            quillRef.current.root.innerHTML = existingAgenda.content;
        }
    }, [existingAgenda.content]);

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

        const formData = new FormData();
        formData.append("title", agenda.title);
        formData.append("content", agenda.content);
        formData.append("start_date", agenda.start_date || null);
        formData.append("end_date", agenda.end_date || null);
        if (agenda.image instanceof File) {
            formData.append("image", agenda.image);
        }

        formData.append("_method", "PUT");

        setSubmitting(true);
        router.post(`/admin/agenda/${existingAgenda.id}`, formData, {
            onSuccess: () => notyf.success("Agenda berhasil diperbarui!"),
            onError: () =>
                notyf.error("Gagal memperbarui agenda. Silakan periksa input."),
            onFinish: () => setSubmitting(false),
        });
    };

    const handleDelete = () => {
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        setShowConfirm(false);
        router.delete(`/admin/agenda/${existingAgenda.id}`, {
            onSuccess: () => {
                notyf.success("Agenda berhasil dihapus!");
            },
            onError: () => {
                notyf.error("Gagal menghapus agenda.");
            },
        });
    };

    console.log("Existing image:", agenda.existing_image);

    return (
        <div className="px-6 pt-14 pb-10 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-6">
                <h1 className="text-2xl font-bold">Edit Agenda</h1>
                <p className="text-sm">Perbarui rincian agenda di bawah ini.</p>
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
                        value={agenda.title}
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
                            setAgenda((prev) => ({
                                ...prev,
                                content: quillRef.current?.root.innerHTML,
                            }))
                        }
                    />
                </div>

                <div>
                    <label className="block font-medium">Gambar</label>
                    {agenda.image ? (
                        <img
                            src={URL.createObjectURL(agenda.image)}
                            alt="Preview"
                            className="mt-2 max-w-xs rounded"
                        />
                    ) : (
                        agenda.existing_image && (
                            <img
                                src={agenda.existing_image}
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
                                required
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
                                required
                                className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                            />
                        </div>
                    </div>
                </div>

                <ConfirmDeleteModal
                    open={showConfirm}
                    onConfirm={confirmDelete}
                    onCancel={() => setShowConfirm(false)}
                    message="Apakah kamu yakin ingin menghapus agenda ini? Tindakan ini tidak bisa dibatalkan."
                />

                <div className="flex justify-between">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="dark:shadow-light shadow-dark w-1/5 cursor-pointer border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                    >
                        {submitting ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>

                    <button
                        type="button"
                        onClick={handleDelete}
                        className="dark:shadow-light shadow-dark w-1/5 cursor-pointer border-2 border-black bg-red-400 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                    >
                        Hapus Agenda
                    </button>
                </div>
            </form>
        </div>
    );
}

EditAgenda.layout = (page) => <AdminLayout children={page} />;
