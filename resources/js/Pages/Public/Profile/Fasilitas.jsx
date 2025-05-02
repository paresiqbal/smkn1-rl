import React from "react";

const facilities = [
    {
        title: "Lab Komputer TKJ",
        image: "/assets/fasilitas/computerlab.jpg",
        description:
            "Lab komputer dengan perangkat lengkap untuk praktik jaringan dan perangkat keras.",
    },
    {
        title: "Perpustakaan",
        image: "/assets/fasilitas/computerlab.jpg",
        description:
            "Perpustakaan yang nyaman dengan koleksi buku pelajaran, referensi, dan fiksi.",
    },
    {
        title: "Masjid",
        image: "/assets/fasilitas/computerlab.jpg",
        description:
            "Tempat ibadah yang digunakan oleh siswa dan guru untuk shalat berjamaah dan kegiatan rohani.",
    },
    {
        title: "Ruang Kelas Multimedia",
        image: "/assets/fasilitas/computerlab.jpg",
        description:
            "Ruang kelas dengan fasilitas multimedia seperti proyektor dan audio untuk mendukung pembelajaran interaktif.",
    },
    {
        title: "Lapangan Olahraga",
        image: "/assets/fasilitas/computerlab.jpg",
        description:
            "Lapangan serbaguna yang digunakan untuk kegiatan olahraga dan upacara.",
    },
    {
        title: "Lab OTKP",
        image: "/assets/fasilitas/computerlab.jpg",
        description:
            "Lab praktik untuk siswa jurusan OTKP dalam simulasi pekerjaan perkantoran.",
    },
    {
        title: "Kantin Sekolah",
        image: "/assets/fasilitas/computerlab.jpg",
        description:
            "Kantin yang menyediakan makanan sehat dan terjangkau untuk siswa dan guru.",
    },
];

export default function Fasilitas() {
    return (
        <div className="p-4">
            <h1 className="pb-4 text-center text-2xl font-bold lg:pb-8 lg:text-4xl">
                Fasilitas
            </h1>
            <div className="flex flex-col gap-4 lg:gap-8">
                {facilities.map((item, index) => (
                    <div
                        key={index}
                        className={`hover:shadow-dark hover:dark:shadow-light border-2 border-black p-2 lg:flex lg:items-center lg:gap-4 dark:border-white ${
                            index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover lg:w-1/4"
                        />
                        <div className="space-y-2 p-2">
                            <p className="text-xl font-bold lg:text-2xl">
                                {item.title}
                            </p>
                            <p className="text-balance text-gray-700 dark:text-gray-300">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
