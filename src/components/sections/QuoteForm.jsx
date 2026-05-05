import { Send } from "lucide-react";
import { useState } from "react";
import { contact, services } from "../../data/siteContent.js";

const initialForm = {
  name: "",
  contactInfo: "",
  service: services[0]?.label ?? "Business Signs",
  details: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const body = [
      `Name: ${form.name}`,
      `Phone or email: ${form.contactInfo}`,
      `Service: ${form.service}`,
      "",
      "Project details:",
      form.details,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Quote Request - ${form.service}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="rounded-2xl border border-white/55 bg-white/75 p-5 shadow-[0_18px_55px_rgba(17,19,24,0.12)] backdrop-blur-2xl" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-graphite">
          Name
          <input
            className="focus-ring min-h-12 rounded-md border border-line bg-white px-3 text-base font-semibold text-ink"
            name="name"
            value={form.name}
            onChange={updateField}
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-graphite">
          Phone or email
          <input
            className="focus-ring min-h-12 rounded-md border border-line bg-white px-3 text-base font-semibold text-ink"
            name="contactInfo"
            value={form.contactInfo}
            onChange={updateField}
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-graphite sm:col-span-2">
          Service
          <select
            className="focus-ring min-h-12 rounded-md border border-line bg-white px-3 text-base font-semibold text-ink"
            name="service"
            value={form.service}
            onChange={updateField}
          >
            {services.map((service) => (
              <option key={service.slug} value={service.label}>
                {service.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-graphite sm:col-span-2">
          Project details
          <textarea
            className="focus-ring min-h-32 rounded-md border border-line bg-white px-3 py-3 text-base font-semibold text-ink"
            name="details"
            value={form.details}
            onChange={updateField}
            placeholder="Quantity, size, material, deadline, installation address, vehicle/storefront photos, or existing artwork."
            required
          />
        </label>
      </div>
      <button
        className="focus-ring mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-black text-navy transition hover:bg-highlight"
        type="submit"
      >
        <Send size={17} />
        Send Quote Request
      </button>
    </form>
  );
}
