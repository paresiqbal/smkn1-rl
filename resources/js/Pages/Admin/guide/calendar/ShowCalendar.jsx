import { usePage } from "@inertiajs/react";

export default function ShowCalendar() {
    const { calendar, imageUrl, year } = usePage().props;

    return (
        <div className="px-6 pt-14 pb-10 md:pt-0">
            <h1 className="pb-6 text-2xl font-bold">Kalender {year}</h1>

            <div>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={`Kalender Tahun ${year}`}
                        className="mt-4 max-w-xs rounded"
                    />
                )}
            </div>
        </div>
    );
}
