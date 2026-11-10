// app/api/eater-list/route.js
import { turso } from "@/lib/turso";
import { retrieveShortLink } from "@/utils/shortLinks";

export async function GET() {
    const { rows } = await turso.execute(
        "SELECT * FROM links WHERE private = 0 AND active = 1 ORDER BY created_at DESC"
    );

    const links = rows.map((row) => ({
        key: row.key,
        shortLink: retrieveShortLink(row.key),
        link: row.link,
    }));

    return Response.json(links);
}