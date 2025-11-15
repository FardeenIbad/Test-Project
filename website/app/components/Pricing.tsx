export default function Pricing() {
  return (
    <section id="pricing" className="section-container bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing, No Hidden Fees
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the right AI solution for your agency size and needs
          </p>
        </div>

        {/* Featured Offers - Top Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
          {/* No-Risk 90-Day Pilot */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-primary transform hover:scale-105 transition-transform">
            <div className="bg-primary text-white p-6 text-center">
              <div className="inline-block bg-white text-primary px-4 py-1 rounded-full text-sm font-semibold mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold">No-Risk 90-Day AI Pilot™</h3>
              <p className="text-primary-100 mt-2">Test AI risk-free</p>
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">$497</div>
                <div className="text-gray-600">/month for 3 months</div>
                <div className="mt-2">
                  <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-semibold">
                    $0 Setup Fee (Waived)
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 AI voice + web chat + SMS</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Personal lines quote intake</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Performance dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-semibold">15+ quotes guaranteed or FREE</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No long-term contract</span>
                </li>
              </ul>
              <a href="#pilot-section" className="btn-primary w-full block text-center">
                Apply for Pilot
              </a>
              <p className="text-sm text-gray-600 text-center mt-4">
                Best for: 1-8 person agencies
              </p>
            </div>
          </div>

          {/* After-Hours Revenue Rescue */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-secondary transform hover:scale-105 transition-transform">
            <div className="bg-secondary text-white p-6 text-center">
              <div className="inline-block bg-white text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-2">
                BEST ROI
              </div>
              <h3 className="text-2xl font-bold">After-Hours Revenue Rescue™</h3>
              <p className="text-secondary-100 mt-2">Stop losing after-hours leads</p>
            </div>
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">$199</div>
                <div className="text-gray-600">/month</div>
                <div className="mt-2">
                  <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-semibold">
                    $1,500 Setup Fee
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 AI voice receptionist</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Instant missed-call textback</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Web chat + SMS nurturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">CASL-compliant for Canada</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-semibold">11x ROI in year one</span>
                </li>
              </ul>
              <a href="#after-hours-section" className="btn-primary w-full block text-center bg-secondary hover:bg-secondary-600">
                Get Started
              </a>
              <p className="text-sm text-gray-600 text-center mt-4">
                Best for: 2-10 person agencies
              </p>
            </div>
          </div>
        </div>

        {/* Additional Packages - Bottom Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Service Desk Offload */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Service Desk Offload Engine™</h3>
            <p className="text-gray-600 text-sm mb-4">AI Tier-1 CSR for large books</p>
            <div className="mb-4">
              <div className="text-3xl font-bold text-gray-900">$699</div>
              <div className="text-sm text-gray-600">/month + $3,000 setup</div>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">ID cards & certificates</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Policy change requests</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Smart routing to humans</span>
              </li>
            </ul>
            <p className="text-xs text-gray-600">For: 10-40+ person agencies</p>
          </div>

          {/* Germania Elite Concierge */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Germania Elite Concierge™</h3>
            <p className="text-gray-600 text-sm mb-4">Custom AI CSR for top brokers</p>
            <div className="mb-4">
              <div className="text-3xl font-bold text-gray-900">$997</div>
              <div className="text-sm text-gray-600">/month + $7,500 setup</div>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">14+ personal lines flows</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">7+ commercial flows</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">AMS/CRM integration</span>
              </li>
            </ul>
            <p className="text-xs text-gray-600">For: 8-30+ staff Germania brokers</p>
          </div>

          {/* Full-Funnel Growth */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Funnel Growth Bundle™</h3>
            <p className="text-gray-600 text-sm mb-4">Website + Ads + 24/7 AI</p>
            <div className="mb-4">
              <div className="text-3xl font-bold text-gray-900">$997</div>
              <div className="text-sm text-gray-600">/month + $4,000 setup</div>
            </div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Website build or rebuild</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Meta ads campaign mgmt</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">24/7 AI omni-channel</span>
              </li>
            </ul>
            <p className="text-xs text-gray-600">For: Growth-focused 1-5 producers</p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All packages include done-for-you setup, team training, and ongoing support.
          </p>
          <p className="text-gray-600 mt-2">
            No hidden fees. No per-call charges. No surprise invoices.
          </p>
        </div>
      </div>
    </section>
  )
}
