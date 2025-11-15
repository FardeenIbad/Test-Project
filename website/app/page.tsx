import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PainSection from './components/PainSection'
import OfferOverview from './components/OfferOverview'
import PilotDeepDive from './components/PilotDeepDive'
import AfterHoursDeepDive from './components/AfterHoursDeepDive'
import SocialProof from './components/SocialProof'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <PainSection />
      <OfferOverview />
      <PilotDeepDive />
      <AfterHoursDeepDive />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
