import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string {
    // Check cookie first
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    if (cookieLocale === 'tr' || cookieLocale === 'en') {
        return cookieLocale;
    }

    // Check geo header for Turkey (if deployed to Vercel/etc)
    const country = request.headers.get('x-vercel-ip-country');
    if (country === 'TR') {
        return 'tr';
    }

    // Fallback to simple Accept-Language inspection
    const acceptLang = request.headers.get('accept-language');
    if (acceptLang) {
        if (acceptLang.toLowerCase().includes('tr')) {
            return 'tr';
        }
    }

    return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
    const isMaintenance = process.env.MAINTENANCE === 'true'
    const pathname = request.nextUrl.pathname

    // Statik dosyaları, resimleri ve api rotalarını hariç tut
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/images') ||
        pathname.includes('.') ||
        pathname.includes('favicon.ico') ||
        pathname === '/maintenance'
    ) {
        return NextResponse.next()
    }

    if (isMaintenance) {
        return NextResponse.redirect(new URL('/maintenance', request.url))
    }

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        // Redirect to the language-specific route
        return NextResponse.redirect(
            new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
}