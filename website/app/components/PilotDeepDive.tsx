'use client'

import { useState } from 'react'

export default function PilotDeepDive() {
  const [formData, setFormData] = useState({
    name: '',
    agencyName: '',
    email: '',
    phone: '',
    provinceState: '',
    staffSize: '',
    primaryLines: [] as string[],
    missedCalls: '',
    painPoint: '',
  })

  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with CRM/email system
    alert('Thank you! We will contact you within 24 hours to schedule your pilot kickoff.')
    console.log('Form submitted:', formData)
  }

  const handleCheckboxChange = (line: string) => {
    setFormData(prev => ({
      ...prev,
      primaryLines: prev.primaryLines.includes(line)
        ? prev.primaryLines.filter(l => l !== line)
        : [...prev.primaryLines, line]
    }))
  }

  return (
    <section id="pilot-section" className="section-container bg-primary-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            No-Risk 90-Day AI Pilot™ – Prove It or We Work for Free
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Test AI in your agency with zero risk. No long-term contract. No setup fee.
            If we don't deliver results, we keep working for free.
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Your 90-Day Pilot:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">24/7 AI Voice Agent</h4>
                <p className="text-gray-600 text-sm">Answers your main line after-hours and during overflow periods</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Web Chat Widget</h4>
                <p className="text-gray-600 text-sm">"Get a quote" and "Make a change" flows on your website</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Missed-Call Textback + SMS</h4>
                <p className="text-gray-600 text-sm">Instant SMS follow-up to capture quote details and book callbacks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Personal Lines Quote Intake</h4>
                <p className="text-gray-600 text-sm">Auto, home, and renter insurance quote workflows</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Done-For-You Setup</h4>
                <p className="text-gray-600 text-sm">Full configuration and light training for your team</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-secondary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Performance Dashboard</h4>
                <p className="text-gray-600 text-sm">Real-time tracking: calls answered, quotes captured, appointments booked</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* The Guarantee */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">The Guarantee</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold text-lg">Minimum 15 additional quote opportunities in 90 days</p>
              <p>If we don't hit the number, we keep working for free until we do.</p>
              <p>The burden is on us to prove it's worth keeping.</p>
              <p className="text-sm text-gray-600 border-t pt-3 mt-3">
                No long-term contract. After 90 days, it's month-to-month. Cancel anytime.
              </p>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">ROI at a Glance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700">Investment (3 months):</span>
                <span className="text-2xl font-bold text-gray-900">$1,491</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700">Conservative result:</span>
                <span className="text-lg font-semibold text-gray-900">5 policies</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                <span className="text-gray-700">Avg. premium/policy:</span>
                <span className="text-lg font-semibold text-gray-900">$1,200/yr</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-900 font-semibold">Year 1 Premium:</span>
                <span className="text-3xl font-bold text-secondary">$6,000</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Return on Investment</p>
                <p className="text-4xl font-bold text-primary">4x</p>
                <p className="text-xs text-gray-500 mt-1">...before renewals and cross-sells</p>
              </div>
            </div>
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Who This Pilot Is For:</h3>
          <p className="text-lg text-gray-700 mb-4">
            1-8 person independent agencies who are curious about AI but skeptical.
            Agencies that have been burned by software "nobody used" and don't want to get locked into another system.
          </p>
          <div className="bg-accent-50 border-l-4 border-accent rounded-r-lg p-4">
            <p className="text-gray-700 font-semibold">Scarcity Note:</p>
            <p className="text-gray-600">
              We're capping this pilot at 10 agencies tied to the Germania referral program and early insurance adopters.
              Once we've filled those pilot slots, the setup fee returns to the standard $1,500+.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary text-xl px-12 py-5"
            >
              Apply for 90-Day Risk-Free Pilot
            </button>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for Your 90-Day Pilot</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="agencyName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Agency Name *
                    </label>
                    <input
                      type="text"
                      id="agencyName"
                      required
                      value={formData.agencyName}
                      onChange={(e) => setFormData({...formData, agencyName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="provinceState" className="block text-sm font-semibold text-gray-700 mb-2">
                      Province/State *
                    </label>
                    <input
                      type="text"
                      id="provinceState"
                      required
                      value={formData.provinceState}
                      onChange={(e) => setFormData({...formData, provinceState: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="staffSize" className="block text-sm font-semibold text-gray-700 mb-2">
                      Staff Size *
                    </label>
                    <select
                      id="staffSize"
                      required
                      value={formData.staffSize}
                      onChange={(e) => setFormData({...formData, staffSize: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6-10">6-10</option>
                      <option value="10+">10+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary Lines of Business (check all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Auto', 'Home', 'Commercial', 'Life/Health'].map(line => (
                      <label key={line} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.primaryLines.includes(line)}
                          onChange={() => handleCheckboxChange(line)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="text-gray-700">{line}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="missedCalls" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Missed Call Volume
                  </label>
                  <select
                    id="missedCalls"
                    value={formData.missedCalls}
                    onChange={(e) => setFormData({...formData, missedCalls: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="dont-know">Don't know</option>
                    <option value="1-3">1-3 per day</option>
                    <option value="4-10">4-10 per day</option>
                    <option value="10+">10+ per day</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="painPoint" className="block text-sm font-semibold text-gray-700 mb-2">
                    Biggest Pain Point (optional)
                  </label>
                  <textarea
                    id="painPoint"
                    rows={4}
                    value={formData.painPoint}
                    onChange={(e) => setFormData({...formData, painPoint: e.target.value})}
                    placeholder="What's your biggest challenge with missed calls, after-hours inquiries, or lead follow-up?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="submit" className="btn-primary flex-1">
                    Submit Pilot Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
