import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ServicePage } from "./pages/ServicePage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { services } from "./data/siteContent.js";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {services.map((service) => (
          <Route key={service.slug} path={service.slug} element={<ServicePage />} />
        ))}
        <Route path="contact" element={<ContactPage />} />
        <Route path="services/:slug" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
