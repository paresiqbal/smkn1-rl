import { useState, useEffect } from "react";

export function useTags() {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/admin/tags", { headers: { Accept: "application/json" } })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch tags");
                }
                return response.json();
            })
            .then((data) => {
                setTags(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return { tags, loading, error };
}
