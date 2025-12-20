export const createPageMetadata = (
    pageTitle,
    pageDescription,
    pageLink
) => {
    return {
        title: `${pageTitle} - Pierre FG`,
        description: pageDescription,
        manifest: "/manifest.json",
        icons: {
            icon: [
                { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
                { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            ],
            apple: "/icons/apple-touch-icon.png",
        },
        openGraph: {
            title: `${pageTitle} - Pierre FG`,
            description: pageDescription,
            url: `https://www.pierrefg.com${pageLink}`,
            siteName: "Pierre Faure--Giovagnoli",
        }
    };
};
