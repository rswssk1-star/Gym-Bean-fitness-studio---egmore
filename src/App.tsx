/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ProgramsSection from './components/ProgramsSection';
import WhyRioSection from './components/WhyRioSection';
import TrainersSection from './components/TrainersSection';
import MembershipSection from './components/MembershipSection';
import FitnessCalculator from './components/FitnessCalculator';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProgramModal from './components/ProgramModal';
import VideoModal from './components/VideoModal';
import JoinModal from './components/JoinModal';
import FloatingActions from './components/FloatingActions';
import { Program, Trainer } from './types';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [joinModalTopic, setJoinModalTopic] = useState<string>('Membership & Free Pass');

  const handleOpenJoinModal = (topic?: string) => {
    if (topic) {
      setJoinModalTopic(topic);
    } else {
      setJoinModalTopic('Membership & Free Pass');
    }
    setIsJoinModalOpen(true);
  };

  const handleSelectProgram = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleProgramInquiry = (programName: string) => {
    setJoinModalTopic(`Program: ${programName}`);
    setIsJoinModalOpen(true);
  };

  const handleBookTrainer = (trainer: Trainer) => {
    setJoinModalTopic(`Personal Training with ${trainer.name}`);
    setIsJoinModalOpen(true);
  };

  const handleCalculatorRecommendation = (programName: string) => {
    setJoinModalTopic(`Calculator Plan: ${programName}`);
    setIsJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#031B36] text-white flex flex-col selection:bg-[#1687F5] selection:text-white">
      {/* Top Sticky Glass Navigation */}
      <Navbar onOpenJoinModal={() => handleOpenJoinModal('General Membership')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Flagship Hero Section */}
        <Hero
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
          onOpenJoinModal={() => handleOpenJoinModal('Free 1-Day Pass')}
        />

        {/* Section 2: Intro / Train With Purpose */}
        <IntroSection onOpenJoinModal={() => handleOpenJoinModal('Gym Tour & Assessment')} />

        {/* Section 3: Programs / Built For Your Goals */}
        <ProgramsSection
          onSelectProgram={handleSelectProgram}
          onOpenJoinModal={() => handleOpenJoinModal('Program Consultation')}
        />

        {/* Section 4: Why RIO Fitness */}
        <WhyRioSection onOpenJoinModal={() => handleOpenJoinModal('General Membership')} />

        {/* Section 5: Meet Your Fitness Team */}
        <TrainersSection onBookTrainer={handleBookTrainer} />

        {/* Section 6: Membership Options & CTA */}
        <MembershipSection onOpenJoinModal={handleOpenJoinModal} />

        {/* Interactive Calorie & BMI Target Calculator */}
        <FitnessCalculator onSelectRecommendedProgram={handleCalculatorRecommendation} />

        {/* Section 7: Location & Accessibility in Chintadripet Chennai */}
        <LocationSection />

        {/* Section 8: Contact Form & Lead Generation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onSelectForInquiry={handleProgramInquiry}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenJoinModal={() => handleOpenJoinModal('Free 1-Day Pass')}
      />

      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        defaultPlanOrProgram={joinModalTopic}
      />

      {/* Mobile Floating Quick Call & WhatsApp bar */}
      <FloatingActions onOpenJoinModal={() => handleOpenJoinModal('Quick Mobile Pass')} />
    </div>
  );
}
