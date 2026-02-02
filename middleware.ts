import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isMaintenance = process.env.MAINTENANCE === 'true'
    const pathname = request.nextUrl.pathname

    // Statik dosyaları, resimleri ve api rotalarını hariç tut
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/images') ||
        pathname.includes('favicon.ico') ||
        pathname === '/maintenance'
    ) {
        return NextResponse.next()
    }

    if (isMaintenance) {
        return NextResponse.redirect(new URL('/maintenance', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}