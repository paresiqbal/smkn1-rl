import React from "react";
import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/login");
    };
    return (
        <div className="container border-4 border-black p-6 w-full max-w-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all dark:border-white dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <h2 className="text-2xl font-bold text-center mb-6">Login Akun</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <label htmlFor="email" className="block mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-yellow-300 active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        value={data.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password" className="block mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-yellow-300 active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="h-12 w-full text-black border-2 border-black p-2.5 bg-yellow-300 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition"
                >
                    Masuk
                </button>
            </form>
        </div>
    );
}
