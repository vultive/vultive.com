export default [
  { UserAgent: 'ia_archiver' },
  { Disallow: '*' },
  { BlankLine: true },
      
  // Be aware that this will NOT work on target: 'static' mode
  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
]