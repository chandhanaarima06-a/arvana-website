import './App.css';
import { Navbar } from '@/components/layout/Navbar';
import { CinematicBackground } from '@/components/background/CinematicBackground';
import { Hero } from '@/components/hero/Hero';
import { BusinessTransformation } from '@/components/sections/BusinessTransformation';
import { StillHandlingManually } from '@/components/sections/ProblemCards';
import { Workflow } from '@/components/sections/Workflow';
import { AutomationFeatures } from '@/components/sections/AutomationFeatures';
import { IndustryApplications } from '@/components/sections/IndustryApplications';
import { GetStarted } from '@/components/sections/GetStarted';
import { Footer } from '@/components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-arvana-black text-white">
      <CinematicBackground />
      <Navbar />
      <Hero />
      <BusinessTransformation />
      <StillHandlingManually />
      <Workflow />
      <AutomationFeatures />
      <IndustryApplications />
      <GetStarted />
      <Footer />

      {/* Floating WhatsApp Call Button */}
      <a
        href="https://wa.me/917708431829?text=Hi%20ARVANA%2C%20I%20am%20interested%20in%20your%20AI%20automation%20services.%20Can%20you%20share%20more%20information%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-lg bg-arvana-gold flex items-center justify-center border border-white/10 text-arvana-black hover:bg-gold-dim hover:text-white transition-colors shadow-[0_0_24px_rgba(212,175,55,0.45)]"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2.5v-10H13v2.5h-2.5V12h2.5v-2.5c0-2.8 1.6-4.8 4-4.8s4 2 4 4.8v3.5H14v2.5h2.5v10H13zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
        </svg>
      </a>
    </div>
  );
}
