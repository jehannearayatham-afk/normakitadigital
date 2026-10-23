import { createFileRoute, redirect, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/$legacy")({
  beforeLoad: ({ params }) => {
    if (params.legacy === "index") throw redirect({ to: "/", statusCode: 301 });
    throw notFound();
  },
});