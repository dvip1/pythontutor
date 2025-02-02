// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check if the request is coming from your application
    const referer = request.headers.get('referer')
    const host = request.headers.get('host')

    if (!referer || !referer.includes(host!)) {
        return new NextResponse(
            JSON.stringify({ error: 'Unauthorized' }),
            {
                status: 403,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*',
}