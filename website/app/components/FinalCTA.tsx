export default function FinalCTA() {
  return (
    <section id="cta" className="section-container bg-gradient-to-br from-primary to-primary-800 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Stop Losing After-Hours Revenue This Week
        </h2>
        <p className="text-xl md:text-2xl text-primary-100 mb-12">
          Join 20+ agencies already using AI to capture every lead and free up their teams
        </p>

        {/* Two-Column CTAs */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Not Ready - Demo */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-3">Not Ready to Commit?</h3>
            <p className="text-primary-100 mb-6">
              Book a 15-minute demo to see how AI works for insurance agencies like yours.
            </p>
            <a
              href="https://calendly.com/servquik/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block w-full"
            >
              Schedule Free Demo
            </a>
            <p className="text-sm text-primary-100 mt-3">No sales pressure. Just answers.</p>
          </div>

          {/* Ready - Apply */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Risk-Free?</h3>
            <p className="text-primary-100 mb-6">
              Apply for the 90-Day AI Pilot and prove ROI in your agency with zero risk.
            </p>
            <a
              href="#pilot-section"
              className="bg-accent hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block w-full"
            >
              Apply for 90-Day Pilot
            </a>
            <p className="text-sm text-primary-100 mt-3">15+ quotes guaranteed or FREE</p>
          </div>
        </div>

        {/* Trust Line */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-lg text-primary-100">
            No long-term contracts. Cancel anytime. Your success is our success.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SOC-2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>CASL Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>97% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
