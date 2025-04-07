import React from "react";

export default function ConfirmDeleteModal({
    open,
    onConfirm,
    onCancel,
    message,
}) {
    if (!open) return null;

    // This prevents click-inside from triggering close
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onCancel();
        }
    };

    return (
        <div
            onClick={handleBackgroundClick}
            className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-zinc-900/75"
        >
            <div className="w-full max-w-sm border-2 border-black bg-white p-6 dark:bg-gray-800">
                <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">
                    Konfirmasi
                </h2>
                <p className="mb-6 text-gray-800 dark:text-gray-200">
                    {message}
                </p>
                <div className="flex justify-center gap-3">
                    <button
                        onClick={onCancel}
                        className="w-full border border-gray-500 px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                        Batal
                    </button>
                    <button
                        onClick={onConfirm}
                        className="w-full border-2 border-white bg-red-400 px-4 py-2 hover:bg-red-500"
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </div>
    );
}
