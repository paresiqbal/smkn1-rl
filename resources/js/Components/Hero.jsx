import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <div className="relative h-[500px] w-full">
            <img
                src="/assets/school.jpg"
                alt="school"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-zinc-700/50" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                    Welcome to{" "}
                    <span className="inline-block min-w-[300px] text-yellow-300">
                        <TypeAnimation
                            sequence={[
                                "SMK Negeri 1 Rejang Lebong",
                                2000,
                                "", // clear
                                500,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            speed={50}
                            style={{ display: "inline-block" }}
                        />
                    </span>
                </h1>
                <p className="mb-6 max-w-2xl text-lg md:text-xl">
                    Memelihara pikiran, menginspirasi masa depan, dan membangun
                    pemimpin masa depan hari ini.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <button className="dark:shadow-light shadow-dark border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none">
                        Daftar Sekarang
                    </button>
                    <button className="dark:shadow-light shadow-dark border-2 border-black bg-red-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none">
                        Brosur PPDB
                    </button>
                </div>
            </div>
        </div>
    );
}
