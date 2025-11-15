import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Receptionist for Insurance Brokers | 24/7 Lead Capture | ServQuik',
  description: 'Stop losing after-hours quotes. ServQuik\'s AI receptionist captures every lead 24/7 across phone, chat, and SMS. Risk-free 90-day pilot for insurance agencies. Trusted by Germania brokers.',
  keywords: ['AI for insurance brokers', 'AI receptionist insurance agency', 'After-hours call capture insurance', 'Insurance agency automation', 'AI CSR insurance', '24/7 insurance quote capture'],
  authors: [{ name: 'ServQuik' }],
  openGraph: {
    title: 'AI Receptionist for Insurance Brokers | 24/7 Lead Capture | ServQuik',
    description: 'Stop losing after-hours quotes. ServQuik\'s AI receptionist captures every lead 24/7 across phone, chat, and SMS. Risk-free 90-day pilot for insurance agencies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receptionist for Insurance Brokers | 24/7 Lead Capture | ServQuik',
    description: 'Stop losing after-hours quotes. ServQuik\'s AI receptionist captures every lead 24/7 across phone, chat, and SMS.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
