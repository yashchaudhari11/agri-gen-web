import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: [
    '/',
    '/(hi|mr|en)/:path*',
    '/((?!api|_next|_vercel|images|favicon\\.png|.*\\..*).*)',
  ],
};
