'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-start gap-4 text-left hover:bg-gray-50 transition-colors px-4 rounded-lg"
      >
        <span className="text-lg font-semibold text-gray-900 flex-1">{question}</span>
        <svg
          className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-6">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Will this replace my staff?",
      answer: "No. The AI handles Tier-1 routine work (after-hours calls, simple quote intake, ID card requests, etc.) so your licensed team can focus on selling, relationship management, and complex cases. Most agencies reassign CSRs to higher-value retention and cross-sell work instead of repetitive tasks. This is about augmentation, not replacement."
    },
    {
      question: "Will customers know it's AI?",
      answer: "We use warm, insurance-specific scripts that sound natural and professional. You approve the scripts, tone, and call flows before go-live. For after-hours and overflow scenarios, customers appreciate getting an immediate response instead of voicemail. If someone needs complex help, the AI routes them to your team with full context. You're in full control."
    },
    {
      question: "How secure is it? What about compliance?",
      answer: "ServQuik is built on SOC-2 compliant infrastructure with end-to-end encryption. All messaging is CASL-compliant for Canadian agencies with proper opt-out handling and consent tracking. We integrate with your existing systems without storing sensitive customer data unnecessarily. Your agency's compliance and security standards are maintained."
    },
    {
      question: "What if it doesn't work for my agency?",
      answer: "That's why we offer the No-Risk 90-Day AI Pilot. You get 15+ guaranteed quote opportunities in 90 days, or we keep working for free until we hit that number. After the pilot, it's month-to-month with no long-term contract. If it's not working, you can cancel anytime. The burden of proof is on us, not you."
    },
    {
      question: "How long until we're live?",
      answer: "3-4 weeks from contract signature to fully operational system. Week 1 is discovery and workflow mapping. Weeks 2-3 are build and configuration. Week 4 is training and go-live. This isn't a 6-month implementation project. We move fast so you start seeing results quickly."
    },
    {
      question: "Can it handle commercial lines or just personal?",
      answer: "Out-of-the-box, our standard packages (Pilot and After-Hours Rescue) focus on personal lines (auto, home, renter, tenant, condo, umbrella). Commercial lines are available in the Germania Elite Concierge and custom builds, which include 7+ commercial flows (BOP, commercial auto, liability, etc.). Tell us your needs and we'll configure accordingly."
    },
    {
      question: "What happens after hours if the AI can't answer something complex?",
      answer: "The AI captures all the information, sends an instant SMS confirmation to the prospect, and creates a detailed lead record for your team to follow up first thing in the morning. It can also book a specific callback time in your calendar. The goal is to keep the prospect engaged so they don't call a competitor while waiting for you to respond."
    }
  ]

  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions Agencies Ask Before Buying
          </h2>
          <p className="text-xl text-gray-700">
            Get answers to common concerns about AI automation
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center bg-primary-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-700 mb-6">
            Book a 15-minute call to get answers specific to your agency's situation.
          </p>
          <a href="#cta" className="btn-primary inline-block">
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  )
}
