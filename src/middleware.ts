import { verifyJwtToken } from "@/lib/verifyToken";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicRoutes = ["/api/login", "/api/register", "/api/testimonial"];

  const isPublicRoute = publicRoutes.includes(path);
  const token = request.cookies.get("portfolio_token")?.value;

  const verifiedToken =
    token &&
    (await verifyJwtToken(token).catch((error) => {
      console.log("Token verification error ", error);
    }));

  if (path.startsWith("/api")) {
    if (isPublicRoute) {
      return NextResponse.next();
    } else if (!isPublicRoute && !verifiedToken) {
      return NextResponse.json(
        { message: "Unauthorized user" },
        { status: 401 }
      );
    }
  }
}

export const config = {
  matcher: ["/", "/api/:path*"],
};
