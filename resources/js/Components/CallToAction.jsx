import React from "react";

export default function CallToAction() {
    return (
        <section className="w-full bg-yellow-600 py-16 text-white">
            <div className="mx-auto max-w-screen-xl px-4 text-center lg:px-24">
                <h2 className="mb-4 text-3xl font-bold">
                    Bergabunglah dengan SMK Negeri 1 Rejang Lebong
                </h2>
                <p className="mx-auto mb-8 max-w-2xl">
                    Ambil langkah pertama untuk memberikan anak Anda pengalaman
                    pendidikan yang luar biasa. Pendaftaran untuk tahun ajaran
                    mendatang kini telah dibuka.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button className="dark:shadow-light shadow-dark border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none">
                        Daftar Sekarang
                    </button>
                    <button className="dark:shadow-light shadow-dark border-2 border-black bg-red-400 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none">
                        Jadwalkan Tur
                    </button>
                </div>
            </div>
        </section>
    );
}
