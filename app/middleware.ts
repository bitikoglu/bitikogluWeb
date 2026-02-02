import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isMaintenance = process.env.MAINTENANCE === 'true'

    if (isMaintenance && request.nextUrl.pathname !== '/maintenance') {
        return NextResponse.redirect(new URL('/maintenance', request.url))
    }
}