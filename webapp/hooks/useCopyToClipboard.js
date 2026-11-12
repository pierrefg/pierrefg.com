'use client';

import { useCallback, useRef, useState } from "react";

export default function useCopyToClipboard(resetDelay = 2000) {
    const [copiedKey, setCopiedKey] = useState(null);
    const timeoutRef = useRef(null);

    const copyToClipboard = useCallback(async (key, text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                setCopiedKey(null);
            }, resetDelay);
        } catch (err) {
            console.error("Failed to copy to clipboard:", err);
        }
    }, [resetDelay]);

    return { copiedKey, copyToClipboard };
}