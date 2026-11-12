export function retrieveShortLink(shortLinkId) {
    return {
        relative: `/s/${shortLinkId}`,
        absolute: `https://pierrefg.com/s/${shortLinkId}`,
    };
}