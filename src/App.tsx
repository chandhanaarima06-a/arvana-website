import { useState } from 'react';
import './App.css';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { BusinessProblems } from '@/components/sections/CredibilityStrip';
import { Solutions } from '@/components/sections/Solutions';
import { IndustrySolutions } from '@/components/sections/IndustrySolutions';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyArvana } from '@/components/sections/WhyArvana';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';

export default function App() {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <div className="min-h-screen bg-arvana-black text-white">
      <Navbar />
      <Hero />
      <BusinessProblems />
      <Solutions />
      <IndustrySolutions />
      <HowItWorks />
      <WhyArvana />
      <FAQ />
      <CTASection onViewFaqs={() => setShowFaq(true)} />
      {showFaq && <FAQ />}
      <Footer />

      {/* Floating WhatsApp Call Button */}
      <a
        href="https://wa.me/917708431829?text=Hi%20ARVANA%2C%20I%20am%20interested%20in%20your%20AI%20automation%20services.%20Can%20you%20share%20more%20information%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-lg bg-arvana-charcoal flex items-center justify-center border border-white/10 text-arvana-lime hover:bg-white/5 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2.5v-10H13v2.5h-2.5V12h2.5v-2.5c0-2.8 1.6-4.8 4-4.8s4 2 4 4.8v3.5H14v2.5h2.5v10H13zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
        </svg>
      </a>
    </div>
  );
}
