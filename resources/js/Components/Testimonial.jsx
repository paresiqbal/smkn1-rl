import React from "react";

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        role: "Orang tua Siswa Kelas 10",
        message:
            "Para guru di SMK Negeri 1 Rejang Lebong benar-benar peduli terhadap keberhasilan setiap siswa. Putri saya telah berkembang pesat secara akademis dan sosial sejak mendaftar di sini tiga tahun lalu.",
    },
    {
        id: 2,
        name: "Michael Smith",
        role: "Alumni Angkatan 2022",
        message:
            "Waktu saya di SMK Negeri 1 Rejang Lebong mempersiapkan saya dengan sangat baik untuk kuliah. Pendidikan yang ketat dan lingkungan yang mendukung membantu saya mengembangkan keterampilan yang saya gunakan setiap hari dalam studi universitas saya.",
    },
    {
        id: 3,
        name: "Lisa Johnson",
        role: "Siswa Kelas 12 Saat Ini",
        message:
            "Saya menyukai kesempatan yang tersedia di SMK Negeri 1 Rejang Lebong. Dari kursus tingkat lanjut hingga klub dan olahraga, ada sesuatu untuk semua orang. Para guru menantang kami sambil memberikan dukungan yang kami butuhkan untuk berhasil.",
    },
];

function getInitials(name) {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

export default function Testimonial() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold">
                        Apa Kata Komunitas Kami
                    </h2>
                    <p className="text-muted-foreground mx-auto max-w-2xl">
                        Dengarkan pengalaman siswa, orang tua, dan alumni kami
                        di SMK Negeri 1 Rejang Lebong.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="shadow-dark dark:shadow-light rounded-lg border-2 border-black bg-white p-6 dark:border-white dark:bg-neutral-900"
                        >
                            <div className="mb-4 flex items-center">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                    <span className="font-bold text-emerald-600">
                                        {getInitials(testimonial.name)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground italic">
                                "{testimonial.message}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
