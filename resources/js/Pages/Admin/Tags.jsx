import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import AdminLayout from "../../Layouts/AdminLayout";

export default function Tags({ message, tags }) {
    const [tagName, setTagName] = useState("");

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        router.post(
            "/admin/tags/store",
            { name: tagName },
            {
                onSuccess: () => setTagName(""),
            },
        );
    }

    // Handle tag deletion
    function handleDelete(id) {
        router.delete(`/admin/tags/${id}`, {
            onSuccess: () => {
                alert(message);
            },
        });
    }

    return (
        <div>
            <h1>Manage Tags</h1>

            {/* Display success message */}
            {message && <div className="alert alert-success">{message}</div>}

            {/* Tag Creation Form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    placeholder="Enter tag name"
                    required
                />
                <button type="submit">Add Tag</button>
            </form>

            {/* Tags List */}
            <ul>
                {tags.map((tag) => (
                    <li key={tag.id}>
                        {tag.name}
                        <button onClick={() => handleDelete(tag.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Tags.layout = (page) => <AdminLayout children={page} />;
