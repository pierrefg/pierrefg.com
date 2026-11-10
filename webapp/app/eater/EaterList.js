'use client';

import { useCallback, useEffect, useState } from "react";

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
                <button type="button" className="btn btn-primary" onClick={loadLinks} disabled={loading}>
                    {loading ? '...' : <IoReloadSharp className="inline" />}
                </button>
            </div>

            <ul>
                {rows.map((row) => (
                    <li key={row.key}>
                        <a href={row.shortLink} className="underline">
                            {row.shortLink}
                        </a>
                        {row.link && <span> - {row.link.slice(0, 20)}...</span>}
                    </li>
                ))}
            </ul>
        </div>
    );

}