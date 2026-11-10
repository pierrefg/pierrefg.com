// app/actions.js
"use server";

import { turso } from "@/lib/turso";
import { nanoid } from "nanoid";

import { slugify } from "@/utils/slugify";


export async function createShortLink(formData) {
    const url = formData.get("url");
    const shortcut = formData.get("shortcut");

    if (!url || !URL.canParse(url)) {
        throw new Error("URL invalide");
    }
    
    let shortId;
    if(shortcut !== null && shortcut !== "") {
        shortId = slugify(shortcut);
    } else {
        shortId = nanoid(8);
    }

    await turso.execute("INSERT INTO links (key, link) VALUES (?, ?)", [shortId, url]);

    return { shortId };
}