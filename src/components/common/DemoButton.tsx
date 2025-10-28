import ContactModal from "./ContactModal";

interface DemoButtonProps {
  isEnabled: boolean;
  onClick: () => void;
  selectedPackage?: string;
}

export function DemoButton({ isEnabled, selectedPackage }: DemoButtonProps) {
  return (
    <div className="bg-white pb-20 flex flex-col items-center">
      <ContactModal selectedPackage={selectedPackage} />

      {!isEnabled && (
        <p className="mt-4 text-[#6B7280]" style={{ fontSize: '14px' }}>
          Demoya Müraciət üçün yuxarıda sizə uyğun paket seçin
        </p>
      )}
    </div>
  );
}
