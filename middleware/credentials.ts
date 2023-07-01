// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(request: NextRequest) {
//   const token = await getToken({
//     req: request,
//     secret: process.env.ACCESS_TOKEN_SECRET,
//   });

//   if (token) {
//     if (["/", "/auth", "/reset-password"].includes(request.nextUrl.pathname)) {
//       return NextResponse.redirect(new URL("/admin", request.url));
//     }
//   } else if (
//     ![
//       "/",
//       "/login",
//       "/reset-password",
//       "/forgot-password",
//       "/settings",
//       "/invite",
//     ].includes(request.nextUrl.pathname)
//   ) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// export const config = {
//   matcher: ["/auth", "/admin", "/reset-password"],
// };
