import React, { useContext, useState } from "react";
import { router } from "@inertiajs/react";

// layout
import AdminLayout from "../../Layouts/AdminLayout";

// context
import NotyfContext from "@/context/NotyfContext";

export default function Tags({ tags }) {
    const notyf = useContext(NotyfContext);
    const [tagName, setTagName] = useState("");

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        router.post(
            "/admin/tags",
            { name: tagName },
            {
                onSuccess: () => {
                    setTagName("");
                    notyf.success("Tag Berhasil Ditambah!");
                },
            },
        );
    }

    // Handle tag deletion
    function handleDelete(id) {
        router.delete(`/admin/tags/${id}`, {
            preserveUrl: true,
            onSuccess: () => {
                notyf.success("Tag Berhasil Dihapus!");
            },
        });
    }

    return (
        <div className="max-w-3xl px-6 pt-14 md:pt-0">
            <h1 className="mb-4 text-3xl font-bold">Tags Manager</h1>
            <p className="mb-6">
                Buat Tags untuk Berita, Pengumuman, Agenda dan Lainnya.
                Tambahkan tag dengan mengetik dan menekan Enter atau mengklik
                Tambah.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mb-6 flex max-w-lg gap-3">
                <input
                    type="text"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    placeholder="Masukkan nama tag"
                    required
                    className="flex-1 border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                />
                <button
                    type="submit"
                    className="dark:shadow-light shadow-dark border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                >
                    Tambah Tag
                </button>
            </form>

            {/* Tags List */}
            <ul className="space-y-3">
                {tags.map((tag) => (
                    <li
                        key={tag.id}
                        className="flex items-center justify-between rounded-md bg-red-100 p-3 dark:bg-gray-800"
                    >
                        <span className="font-semibold">{tag.name}</span>
                        <button
                            onClick={() => handleDelete(tag.id)}
                            className="dark:shadow-light shadow-dark border-2 border-black bg-red-400 px-6 py-1 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                        >
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Tags.layout = (page) => <AdminLayout children={page} />;
