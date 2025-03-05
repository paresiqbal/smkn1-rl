import React from "react";
import AdminLayout from "../../Layouts/AdminLayout";

function AdminDashboard() {
    return (
        <div>
            <h1> Wellcome To Admin Dashboard</h1>
            <p>Where you Manage Content</p>
        </div>
    );
}

AdminDashboard.layout = (page) => <AdminLayout children={page} />;

export default AdminDashboard;
