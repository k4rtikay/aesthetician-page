export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            Get in Touch
          </h2>
          <p className="mt-2 text-3xl font-light sm:text-4xl">
            Book Your Consultation
          </p>
          <p className="mt-4 text-stone-300">
            Schedule a personalized one-on-one skin analysis and treatment plan with our medical team.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="mailto:contact@medspa.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-200"
            >
              Email Us
            </a>
            <a
              href="tel:5551234567"
              className="rounded-full border border-stone-700 px-6 py-3 text-sm font-medium text-stone-100 transition-colors hover:bg-stone-800"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
