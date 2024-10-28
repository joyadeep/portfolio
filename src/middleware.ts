import { verifyJwtToken } from "@/lib/verifyToken";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Create response object first so we can modify headers
  const response = NextResponse.next();
  
  // Add CORS headers
  // response.headers.set('Access-Control-Allow-Origin', '*');
  // response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  // response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle OPTIONS request for CORS preflight
  if (request.method === 'OPTIONS') {
    return response;
  }

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
      return response;
    } else if (!isPublicRoute && !verifiedToken) {
      // For unauthorized responses, we need to create a new response with the error
      // but still maintain CORS headers
      const unauthorizedResponse = NextResponse.json(
        { message: "Unauthorized user" },
        { status: 401 }
      );
      
      // Add CORS headers to error response as well
      // unauthorizedResponse.headers.set('Access-Control-Allow-Origin', '*');
      // unauthorizedResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      // unauthorizedResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      return unauthorizedResponse;
    }
  }

  return response;
}

export const config = {
  matcher: ["/", "/api/:path*"],
};