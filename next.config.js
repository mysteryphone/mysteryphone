module.exports = {
  env: {},
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/message-sent': { page: '/message-sent' },
    }

    const pathData = require('./db/sitemap.json')
    pathData.map((x) => {
      paths[`/blogs/${x.url}`] = {
        page: '/blogs/[id]',
        query: {
          id: `${x.url}`,
        },
      }
    })
    return paths
  },
}
