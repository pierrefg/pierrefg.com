import { turso } from "@/lib/turso";

import { retrieveShortLink } from '@/utils/shortLinks';

export default async function EaterList() {

    const { rows } = await turso.execute("SELECT * FROM links");

    return (
        <ul>
            {
                rows.map((row) => (
                    <li key={row.key}>
                        <a href={retrieveShortLink(row.key)} className="underline">
                            {retrieveShortLink(row.key)}
                        </a>
                        {row.link && <span> - {row.link.slice(0, 20)}...</span>}
                    </li>
                ))
            }
        </ul>
    );

}