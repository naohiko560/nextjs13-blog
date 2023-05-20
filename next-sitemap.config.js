/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.nhackblog.com/',
  changefreq: 'weekly',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './out',
};
