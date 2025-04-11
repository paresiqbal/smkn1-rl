import React from "react";

export default function Sambutan() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 px-4 py-8 lg:px-8">
            <h1 className="text-center text-2xl font-bold md:text-3xl">
                Sambutan Kepala Sekolah
            </h1>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                {/* Image */}
                <div className="lg:w-1/2">
                    <div className="h-full overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="/assets/asep2.jpg"
                            alt="Kepala Sekolah"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="space-y-4 text-justify leading-relaxed text-gray-800 lg:w-1/2 dark:text-gray-300">
                    <p>
                        Assalamualaikum Warahmatullah Wabarakatuh.
                        Alhamdulillah, kami bersyukur kepada Allah SWT karena
                        dengan rahmat dan karunia-Nya, akhirnya kami dapat
                        memperbarui Website SMK Negeri 1 Rejang Lebong...
                    </p>

                    <p>
                        Sebagai pimpinan sekolah, kami juga ingin menyampaikan
                        terima kasih kepada tim pembuat website ini yang telah
                        berusaha keras untuk memperkenalkan segala hal yang
                        dimiliki oleh sekolah kami...
                    </p>

                    <p>
                        Kami berkomitmen untuk terus meningkatkan kualitas dan
                        mengatasi kelemahan-kelemahan yang ada...
                    </p>

                    <blockquote className="border-l-4 border-red-600 pl-4 text-lg font-semibold text-red-400 italic">
                        “SMK BISA - SMK HEBAT - VOKASI KUAT - MENGUATKAN
                        INDONESIA”
                    </blockquote>

                    <p>
                        Mari kita bekerja dan berkarya dengan harapan ridho dari
                        Allah SWT dan keikhlasan yang tulus dalam hati, demi
                        kemajuan anak bangsa...
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
        </div>
    );
}
