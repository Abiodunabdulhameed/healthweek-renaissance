import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { EventSchedule } from "@/components/site/EventSchedule";
import { GlanceCarousel } from "@/components/site/GlanceCarousel";
import { TicketExperience } from "@/components/site/TicketExperience";
import { AwardNominations } from "@/components/site/AwardNominations";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream font-body text-body-dark">
      <Hero />
      <EventSchedule />
      <GlanceCarousel />
      <TicketExperience />
      <AwardNominations />
    </main>
  );
}
