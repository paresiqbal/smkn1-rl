import React from "react";
import { usePage } from "@inertiajs/react";

export default function AgendaList() {
    const { agendas } = usePage().props;

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-12">
            <h1 className="mb-8 text-4xl font-bold">Agenda</h1>

            {/* Grid Layout for Responsive Design */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {agendas.map((agenda) => (
                    <div
                        key={agenda.id}
                        className="hover:shadow-dark hover:dark:shadow-light overflow-hidden rounded-lg border-2 border-black text-sm shadow-sm transition duration-150 dark:border-white"
                    >
                        {agenda.image && (
                            <img
                                src={agenda.image}
                                alt={agenda.title}
                                className="h-48 w-full border-b border-black object-cover dark:border-white"
                            />
                        )}
                        <div className="bg-red-300 p-4 text-gray-900 dark:bg-gray-800 dark:text-white">
                            <h2 className="text-base font-semibold">
                                {agenda.title}
                            </h2>
                            <p className="mb-1 text-xs">
                                {new Date(agenda.start_date).toLocaleDateString(
                                    "id-ID",
                                )}{" "}
                                –{" "}
                                {new Date(agenda.end_date).toLocaleDateString(
                                    "id-ID",
                                )}
                            </p>
                            <div
                                className="line-clamp-3 text-xs"
                                dangerouslySetInnerHTML={{
                                    __html: agenda.content,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
