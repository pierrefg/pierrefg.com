// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.pierrefg.com',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        const priorityMap = {
            '/': 1.0,
            '/about': 0.8,
            '/science': 0.8,
            '/art': 0.8,
            '/contact': 0.8,
            '/legals': 0.1,
            '/privacy': 0.1
        };
        
        const defaultPriority = 0.5;
        const priority = priorityMap[path] || defaultPriority;

        return {
            loc: path,
            priority: priority,
            changefreq: 'monthly',
        };
    },
}
  