# ServQuik Marketing Website

High-converting marketing website for ServQuik targeting independent insurance brokers and agencies.

## Overview

This is a Next.js-based marketing website built to showcase ServQuik's two flagship AI automation offers:
1. **No-Risk 90-Day AI Pilot™** – Risk-free AI testing with guaranteed results
2. **After-Hours Revenue Rescue™** – 24/7 AI receptionist to capture missed leads

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Outfit (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
website/
├── app/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Header navigation
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── PainSection.tsx  # Problem/pain points
│   │   ├── OfferOverview.tsx # Two flagship offers overview
│   │   ├── PilotDeepDive.tsx # 90-Day Pilot deep dive + form
│   │   ├── AfterHoursDeepDive.tsx # After-Hours Rescue deep dive
│   │   ├── SocialProof.tsx  # Case studies & testimonials
│   │   ├── HowItWorks.tsx   # Implementation process
│   │   ├── Pricing.tsx      # All pricing tiers
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── FinalCTA.tsx     # Final conversion section
│   │   └── Footer.tsx       # Footer
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── public/                  # Static assets (add logos here)
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Customization & Integration

### 1. Add Your Logos

Place logo files in the `public/` directory and update:
- Navigation component: `app/components/Navigation.tsx`
- Footer component: `app/components/Footer.tsx`

### 2. Configure Scheduling (Calendly)

Update the Calendly URL in:
- **FinalCTA.tsx** (line ~32): Replace `https://calendly.com/servquik/demo`
- Any other CTA buttons linking to scheduling

### 3. Form Submissions

The pilot application form is in `app/components/PilotDeepDive.tsx`.

**Current behavior**: Shows alert on submission (line ~30).

**To integrate with your CRM/email system:**

```typescript
// In PilotDeepDive.tsx, update handleSubmit function:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  // Send to your CRM/email endpoint
  const response = await fetch('/api/submit-pilot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    // Redirect to thank you page or Calendly
    window.location.href = 'https://calendly.com/servquik/pilot-kickoff'
  }
}
```

Create API route at `app/api/submit-pilot/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  // Send to your CRM (example: HubSpot, Salesforce, Zapier webhook)
  // const response = await fetch('YOUR_CRM_ENDPOINT', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // })

  // Send email notification
  // await sendEmail({
  //   to: 'leads@servquik.com',
  //   subject: 'New Pilot Application',
  //   body: JSON.stringify(data, null, 2)
  // })

  return NextResponse.json({ success: true })
}
```

### 4. Analytics Integration

Add Google Analytics 4 to `app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 5. Contact Information

Update contact details in:
- **Footer.tsx**: Email and phone number (lines ~58-65)

### 6. Social Media Links

Update LinkedIn URL in:
- **Footer.tsx** (line ~69)

## Content Sources

All content is sourced from the ServQuik Notion Knowledge Base:
- **Company Overview**: `docs/notion-kb/company-overview.md`
- **Strategic Plan**: `docs/notion-kb/ServQuik-Strategic-Plan.md`
- **Power Offers**: `docs/notion-kb/ServQuik Power Offers.txt`

Pricing, ROI calculations, guarantees, and offer details match the Knowledge Base exactly.

## Key Features

### Conversion-Focused Design
- Clear value proposition in hero
- Problem/solution framework
- Social proof from Germania partnership and Buchanan Insurance case study
- Risk-reversal guarantees
- Multiple CTAs throughout the page

### Mobile-Responsive
- Fully responsive layout
- Mobile-first design approach
- Touch-friendly navigation and forms

### SEO-Optimized
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags and Open Graph data
- Fast loading with Next.js optimizations

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy with one click

### Other Platforms

Build the static site:
```bash
npm run build
```

The `out` directory contains the static files ready for deployment.

## Environment Variables

Create `.env.local` for local development:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Form Endpoints
NEXT_PUBLIC_CRM_ENDPOINT=https://your-crm-webhook-url

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/servquik/demo
```

## Support

For questions or issues:
- Email: hello@servquik.com
- GitHub Issues: [Create an issue](https://github.com/servquik/website/issues)

## License

© 2024 ServQuik. All rights reserved.
