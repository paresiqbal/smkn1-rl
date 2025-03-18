import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";

export default function AdminDashboard() {
    return (
        <div>
            <h1> Wellcome To Admin Dashboard</h1>
            <p>Where you Manage Content</p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                nisi laborum laudantium eaque exercitationem officia, repellat
                officiis tempora alias perspiciatis.
            </p>
        </div>
    );
}

AdminDashboard.layout = (page) => <AdminLayout children={page} />;
