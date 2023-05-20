/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.nhackblog.com/',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
