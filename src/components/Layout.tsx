import type { ReactNode } from "react";
import ContextAwareNavigation from "./ContextAwareNavigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white font-serif antialiased">
      <div className="flex flex-col min-h-screen">
        <ContextAwareNavigation />
        <main className="flex-1 relative z-10">{children}</main>
        <footer className="border-t border-neutral-800 py-6 relative z-20">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} Aleyna Aygun. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
