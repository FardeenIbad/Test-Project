export default function PainSection() {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-20">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The $50K After-Hours Problem
            </h2>
            <p className="text-xl text-gray-300">
              Every voicemail is a quote request that might go to a competitor
            </p>
          </div>

          {/* Stats Callout */}
          <div className="bg-accent-600 rounded-xl p-8 mb-12 text-center">
            <p className="text-5xl font-bold mb-2">30-40%</p>
            <p className="text-xl">of quote requests come after 5pm or on weekends</p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Missed Calls = Lost Premium</h3>
              <p className="text-gray-300">
                Every after-hours call that goes to voicemail is premium you'll never write.
                Competitors with 24/7 systems are capturing what you're missing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Slow Follow-Up Kills Conversion</h3>
              <p className="text-gray-300">
                When quote requests sit in your inbox overnight, prospects move on.
                Speed to lead wins 78% of the business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">CSRs Buried in Admin</h3>
              <p className="text-gray-300">
                Your licensed team is stuck on repetitive intake and service tasks
                instead of selling and managing relationships.
              </p>
            </div>
          </div>

          {/* Time Visual */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-white/10 rounded-lg p-6">
              <div className="text-left">
                <div className="text-3xl font-bold text-accent">5pm - 9am</div>
                <div className="text-gray-300">The Dead Zone</div>
              </div>
              <div className="text-4xl text-gray-500">+</div>
              <div className="text-left">
                <div className="text-3xl font-bold text-accent">Lunch & Peak Times</div>
                <div className="text-gray-300">When you're slammed</div>
              </div>
              <div className="text-4xl text-gray-500">=</div>
              <div className="text-left">
                <div className="text-3xl font-bold text-red-400">$50K+</div>
                <div className="text-gray-300">Lost annually</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
