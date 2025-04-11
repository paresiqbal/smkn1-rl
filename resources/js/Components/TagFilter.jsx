import React from "react";
import { router, usePage } from "@inertiajs/react";

export default function TagFilter() {
    const { tags } = usePage().props;
    const selectedTag = new URLSearchParams(window.location.search).get("tag");

    const handleTagClick = (tagId) => {
        // Use string path directly, since you're not using Ziggy
        router.get("/article/news-list", { tag: tagId });
    };

    return (
        <div className="mt-8 text-sm text-gray-700">
            <div className="flex flex-wrap gap-2">
                {/* Optional: "All" button to reset */}
                <button
                    onClick={() => router.get("/article/news-list")}
                    className={`shadow-input-dark dark:shadow-input-light border-2 border-black px-3 py-1 text-sm dark:border-white ${
                        !selectedTag
                            ? "bg-black text-white"
                            : "bg-gray-300 text-black"
                    }`}
                >
                    Semua
                </button>

                {tags.map((tag) => (
                    <button
                        key={tag.id}
                        onClick={() => handleTagClick(tag.id)}
                        className={`shadow-input-dark dark:shadow-input-light border-2 border-black px-3 py-1 text-sm dark:border-white ${
                            parseInt(selectedTag) === tag.id
                                ? "bg-black text-white"
                                : "bg-gray-300 text-black"
                        }`}
                    >
                        {tag.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
