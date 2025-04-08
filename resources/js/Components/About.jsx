import React from "react";

export default function About() {
    return (
        <section className="px-4 py-16">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Text Section */}
                    <div>
                        <h2 className="mb-6 text-3xl font-bold">
                            About{" "}
                            <span className="font-bold text-[#EFBF04]">
                                SMK Negeri 1 Rejang Lebong
                            </span>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            Didirikan pada tahun 1985,{" "}
                            <span className="font-bold text-[#EFBF04]">
                                SMK Negeri 1 Rejang Lebong
                            </span>{" "}
                            telah berkomitmen untuk menyediakan pendidikan yang
                            luar biasa selama lebih dari 35 tahun. Misi kami
                            adalah untuk memelihara keingintahuan intelektual,
                            kreativitas, dan pertumbuhan pribadi dalam
                            lingkungan yang mendukung dan menantang.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Dengan rasio siswa-guru sebesar 12:1, kami
                            memastikan perhatian yang dipersonalisasi untuk
                            setiap siswa. Kurikulum kami menggabungkan
                            ketelitian akademis tradisional dengan metode
                            pengajaran yang inovatif untuk mempersiapkan siswa
                            agar sukses di perguruan tinggi dan seterusnya.
                        </p>

                        {/* Features */}
                        <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {[
                                "Rasio Siswa-Guru 12:1",
                                "100% Penerimaan Perguruan Tinggi",
                                "25+ Kursus Penempatan Lanjutan",
                                "40+ Kegiatan Ekstrakurikuler",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2"
                                >
                                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="dark:shadow-light shadow-dark border-2 border-black bg-emerald-600 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none">
                            Pelajari Tentang Kami
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="shadow-dark dark:shadow-light relative w-full overflow-hidden rounded-lg border-2 border-black dark:border-white">
                        <img
                            src="/assets/school2.jpg"
                            alt="Students in classroom"
                            className="h-full max-h-[400px] w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
