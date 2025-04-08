import React from "react";

export default function AcademicProgram() {
    const programs = [
        {
            title: "Magang",
            desc: "Program magang kami memberikan pengalaman praktis yang berharga, mempersiapkan siswa untuk dunia kerja.",
            image: "/assets/workshop.jpg",
        },
        {
            title: "Ausbildung",
            desc: "Program Ausbildung kami memberikan siswa keterampilan praktis dan pengetahuan untuk sukses di dunia kerja.",
            image: "/assets/german.jpg",
        },
        {
            title: "Specified Skilled Worker",
            desc: "Program Specified Skilled Worker kami dirancang untuk mempersiapkan siswa untuk bekerja di Jepang, dengan fokus pada keterampilan praktis dan bahasa Jepang.",
            image: "/assets/japan.jpg",
        },
    ];

    return (
        <section className="bg-red-50 py-16 dark:bg-gray-900">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold">
                            Program Akademik Kami
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl">
                            SMK Negeri 1 Rejang Lebong menawarkan program
                            pendidikan komprehensif mulai dari sekolah dasar
                            hingga sekolah menengah atas, yang dirancang untuk
                            menantang dan menginspirasi siswa di setiap
                            tingkatan.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="flex flex-col overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
                            >
                                <div className="relative mb-4 h-48">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="h-full w-full rounded-md object-cover"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col justify-between">
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">
                                            {program.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {program.desc}
                                        </p>
                                    </div>
                                    <button className="mt-4 border-2 border-black bg-emerald-600 px-4 py-2 text-sm font-semibold text-black transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none">
                                        Pelajari Lebih Lanjut
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
