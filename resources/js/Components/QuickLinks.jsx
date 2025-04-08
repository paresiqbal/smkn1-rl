import {
    BookOpen,
    Calendar,
    ChevronRight,
    GraduationCap,
    Users,
} from "lucide-react";
import React from "react";

export default function QuickLinks() {
    const links = [
        {
            icon: <Calendar className="h-6 w-6 text-emerald-600" />,
            title: "Kalender Sekolah",
            desc: "Lihat acara mendatang, hari libur, dan tanggal penting",
            btn: "Lihat Kalender",
        },
        {
            icon: <BookOpen className="h-6 w-6 text-emerald-600" />,
            title: "Kurikulum",
            desc: "Jelajahi program akademik kami yang komprehensif",
            btn: "Pelajari Kurikulum",
        },
        {
            icon: <Users className="h-6 w-6 text-emerald-600" />,
            title: "Jurusan",
            desc: "Lihat berbagai jurusan yang kami tawarkan",
            btn: "Lihat Jurusan",
        },
        {
            icon: <GraduationCap className="h-6 w-6 text-emerald-600" />,
            title: "Pendaftaran",
            desc: "Daftar untuk tahun ajaran baru dan bergabunglah dengan kami",
            btn: "Daftar Sekarang",
        },
    ];

    return (
        <section className="w-full py-12">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {links.map((item, idx) => (
                        <div
                            key={idx}
                            className="shadow-dark dark:shadow-light flex flex-col items-center rounded-lg border-2 border-black bg-white p-5 text-center dark:border-white dark:bg-zinc-800"
                        >
                            <div className="mb-3 rounded-full bg-emerald-100 p-2">
                                {item.icon}
                            </div>
                            <h3 className="mb-1 text-base font-semibold">
                                {item.title}
                            </h3>
                            <p className="mb-3 text-sm">{item.desc}</p>
                            <button className="mt-auto flex cursor-pointer items-center text-sm text-emerald-600 hover:underline">
                                {item.btn}
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
