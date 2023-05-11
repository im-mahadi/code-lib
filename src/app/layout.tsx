import { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Homepage",
  description: "homepage of the app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Suspense fallback={<LoadingSkeleton />}>
        <body>
          <Provider>{children}</Provider>
        </body>
      </Suspense>
    </html>
  );
}
