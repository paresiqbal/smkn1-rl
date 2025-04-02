import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";

export default function Tags() {
    return (
        <div>
            <h1>Tags</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                qui facere quae minus necessitatibus laborum inventore!
                Laboriosam sit magnam facere.
            </p>
        </div>
    );
}

Tags.layout = (page) => <AdminLayout children={page} />;
