import React from "react";
import { router, usePage } from "@inertiajs/react";
import route from "ziggy-js";

export default function TagFilter() {
    const { tags } = usePage().props;
    const selectedTag = new URLSearchParams(window.location.search).get("tag");

    const handleTagClick = (tagId) => {
        router.get(route("news.list"), { tag: tagId });
    };

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <button
                    key={tag.id}
                    onClick={() => handleTagClick(tag.id)}
                    className={`rounded-full px-3 py-1 text-sm ${
                        parseInt(selectedTag) === tag.id
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                    }`}
                >
                    {tag.name}
                </button>
            ))}
        </div>
    );
}
