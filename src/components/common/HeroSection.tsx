import { Building2 } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  onScrollToPackages: () => void;
}

export function HeroSection({ onScrollToPackages }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-[#6366F1]" />
              <span className="text-[#6366F1]" style={{ fontSize: '24px', fontWeight: '700' }}>
                Olsun Events
              </span>
            </div>

            <h1 className="text-[#111827]" style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.1' }}>
              Korporativ Vaxtınıza Qənaət Olsun!
            </h1>

            <h2 className="text-[#6B7280]" style={{ fontSize: '24px', fontWeight: '400' }}>
              Eksklüziv korporativ xidmət paketlərini əldə edin. Məkanlar, əyləncə proqramları, team building və turizm - hamısı birində
            </h2>

            <div className="bg-[#F9FAFB] border-2 border-[#10B981] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-[#111827]" style={{ fontSize: '16px' }}>
                    ✓ Hər bron üçün 10-15% endirim.

                  </p>
                  <p className="text-[#111827]" style={{ fontSize: '16px' }}>
                    ✓ Etibarlı tərəfdaşlara birbaşa çıxış.
                  </p>
                  <p className="text-[#111827]" style={{ fontSize: '16px' }}>
                    ✓ Rahat abunəlik imkanları.
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={onScrollToPackages}
              className="bg-[#6366F1] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:bg-[#5558E3] hover:shadow-lg"
              style={{ fontSize: '18px', fontWeight: '700' }}
            >
              Xidmət Paketləri
            </Button>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzYxNTMzNDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Corporate networking event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
