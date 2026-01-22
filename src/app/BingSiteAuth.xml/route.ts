/**
 * Bing verification file endpoint.
 *
 * Bing supports verifying ownership via a root-level `BingSiteAuth.xml` file.
 * This route lets you provide that file without committing secrets.
 *
 * Set `BING_SITE_AUTH` (recommended) to the code Bing provides, e.g.:
 *   BING_SITE_AUTH=1234567890ABCDEF1234567890ABCDEF
 *
 * Bing expects:
 *   <?xml version="1.0"?>
 *   <users><user>CODE</user></users>
 */
export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET() {
  const code = process.env.BING_SITE_AUTH?.trim()

  if (!code) {
    return new Response('Not Found', { status: 404 })
  }

  const xml = `<?xml version="1.0"?>
<users>
  <user>${code}</user>
</users>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  })
}

