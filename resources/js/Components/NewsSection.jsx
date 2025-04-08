import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function NewsSection() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetch("/news-preview", {
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setNewsList(data))
            .catch((error) => console.error("Error fetching news:", error));
    }, []);

    return (
        <section className="py-16">
            <div className="container">
                <div className="mb-12 flex flex-col items-center justify-between md:flex-row">
                    <h2 className="text-3xl font-bold">
                        Berita Terbaru & Pengumuman
                    </h2>
                    <button className="dark:shadow-light shadow-dark cursor-pointer border-2 border-black bg-yellow-300 px-6 py-1.5 text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none">
                        Lihat Semua Berita
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {newsList.map((news) => (
                        <div
                            key={news.id}
                            className="shadow-dark dark:shadow-light overflow-hidden rounded-lg border-2 border-black dark:border-white"
                        >
                            <div className="relative h-48">
                                <img
                                    src={news.image || "/placeholder.svg"}
                                    alt={news.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-muted-foreground mb-2 text-sm">
                                    {new Date(
                                        news.published_at,
                                    ).toLocaleDateString("id-ID", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">
                                    {news.title}
                                </h3>
                                <div
                                    className="text-muted-foreground mb-4 line-clamp-3"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            news.content.length > 120
                                                ? news.content.substring(
                                                      0,
                                                      120,
                                                  ) + "..."
                                                : news.content,
                                    }}
                                />
                                <button className="mt-auto flex cursor-pointer items-center text-sm text-red-400 hover:underline">
                                    Baca selengkapnya
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
