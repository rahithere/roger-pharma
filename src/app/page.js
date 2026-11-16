import Hero from "@/components/home/hero";
import AnnouncementPopup from "@/components/ui/AnnouncementPopup";

export default function Home() {
  return (
    <>
      <AnnouncementPopup />

      <main className="flex-1">
        <Hero />
      </main>

    </>
  );
}