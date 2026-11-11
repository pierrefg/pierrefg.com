import { notFound, redirect } from "next/navigation";
import { turso } from "@/lib/turso";

export default async function ShortLinkPage({ params }) {
    const { slug } = await params;

    const result = await turso.execute(
        "SELECT link FROM links WHERE key = ? AND private = 0 AND active = 1",
        [slug]
    );

    const destination = result.rows[0]?.link;

    if (!destination) {
        notFound();
    }

    redirect(destination);
}