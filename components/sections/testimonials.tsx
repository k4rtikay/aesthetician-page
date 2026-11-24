const sampleTestimonials = [
  {
    quote:
      "The consultations are thorough and honest. I never felt rushed, and my skin has never looked healthier.",
    author: "Elena R.",
    treatment: "Laser Resurfacing & Peels",
  },
  {
    quote:
      "Subtle, natural-looking results are so hard to find. The team here listens carefully and understands facial balance.",
    author: "Marcus T.",
    treatment: "Injectables Consultation",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-light text-stone-900 sm:text-4xl">
            Client Experiences
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {sampleTestimonials.map((item) => (
            <div
              key={item.author}
              className="flex flex-col justify-between rounded-2xl bg-stone-50 p-8 border border-stone-100"
            >
              <p className="text-stone-700 italic">“{item.quote}”</p>
              <div className="mt-6 border-t border-stone-200/60 pt-4">
                <p className="font-medium text-stone-900">{item.author}</p>
                <p className="text-xs text-stone-500">{item.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
