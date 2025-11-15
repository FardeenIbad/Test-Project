'use client'

export default function OfferOverview() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Two Ways to Stop the Bleeding
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right AI solution for your agency's needs
          </p>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* No-Risk 90-Day AI Pilot */}
          <div className="card border-2 border-primary hover:border-primary-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">No-Risk 90-Day AI Pilot™</h3>
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                15+ Quotes Guaranteed or FREE
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Test AI in your agency with zero risk and no long-term commitment.
                If we don't deliver 15+ quote opportunities in 90 days, we keep working for free.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">24/7 AI voice + web chat + SMS</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">$0 setup (waived for pilot)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">$497/month for 3 months only</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">No long-term contract</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <p className="text-sm text-gray-600 mb-2 font-semibold">Best for:</p>
              <p className="text-sm text-gray-600">1-8 person agencies skeptical about AI but want to test it risk-free</p>
            </div>

            <button
              onClick={() => scrollToSection('pilot-section')}
              className="btn-primary w-full"
            >
              Apply for Pilot
            </button>
          </div>

          {/* After-Hours Revenue Rescue */}
          <div className="card border-2 border-secondary hover:border-secondary-600 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">After-Hours Revenue Rescue™</h3>
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-accent-100 text-accent-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                11x ROI in Year One
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Turn every missed call and voicemail into a captured quote opportunity.
                Your phone works 24/7 so you never lose another after-hours lead.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">24/7 AI voice receptionist</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Instant missed-call textback</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Web chat + email support</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">$1,500 setup + $199/month</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6">
              <p className="text-sm text-gray-600 mb-2 font-semibold">Best for:</p>
              <p className="text-sm text-gray-600">2-10 person agencies losing revenue from after-hours and missed calls</p>
            </div>

            <button
              onClick={() => scrollToSection('after-hours-section')}
              className="btn-primary w-full bg-secondary hover:bg-secondary-600"
            >
              Stop Losing Revenue
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
