export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-12 text-stone-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-lg font-semibold text-stone-900">MedSpa</span>
            <p className="mt-2 text-sm text-stone-500">
              Medical aesthetics and advanced skin wellness.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900">Services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Facial Treatments</li>
              <li>Injectables & Fillers</li>
              <li>Laser Therapy</li>
              <li>Body Contouring</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900">Hours</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900">Contact</h4>
            <p className="mt-3 text-sm">123 Wellness Blvd, Suite 100</p>
            <p className="mt-1 text-sm">(555) 123-4567</p>
            <p className="mt-1 text-sm">contact@medspa.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-stone-200 pt-6 text-center text-xs text-stone-400">
          © 2026 MedSpa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
