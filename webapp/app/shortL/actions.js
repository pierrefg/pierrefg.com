// app/actions.js
"use server";

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

    return { shortId };
}