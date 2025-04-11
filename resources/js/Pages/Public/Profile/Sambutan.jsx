import React from "react";

export default function Sambutan() {
    return (
        <div className="mx-auto max-w-4xl space-y-6 p-6">
            <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                    src="/assets/asep2.jpg"
                    alt="Kepala Sekolah"
                    className="h-72 w-full object-cover md:h-96"
                />
            </div>

            <div className="space-y-4 rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
                <h1 className="text-center text-2xl font-bold text-blue-700 md:text-3xl">
                    Sambutan Kepala Sekolah
                </h1>

                <p className="text-justify leading-relaxed text-gray-800 dark:text-gray-300">
                    Assalamualaikum Warahmatullah Wabarakatuh. Alhamdulillah,
                    kami bersyukur kepada Allah SWT karena dengan rahmat dan
                    karunia-Nya, akhirnya kami dapat memperbarui Website SMK
                    Negeri 1 Rejang Lebong. Kami dengan tulus menyambut Anda di
                    Website SMK Negeri 1 Rejang Lebong ini, yang ditujukan untuk
                    semua unsur pimpinan, guru, karyawan, siswa, dan masyarakat
                    umum. Melalui website ini, kami berharap semua pihak dapat
                    mengakses informasi mengenai profil sekolah, kegiatan, dan
                    fasilitas kami.
                </p>

                <p className="text-justify leading-relaxed text-gray-800 dark:text-gray-300">
                    Sebagai pimpinan sekolah, kami juga ingin menyampaikan
                    terima kasih kepada tim pembuat website ini yang telah
                    berusaha keras untuk memperkenalkan segala hal yang dimiliki
                    oleh sekolah kami. Tentu saja, website sekolah kami masih
                    memiliki kekurangan. Oleh karena itu, kami mengharapkan
                    masukan dan kritik yang membangun dari seluruh civitas
                    akademika dan masyarakat umum untuk kemajuan Website SMK
                    Negeri 1 Rejang Lebong ke depannya.
                </p>

                <p className="text-justify leading-relaxed text-gray-800 dark:text-gray-300">
                    Kami berkomitmen untuk terus meningkatkan kualitas dan
                    mengatasi kelemahan-kelemahan yang ada. Kami berharap
                    Website SMK Negeri 1 Rejang Lebong dapat menjadi wadah
                    interaksi yang positif, baik antar civitas akademika maupun
                    masyarakat umum. Melalui website ini, kami ingin menjalin
                    silaturahmi yang erat di antara semua unsur.
                </p>

                <blockquote className="border-l-4 border-blue-500 pl-4 text-lg font-semibold text-blue-700 italic">
                    “SMK BISA - SMK HEBAT - VOKASI KUAT - MENGUATKAN INDONESIA”
                </blockquote>

                <p className="text-justify leading-relaxed text-gray-800 dark:text-gray-300">
                    Mari kita bekerja dan berkarya dengan harapan ridho dari
                    Allah SWT dan keikhlasan yang tulus dalam hati, demi
                    kemajuan anak bangsa. Mari kita bersama-sama mencapai
                    prestasi yang gemilang dan mendukung perkembangan pendidikan
                    di Indonesia.
                </p>

                <p className="mt-4 text-right text-sm text-gray-600 italic dark:text-gray-400">
                    Wassalammualaikum Warahmatullah Wabarakatuh
                    <br />
                    <span className="font-bold text-gray-800 dark:text-white">
                        Dr. Asep Suparman, M.Pd.
                    </span>
                    <br />
                    Kepala Sekolah
                </p>
            </div>
        </div>
    );
}
