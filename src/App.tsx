import React, { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChallengesSolution } from './components/ChallengesSolution';
import { ModulesSection } from './components/ModulesSection';
import { IntegrationFlow } from './components/IntegrationFlow';
import { SectorsSection } from './components/SectorsSection';
import { ReportingSecuritySection } from './components/ReportingSecuritySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoRequestModal } from './components/DemoRequestModal';
import { PrivacyModal } from './components/PrivacyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { IntroExperience } from './components/IntroExperience';
import { LanguageProvider } from './i18n/LanguageContext';

const INTRO_DISABLED_PARAM = 'intro';

function shouldPlayIntro(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const params = new URLSearchParams(window.location.search);
    /* ?intro=0 is the only way to open the site without the film */
    if (params.get(INTRO_DISABLED_PARAM) === '0') return false;
    return true;
  } catch {
    return true;
  }
}

const Site: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [initialSectorForDemo, setInitialSectorForDemo] = useState<string | undefined>(undefined);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [introVisible, setIntroVisible] = useState<boolean>(shouldPlayIntro);
  const [introKey, setIntroKey] = useState(0);

  const handleOpenDemo = (sector?: string) => {
    setInitialSectorForDemo(sector);
    setIsDemoModalOpen(true);
  };

  const finishIntro = useCallback(() => {
    setIntroVisible(false);
  }, []);

  const replayIntro = useCallback(() => {
    setIntroKey((key) => key + 1);
    setIntroVisible(true);
  }, []);

  /* Keep the intro centred even when the page was restored at a deep scroll position. */
  useEffect(() => {
    if (introVisible) {
      window.scrollTo(0, 0);
    }
  }, [introVisible]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-700 selection:text-white">
      {introVisible && <IntroExperience key={introKey} onFinish={finishIntro} />}

      {/* Top 3-Zone Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Landmark */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenDemo={() => handleOpenDemo()} />

        {/* 2. Operational Challenges & Solutions */}
        <ChallengesSolution />

        {/* 3. Comprehensive Modules Catalog */}
        <ModulesSection onOpenDemo={handleOpenDemo} />

        {/* 4. Centralized Interconnection & Workflows */}
        <IntegrationFlow />

        {/* 5. Business Sectors & Industries */}
        <SectorsSection onOpenDemo={handleOpenDemo} />

        {/* 6. Executive Reporting & Security / Governance */}
        <ReportingSecuritySection />

        {/* 7. Final Lead Capture & Demo Form */}
        <ContactSection initialSector={initialSectorForDemo} />
      </main>

      {/* 8. Corporate Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenDemo={handleOpenDemo}
        onReplayIntro={replayIntro}
      />

      {/* Interactive Modals */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialSector={initialSectorForDemo}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
