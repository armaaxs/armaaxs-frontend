import type { Metadata } from "next";
import { MimesisLanding } from "@/components/mimesis-landing";

export const metadata: Metadata = {
  title: "Mimesis",
  description:
    "Explore 75,000+ audiobooks, read and listen in one elegant place, and join the closed beta.",
};

export default function MimesisPage() {
  return <MimesisLanding />;
}
