const dbSitemap = require('../db/sitemap.json')
const fs = require('fs')

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(dbSitemap)
  .map(
    (path) => `
  <url>
    <loc>https://mysteryphone.com${path}</loc>
    <lastmod>${new Date(dbSitemap[path].date).toISOString()}</lastmod>
  </url>`
  )
  .join('')}
</urlset>`

fs.writeFileSync('public/sitemap.xml', sitemapXml)

const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <atom:link href="https://mysteryphone.com/rss.xml" rel="self" type="application/rss+xml" />
      <title>Mystery Phone.</title>
      <link>https://mysteryphone.com</link>
      <description>A Mystery Phonedemo witn next.js.</description>
      <image>
          <url>https://mysteryphone.com/favicon-152.png</url>
          <title>Mystery Phone.</title>
          <link>https://mysteryphone.com</link>
          <description>Mystery Phone. Logo</description>
      </image>${Object.keys(dbSitemap)
        .map(
          (path) => `
        <item>
            <title>${dbSitemap[path].title}</title>
            <guid>https://mysteryphone.com${path}</guid>
            <description>A photo of ${dbSitemap[path].title}</description>
            <pubDate>${new Date(dbSitemap[path].date).toUTCString()}</pubDate>
        </item>`
        )
        .join('')}
    </channel>
</rss>`
fs.writeFileSync('public/rss.xml', rssXml)
