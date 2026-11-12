'use client';

import { useEffect, useState } from "react";
import { IoReloadSharp } from "react-icons/io5";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { useCursorTooltip } from "@/components/tooltip/CursorTooltipProvider";


export default function EaterList() {
    const { showTooltip, hideTooltip } = useCursorTooltip();
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const { copiedKey, copyToClipboard } = useCopyToClipboard();

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
            <div className="w-full max-h-[250px] overflow-y-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2 text-left">Copy</th>
                            <th className="p-2 text-left">Short link</th>
                            <th className="p-2 text-left">Infos</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.key} className="border-b">
                                <td className="p-2">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() =>
                                            copyToClipboard(
                                                row.key,
                                                row.shortLink.absolute
                                            )
                                        }
                                    >
                                        {copiedKey === row.key ? (
                                            <FaClipboardCheck className="inline" />
                                        ) : (
                                            <FaClipboard className="inline" />
                                        )}
                                    </button>
                                </td>

                                <td className="p-2">
                                    <a
                                        href={row.shortLink.relative}
                                        className="underline"
                                    >
                                        {row.shortLink.absolute}
                                    </a>
                                </td>

                                {/* <td className="p-2 max-w-[240px]">
                                    <div className="overflow-x-auto whitespace-nowrap">
                                        {row.link ?? ""}
                                    </div>
                                </td> */}

                                <td className="p-2">
                                    <div
                                        className="max-w-[240px] truncate cursor-help"
                                        onMouseEnter={(event) =>
                                            showTooltip(row.link ?? "", event)
                                        }
                                        onMouseLeave={hideTooltip}
                                    >
                                        <span className="tooltip-indicator">infos</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

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
        </div>
    );
}