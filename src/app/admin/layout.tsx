import type { ReactNode } from "react";
import "../globals.css";

export const metadata = {
  title: "Admin · Kepsure Solutions",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-mist">{children}</div>;
}
