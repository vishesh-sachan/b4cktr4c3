import { Hero } from "@/components/modules/hero";
import { EventOverview } from "@/components/modules/event-overview";
import { EventDetails } from "@/components/modules/event-details";
import { Timeline } from "@/components/modules/timeline";
import { Prizes } from "@/components/modules/prizes";
import { CommunityContext } from "@/components/modules/community-context";
import { Footer } from "@/components/modules/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30 selection:text-red-200">
      <Hero />
      <EventOverview />
      <EventDetails />
      <Timeline />
      <Prizes />
      <CommunityContext />
      <Footer />
    </main>
  );
}
