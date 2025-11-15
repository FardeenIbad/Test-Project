export default function SocialProof() {
  return (
    <section id="case-studies" className="section-container bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Germania-Referred Brokers
          </h2>
          <p className="text-xl text-primary-100">
            Real agencies using AI to capture more quotes and free up their teams
          </p>
        </div>

        {/* Germania Partnership Badge */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12 text-center border border-white/20">
          <div className="max-w-2xl mx-auto">
            <div className="inline-block bg-accent-500 text-white px-6 py-2 rounded-full font-semibold mb-4">
              Official AI Partner
            </div>
            <h3 className="text-2xl font-bold mb-3">Germania Insurance Partnership</h3>
            <p className="text-primary-100 text-lg">
              ServQuik is presenting at Germania's 2026 summit as their official AI automation partner,
              helping their top brokers implement 24/7 lead capture systems.
            </p>
          </div>
        </div>

        {/* Case Study: Buchanan Insurance */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-primary to-primary-700 p-6">
            <h3 className="text-2xl font-bold text-white">Buchanan Insurance</h3>
            <p className="text-primary-100">Germania-Referred Independent Broker</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$5,000</div>
                <p className="text-gray-600">Investment in Custom AI Build</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">21+</div>
                <p className="text-gray-600">Product Quote Flows Automated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <p className="text-gray-600">Coverage Across All Channels</p>
              </div>
            </div>
            <div className="bg-primary-50 border-l-4 border-primary rounded-r-lg p-6">
              <p className="text-gray-700 text-lg italic mb-3">
                "We invested $5,000 because we were done losing after-hours business to competitors.
                ServQuik built us a custom AI that handles conversational quote intake for 21+ products across personal and commercial lines."
              </p>
              <p className="text-gray-900 font-semibold">— Buchanan Insurance Team</p>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Multi-line quote workflows (auto, home, commercial, umbrella, etc.)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Voice, chat, email, and SMS integration</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Service requests + ID card fulfillment</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Direct AMS/CRM integration for structured data push</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="text-5xl font-bold text-accent mb-2">20+</div>
            <p className="text-primary-100">Brokers Using ServQuik</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="text-5xl font-bold text-accent mb-2">15,000+</div>
            <p className="text-primary-100">Calls Answered by AI</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
            <div className="text-5xl font-bold text-accent mb-2">97%</div>
            <p className="text-primary-100">System Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
