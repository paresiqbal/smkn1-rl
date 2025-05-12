import React, { useState, useContext } from "react";
import { router, usePage } from "@inertiajs/react";

// Layout & Components
import AdminLayout from "@/layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";

// Context
import NotyfContext from "@/context/NotyfContext";

export default function Calendar() {
    const notyf = useContext(NotyfContext);
    const { calendar } = usePage().props;

    const [form, setForm] = useState({
        year: "",
        image: null,
    });
    const [submitting, setSubmitting] = useState(false);

    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Kalender", href: "/admin/guide/calendar" },
    ];

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitting) return;

        if (!form.year || !form.image) {
            notyf.error("Tahun dan gambar wajib diisi.");
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        if (!allowedTypes.includes(form.image.type)) {
            notyf.error("Format gambar harus JPG, PNG, atau WEBP.");
            return;
        }

        if (form.image.size > 2 * 1024 * 1024) {
            notyf.error("Ukuran gambar maksimal 2MB.");
            return;
        }

        const formData = new FormData();
        formData.append("year", form.year);
        formData.append("image", form.image);

        setSubmitting(true);

        router.post("/admin/guide/calendar", formData, {
            onSuccess: () => {
                notyf.success("Kalender berhasil diunggah!");
                setForm({ year: "", image: null });
            },
            onError: () => notyf.error("Gagal mengunggah kalender."),
            onFinish: () => setSubmitting(false),
            preserveScroll: true,
        });
    };

    return (
        <div className="max-w-3xl px-6 pt-14 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="pb-6 text-2xl font-bold">Manajemen Kalender</h1>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="mb-6 space-y-4"
            >
                <div>
                    <label className="block font-medium">Tahun</label>
                    <input
                        type="number"
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                        min="1900"
                        max="2100"
                        required
                        className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>

                <div>
                    <label className="block font-medium">Gambar Kalender</label>
                    {form.image && (
                        <img
                            src={URL.createObjectURL(form.image)}
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

                <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full border-2 border-black px-6 py-3 font-semibold transition-all focus:outline-none ${
                        submitting
                            ? "cursor-not-allowed bg-gray-300 text-gray-600"
                            : "shadow-dark dark:shadow-light cursor-pointer bg-yellow-300 text-black hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none"
                    }`}
                >
                    {submitting ? "Mengunggah..." : "Upload"}
                </button>
            </form>

            {/* Calendar List */}
            <div className="grid gap-6 md:grid-cols-2">
                {calendar.length > 0 ? (
                    calendar.map((item) => (
                        <div
                            key={item.id}
                            className="rounded border bg-gray-100 p-4 dark:bg-gray-800"
                        >
                            <button>x</button>
                            <p className="font-semibold">Tahun: {item.year}</p>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={`Kalender ${item.year}`}
                                    className="mt-2 max-w-full rounded"
                                />
                            )}
                        </div>
                    ))
                ) : (
                    <p>Tidak ada kalender.</p>
                )}
            </div>
        </div>
    );
}

Calendar.layout = (page) => <AdminLayout children={page} />;
