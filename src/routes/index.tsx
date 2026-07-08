import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { WorkSection } from "@/components/WorkSection";
import { ContactSection } from "@/components/ContactSection";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishnu — Commercial & Lifestyle Model · Hyderabad" },
      {
        name: "description",
        content:
          "Portfolio of Vishnu — aspiring commercial, lifestyle and menswear model based in Hyderabad, India. Available for campaigns, editorials and brand collaborations.",
      },
      { property: "og:title", content: "Vishnu — Commercial & Lifestyle Model" },
      {
        property: "og:description",
        content:
          "Aspiring commercial and lifestyle model. Available for campaigns, editorials and brand collaborations.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <WorkSection />
        <ContactSection />
      </main>
      <Toaster />
    </>
  );
}
