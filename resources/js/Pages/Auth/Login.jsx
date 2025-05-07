import React, { useContext } from "react";
import { useForm } from "@inertiajs/react";

// context
import NotyfContext from "@/context/NotyfContext";

export default function Login() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });
    const notyf = useContext(NotyfContext);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/login", {
            onSuccess: () => {
                notyf.success("Berhasil Login!");
            },
            onError: () => {
                notyf.error("Login gagal, coba lagi!.");
            },
        });
    };
    return (
        <div className="flex items-center justify-center px-4 py-20 lg:px-0">
            <div className="dark:shadow-light shadow-dark container w-full max-w-md border-4 border-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] p-6 transition-all dark:border-white">
                <h2 className="mb-6 text-center text-2xl font-bold">
                    Login Akun
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="mb-2 block">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="mb-2 block">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="dark:shadow-light shadow-dark w-full border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    );
}
