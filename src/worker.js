/**
 * Cloudflare Worker for serving static React application
 * This worker serves static assets from the site bucket and handles SPA routing
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const pathname = url.pathname

  try {
    // For SPA routing - if the path doesn't contain a file extension and isn't an API route,
    // serve index.html to let React Router handle the routing
    if (!pathname.includes('.') && !pathname.startsWith('/api/') && pathname !== '/') {
      const indexRequest = new Request(url.origin + '/index.html', request)
      const response = await fetch(indexRequest)
      
      if (response.ok) {
        return new Response(response.body, {
          status: 200,
          headers: {
            ...response.headers,
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin'
          }
        })
      }
    }

    // For all other requests (static assets), try to serve them directly
    const response = await fetch(request)
    
    if (response.ok) {
      // Add security headers to all responses
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...response.headers,
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      })
      
      return newResponse
    }

    // If nothing found, serve 404 page
    const notFoundRequest = new Request(url.origin + '/404.html', request)
    const notFoundResponse = await fetch(notFoundRequest)
    
    if (notFoundResponse.ok) {
      return new Response(notFoundResponse.body, {
        status: 404,
        headers: {
          ...notFoundResponse.headers,
          'Content-Type': 'text/html',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      })
    }

    return new Response('Not Found', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
    })

  } catch (error) {
    console.error('Worker error:', error)
    return new Response('Internal Server Error', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain'
      }
    })
  }
} 