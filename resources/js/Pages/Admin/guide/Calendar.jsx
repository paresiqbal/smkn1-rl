import React, { useState, useContext } from "react";
import { router } from "@inertiajs/react";

// Context
import NotyfContext from "@/context/NotyfContext";

// Layout & Components
import AdminLayout from "@/layouts/AdminLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function CreateCalendar() {
    const notyf = useContext(NotyfContext);

    const [calendar, setCalendar] = useState({
        year: "",
        image: null,
    });
    const [submitting, setSubmitting] = useState(false);

    const breadcrumbItems = [
        { label: "Home", href: "/admin/dashboard" },
        { label: "Kalender", href: "/admin/guide/calendar" },
        { label: "Upload Kalender", href: "/admin/guide/calendar/create" },
    ];

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;
        setCalendar((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitting) return;

        if (!calendar.year || !calendar.image) {
            notyf.error("Tahun dan gambar wajib diisi.");
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
        if (!allowedTypes.includes(calendar.image.type)) {
            notyf.error("Format gambar harus JPG, PNG, atau WEBP.");
            return;
        }

        const maxSize = 2 * 1024 * 1024;
        if (calendar.image.size > maxSize) {
            notyf.error("Ukuran gambar maksimal 2MB.");
            return;
        }

        const formData = new FormData();
        formData.append("year", calendar.year);
        formData.append("image", calendar.image);

        setSubmitting(true);

        router.post("/admin/guide/calendar", formData, {
            onSuccess: () => {
                notyf.success("Kalender berhasil diunggah!");
                setCalendar({ year: "", image: null });
            },
            onError: () => notyf.error("Gagal mengunggah kalender."),
            onFinish: () => setSubmitting(false),
        });
    };

    return (
        <div className="px-6 pt-14 pb-10 md:pt-0">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="pb-6 text-2xl font-bold">
                Upload Kalender Akademik
            </h1>

            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="space-y-4"
            >
                {/* Tahun */}
                <div>
                    <label className="block font-medium">Tahun</label>
                    <input
                        type="number"
                        name="year"
                        value={calendar.year}
                        onChange={handleChange}
                        min="1900"
                        max="2100"
                        required
                        className="w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                    />
                </div>

                {/* Gambar */}
                <div>
                    <label className="block font-medium">Gambar Kalender</label>
                    {calendar.image && (
                        <img
                            src={URL.createObjectURL(calendar.image)}
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
        </div>
    );
}

CreateCalendar.layout = (page) => <AdminLayout children={page} />;
