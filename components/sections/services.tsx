const sampleServices = [
  {
    title: "Injectables & Fillers",
    description: "Botox, dermal fillers, and subtle enhancements tailored to facial anatomy.",
  },
  {
    title: "Laser Skin Resurfacing",
    description: "Target fine lines, hyperpigmentation, and texture with precision laser treatments.",
  },
  {
    title: "Medical Facials & Peels",
    description: "Hydrafacials and clinical chemical peels to restore radiance and skin barrier health.",
  },
  {
    title: "Body Contouring",
    description: "Non-invasive body sculpting and skin-tightening technologies.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-light text-stone-900 sm:text-4xl">
            Targeted Aesthetic Solutions
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sampleServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-stone-200 p-6 transition-all hover:border-stone-400 hover:shadow-sm"
            >
              <h3 className="text-lg font-medium text-stone-900">{service.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{service.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-medium text-stone-900 hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
