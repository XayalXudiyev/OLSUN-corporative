"use client";

import { DemoButton } from "@/components/common/DemoButton";
import { DemoModal } from "@/components/common/DemoModal";
import { Footer } from "@/components/common/Footer";
import { HeroSection } from "@/components/common/HeroSection";
import { PackagesSection } from "@/components/common/PackagesSection";
import { ProblemSection } from "@/components/common/ProblemSection";
import { SolutionSection } from "@/components/common/SolutionSection";
import { useRef, useState } from "react";

export default function Home() {

  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const packagesRef = useRef<HTMLDivElement>(null);

  const handleScrollToPackages = () => {
    packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  const handleOpenModal = () => {
    if (selectedPackage) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onScrollToPackages={handleScrollToPackages} />
      <ProblemSection />
      <SolutionSection />

      <div ref={packagesRef}>
        <PackagesSection
          selectedPackage={selectedPackage}
          onSelectPackage={handleSelectPackage}
        />
      </div>

      <DemoButton
        isEnabled={selectedPackage !== null}
        onClick={handleOpenModal}
        selectedPackage={selectedPackage || undefined}
      />

      <Footer />

      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </div>

  );
}
