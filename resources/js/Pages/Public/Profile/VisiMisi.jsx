import React from "react";

export default function VisiMisi() {
    return (
        <div className="space-y-6 p-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold">
                    SMK Negeri 1 Rejang Lebong
                </h1>
                <p className="text-lg text-gray-600">Visi & Misi</p>
            </div>

            <section className="space-y-4">
                <div>
                    <h2 className="text-xl font-semibold">Visi Kami</h2>
                    <p className="mt-2">
                        Menjadi sekolah unggul dalam teknologi dan karakter,
                        berwawasan global dan berakar pada budaya bangsa.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Misi Kami</h2>
                    <ol className="mt-2 list-inside list-decimal space-y-1">
                        <li>
                            Mewujudkan pendidik dan tenaga kependidikan yang
                            mampu memanfaatkan teknologi terkini dan
                            profesional.
                        </li>
                        <li>
                            Mewujudkan proses pembelajaran yang berkualitas dan
                            terintegrasi untuk membentuk karakter siswa.
                        </li>
                        <li>
                            Menumbuhkan lingkungan belajar yang kreatif dan
                            inovatif bagi siswa.
                        </li>
                        <li>
                            Mewujudkan sarana prasarana berstandar industri dan
                            berwawasan lingkungan.
                        </li>
                        <li>
                            Mengembangkan kerjasama yang luas dan bermakna
                            dengan dunia kerja nasional dan internasional.
                        </li>
                    </ol>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Tujuan Kami</h2>
                    <ol className="mt-2 list-inside list-decimal space-y-1">
                        <li>
                            Menjadikan pendidik dan tenaga kependidikan yang
                            berkarakter dan berdedikasi.
                        </li>
                        <li>
                            Meningkatkan kompetensi pendidik dan tenaga
                            kependidikan sesuai dengan perkembangan teknologi.
                        </li>
                        <li>
                            Menjadikan pendidik dan tenaga kependidikan yang
                            mampu bekerja dengan menggunakan teknologi
                            informasi.
                        </li>
                        <li>
                            Menerapkan pembelajaran yang berpihak kepada siswa.
                        </li>
                        <li>
                            Membentuk siswa yang bisa berwirausaha secara
                            nasional dan internasional.
                        </li>
                    </ol>
                </div>
            </section>

            <div className="text-gray-500 italic">
                <p>
                    "Education is the passport to the future, for tomorrow
                    belongs to those who prepare for it today."
                </p>
                <p>— Malcolm X</p>
            </div>

            <div>
                <p className="font-semibold">
                    Bergabunglah dengan kami dalam membentuk masa depan
                </p>
                <p>
                    SMK Negeri 1 Rejang Lebong, berkomitmen untuk memelihara
                    generasi berikutnya para pemimpin, pemikir, dan pelaku.
                    Bersama-sama, kita bisa membuat perbedaan.
                </p>
            </div>

            <button className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                Daftar Sekarang
            </button>
        </div>
    );
}
