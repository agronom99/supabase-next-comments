import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requrestURL = new URL(request.url);
    const code = requrestURL.searchParams.get('code');

    if(code) {
        const supabase = createRouteHandlerClient({cookies});
        await supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(requrestURL.origin)
}