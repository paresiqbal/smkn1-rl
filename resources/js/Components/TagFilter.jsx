import React from "react";
import { router, usePage } from "@inertiajs/react";

export default function TagFilter() {
    const { tags } = usePage().props;
    const selectedTag = new URLSearchParams(window.location.search).get("tag");

    const handleTagClick = (tagId) => {
        router.get(router("news.list"), { tag: tagId });
    };

    return (
        <div className="mt-8 text-sm text-gray-700">
            <div className="flex flex-wrap gap-2">
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
