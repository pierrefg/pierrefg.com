// app/api/eater-list/[key]/route.js
import { turso } from "@/lib/turso";

export async function GET(request, { params }) {
    const { key } = await params;

    const result = await turso.execute(
        "SELECT link FROM links WHERE key = ? AND private = 0 AND active = 1",
        [key]
    );

    const link = result.rows[0]?.link;

    if (!link) {
        return Response.json(
            { error: "Link not found" },
            { status: 404 }
        );
    }

    return Response.json({ key, link });
}