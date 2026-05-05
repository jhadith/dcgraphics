import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { FloatingWhatsApp } from "./FloatingWhatsApp.jsx";

export function Layout() {
  return (
    <div className="min-h-screen text-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
