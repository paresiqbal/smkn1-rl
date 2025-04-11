import { Book, EyeIcon, Target } from "lucide-react";
import React from "react";

export default function VisiMisi() {
    return (
        <div className="space-y-6 p-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold lg:text-5xl">
                    SMK Negeri 1 Rejang Lebong
                </h1>
                <p className="text-base text-gray-700 md:text-lg dark:text-white">
                    Visi & Misi
                </p>
            </div>

            <section className="flex flex-col space-y-4 lg:flex-row lg:space-x-4">
                <div className="shadow-dark border-2 border-black p-4 lg:p-6 dark:border-white dark:shadow-white">
                    <div className="flex items-center space-x-2 border-2 border-black bg-red-400 p-2 dark:border-white dark:bg-red-500/80">
                        <EyeIcon className="h-6 w-6" />
                        <h2 className="text-xl font-semibold">Visi Kami</h2>
                    </div>
                    <p className="mt-2">
                        Menjadi sekolah unggul dalam teknologi dan karakter,
                        berwawasan global dan berakar pada budaya bangsa.
                    </p>
                </div>

                <div className="shadow-dark border-2 border-black p-4 lg:p-6 dark:border-white dark:shadow-white">
                    <div className="flex items-center space-x-2 border-2 border-black bg-red-400 p-2 dark:border-white dark:bg-red-500/80">
                        <Book className="h-6 w-6" />
                        <h2 className="text-xl font-semibold">Misi Kami</h2>
                    </div>
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

                <div className="shadow-dark border-2 border-black p-4 lg:p-6 dark:border-white dark:shadow-white">
                    <div className="flex items-center space-x-2 border-2 border-black bg-red-400 p-2 dark:border-white dark:bg-red-500/80">
                        <Target className="h-6 w-6" />
                        <h2 className="text-xl font-semibold">Tujuan Kami</h2>
                    </div>
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

            <div className="shadow-dark border-2 border-black bg-emerald-200 p-4 text-zinc-900 italic dark:border-white dark:shadow-white">
                <p>
                    "Education is the passport to the future, for tomorrow
                    belongs to those who prepare for it today."
                </p>
                <p>— Malcolm X</p>
            </div>

            <div className="pt-8 text-center">
                <p className="pb-4 text-2xl font-semibold lg:text-3xl">
                    Bergabunglah dengan kami dalam membentuk masa depan
                </p>
                <p className="text-sm lg:text-xl">
                    SMK Negeri 1 Rejang Lebong, berkomitmen untuk memelihara
                    generasi berikutnya para pemimpin, pemikir, dan pelaku.
                    Bersama-sama, kita bisa membuat perbedaan.
                </p>
            </div>

            <div className="flex justify-center p-6">
                <button className="dark:shadow-light shadow-dark border-2 border-black bg-red-400 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none">
                    Daftar Sekarang
                </button>
            </div>
        </div>
    );
}
