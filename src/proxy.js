import { NextResponse } from "next/server";

import { headers } from "next/headers";
import { auth } from "./lib/auth";

export async function proxy(request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const user = session?.user;

    const { pathname } = request.nextUrl;

    const isAuthPage =
      pathname.startsWith("/login") || pathname.startsWith("/register");

    // private routes
    const isPrivateRoute =
      pathname.startsWith("/tutors/add") ||
      (pathname.startsWith("/tutors/") && pathname !== "/tutors") ||
      pathname.startsWith("/my-bookings") ||
      pathname.startsWith("/my-tutors");

    if (user && isAuthPage) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // not logged in
    if (!user && isPrivateRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/tutors/:path*",
    "/my-bookings/:path*",
    "/my-tutors/:path*",
    "/login",
    "/register",
  ],
};
