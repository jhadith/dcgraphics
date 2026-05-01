import { useLocation } from "react-router-dom";
import { ServiceTemplate } from "../components/sections/ServiceTemplate.jsx";
import { services } from "../data/siteContent.js";
import { NotFoundPage } from "./NotFoundPage.jsx";

export function ServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <NotFoundPage />;
  }

  return <ServiceTemplate service={service} />;
}
