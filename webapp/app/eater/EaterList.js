'use client';

import { useEffect, useState } from "react";
import { IoReloadSharp } from "react-icons/io5";

export default function EaterList() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadLinks() {
        setLoading(true);

        try {
            const res = await fetch("/api/eater-list", {
                cache: "no-store",
            });
            const data = await res.json();

            setRows(data);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadLinks();
    }, []);

    return (
        <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={loadLinks}
                    disabled={loading}
                >
                    {loading ? "..." : <IoReloadSharp className="inline" />}
                </button>
            </div>

            <div className="w-full max-h-[250px] overflow-y-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2 text-left">Short link</th>
                            <th className="p-2 text-left">Link</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.key} className="border-b">
                                <td className="p-2">
                                    <a
                                        href={row.shortLink}
                                        className="underline"
                                    >
                                        {row.shortLink}
                                    </a>
                                </td>

                                <td className="p-2 max-w-[240px]">
                                    <div className="overflow-x-auto whitespace-nowrap">
                                        {row.link ?? ""}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}