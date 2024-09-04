import { authMiddleware } from "@clerk/nextjs";

const publicRoutes = ["/", "/sign-in(.*)", "/sign-up(.*)", "/events/:id"];

const ignoredRoutes = [
  "/api/webhook/clerk",
  "/api/webhook/stripe",
  "/api/uploadthing",
];

export default authMiddleware({
  publicRoutes,
  ignoredRoutes,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
