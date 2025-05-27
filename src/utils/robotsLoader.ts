
export const robotsLoader = async () => {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml`;

  return new Response(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
};
