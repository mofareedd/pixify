import { createMiddleware } from '@arcjet/next';
import arcjet, { detectBot } from '@repo/security';

export const config = {
  // matcher tells Next.js which routes to run the middleware on. This runs the
  // middleware on all routes except for static assets and Posthog ingest
  // biome-ignore lint/nursery/noSecrets: <explanation>
  matcher: ['/((?!_next/static|_next/image|ingest|favicon.ico).*)'],
};

const aj = arcjet.withRule(
  detectBot({
    mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
    // Block all bots except the following
    allow: [
      // See https://docs.arcjet.com/bot-protection/identifying-bots
      'CATEGORY:SEARCH_ENGINE', // Allow search engines
      'CATEGORY:PREVIEW', // Allow preview links to show OG images
      'CATEGORY:MONITOR', // Allow uptime monitoring services
    ],
  })
);

export default createMiddleware(aj);
