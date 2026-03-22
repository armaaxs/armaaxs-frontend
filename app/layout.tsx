import type { Metadata } from "next";
import "./globals.css";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { BottomDock } from "@/components/bottom-dock";

export const metadata: Metadata = {
  title: "armaaxs",
  description: "Crafting premium digital products with obsessive design and engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased cursor-none">
        <InteractiveGridPattern
          proximity={200}
          borderColor="rgba(228, 200, 156, 0.12)"
        >
          <SmoothCursor />
          {children}
          <div className="fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-end px-4 sm:top-6 sm:justify-center sm:px-0">
            <div className="pointer-events-auto">
              <BottomDock />
            </div>
          </div>
        </InteractiveGridPattern>
      </body>
    </html>
  );
}
