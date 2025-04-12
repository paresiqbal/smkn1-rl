import React from "react";
import { usePage } from "@inertiajs/react";

export default function AgendaList() {
    const { agendas } = usePage().props;

    return (
        <div className="mx-auto max-w-screen-md px-4 py-16">
            <h1 className="mb-8 text-5xl font-bold">Agenda</h1>

            <div className="space-y-8">
                {agendas.map((agenda) => (
                    <div key={agenda.id} className="rounded border p-4">
                        <h2 className="text-xl font-semibold">
                            {agenda.title}
                        </h2>
                        <p className="mb-2 text-sm text-gray-500">
                            {new Date(agenda.start_date).toLocaleDateString(
                                "id-ID",
                            )}{" "}
                            –{" "}
                            {new Date(agenda.end_date).toLocaleDateString(
                                "id-ID",
                            )}
                        </p>
                        {agenda.image && (
                            <img
                                src={agenda.image}
                                alt={agenda.title}
                                className="mx-auto mb-2 w-full rounded md:w-3/4 lg:w-2/3"
                            />
                        )}
                        <div
                            dangerouslySetInnerHTML={{ __html: agenda.content }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
