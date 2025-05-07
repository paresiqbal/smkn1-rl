import { useContext } from "react";
import { useForm } from "@inertiajs/react";

// context
import NotyfContext from "@/context/NotyfContext";

export default function RegisterAdmin() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const notyf = useContext(NotyfContext);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/register", {
            onSuccess: () => {
                notyf.success("User Berhasil didaftarkan!");
            },
            onError: () => {
                notyf.error("Gagal pendaftaran, coba lagi!.");
            },
        });
    };

    return (
        <div className="flex items-center justify-center px-4 py-20 lg:px-0">
            <div className="dark:shadow-light shadow-dark container w-full max-w-md border-4 border-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] p-6 transition-all dark:border-white">
                <h2 className="mb-6 text-center text-2xl font-bold">
                    Daftar Akun
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label htmlFor="name" className="mb-2 block">
                            Nama
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name}</p>
                        )}
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="email" className="mb-2 block">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email}</p>
                        )}
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="password" className="mb-2 block">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password}</p>
                        )}
                    </div>

                    <div className="form-group mb-6">
                        <label
                            htmlFor="password_confirmation"
                            className="mb-2 block"
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
                            className="focus:shadow-input-dark focus:dark:shadow-input-light w-full border-2 border-black p-2.5 focus:bg-yellow-300 focus:outline-none dark:border-white focus:dark:text-black"
                        />
                    </div>

                    <button
                        type="submit"
                        className="dark:shadow-light shadow-dark w-full border-2 border-black bg-yellow-300 px-6 py-3 font-semibold text-black transition-all hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none focus:outline-none"
                    >
                        Daftar
                    </button>
                </form>
            </div>
        </div>
    );
}
