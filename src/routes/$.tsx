import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: CatchAll,
});

function CatchAll() {
  return null;
}
