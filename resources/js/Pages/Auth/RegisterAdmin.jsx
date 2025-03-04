import React from "react";
import { useForm } from "@inertiajs/react";

export default function RegisterAdmin() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/register-admin");
    };

    return (
        <div className="container border-4 border-black p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">
                Daftar Akun Admin
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <label htmlFor="name" className="block mb-2">
                        Nama
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        required
                        className="w-full border-black border-2 p-2.5"
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                    )}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="email" className="block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                        className="w-full border-black border-2 p-2.5"
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                    )}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="password" className="block mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                        className="w-full border-black border-2 p-2.5"
                    />
                    {errors.password && (
                        <p className="text-red-500">{errors.password}</p>
                    )}
                </div>

                <div className="form-group mb-6">
                    <label
                        htmlFor="password_confirmation"
                        className="block mb-2"
                    >
                        Konfirmasi Password
                    </label>
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={handleChange}
                        required
                        className="w-full border-black border-2 p-2.5"
                    />
                </div>

                <button
                    type="submit"
                    className="h-12 w-full text-black border-2 border-black bg-yellow-300"
                >
                    Daftar
                </button>
            </form>
        </div>
    );
}
