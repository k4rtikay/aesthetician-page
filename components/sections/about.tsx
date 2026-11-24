export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              About Our Clinic
            </h2>
            <p className="mt-2 text-3xl font-light text-stone-900 sm:text-4xl">
              Where Clinical Precision Meets Luxury Care
            </p>
            <p className="mt-6 text-stone-600 leading-relaxed">
              Our team of licensed medical practitioners and certified aestheticians combines advanced clinical technology with an artistic eye. We prioritize patient safety, natural outcomes, and customized treatment plans.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8">
              <div>
                <dt className="text-2xl font-light text-stone-900">10+ Years</dt>
                <dd className="mt-1 text-sm text-stone-500">Clinical Experience</dd>
              </div>
              <div>
                <dt className="text-2xl font-light text-stone-900">10,000+</dt>
                <dd className="mt-1 text-sm text-stone-500">Treatments Performed</dd>
              </div>
            </dl>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl bg-stone-200 flex items-center justify-center text-stone-400 text-sm">
            [Clinic & Practitioner Image Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
}
