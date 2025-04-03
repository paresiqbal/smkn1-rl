import { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";

export function useTags() {
    const { props } = usePage(); // Get Inertia props
    const [tags, setTags] = useState(props.tags || []);
    const [loading, setLoading] = useState(!props.tags);
    const [error, setError] = useState(null);

    useEffect(() => {
        router.visit("/admin/tags", {
            method: "get",
            only: ["tags"], // Fetch only 'tags' from the response
            preserveState: true,
            onSuccess: (page) => {
                console.log("Fetched tags:", page.props.tags);
                setTags(page.props.tags || []);
                setLoading(false);
            },
            onError: (err) => {
                console.error("Error fetching tags:", err);
                setError("Failed to fetch tags");
                setLoading(false);
            },
        });
    }, []);

    return { tags, loading, error };
}
