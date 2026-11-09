import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { CredibilityStrip } from '@/components/sections/CredibilityStrip';
import { Solutions } from '@/components/sections/Solutions';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { WhyArvana } from '@/components/sections/WhyArvana';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/layout/Footer';

export default function App() {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <div className="min-h-screen bg-arvana-black text-white">
      <Navbar />
      <Hero />
      <CredibilityStrip />
      <Solutions />
      <div className="section-divider" />
      <HowItWorks />
      <WhyArvana />
      <CTASection onViewFaqs={() => setShowFaq(true)} />
      {showFaq && <FAQ />}
      <Footer />

      {/* Floating WhatsApp Call Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <a
          href="https://wa.me/917708431829?text=Hi%20ARVANA%2C%20I%20am%20interested%20in%20your%20AI%20automation%20services.%20Can%20you%20share%20more%20information%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 hover:scale-110 transition-all duration-300 border-2 border-white/10"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2.5v-10H13v2.5h-2.5V12h2.5v-2.5c0-2.8 1.6-4.8 4-4.8s4 2 4 4.8v3.5H14v2.5h2.5v10H13zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
