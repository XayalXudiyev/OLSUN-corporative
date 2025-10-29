import { Clock, DollarSign, Puzzle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="bg-[#F9FAFB] py-20 relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1726649339367-c2577a28881b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3NlZCUyMG9mZmljZSUyMHdvcmtlcnxlbnwxfHx8fDE3NjE0ODYxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-[#111827] mb-16" style={{ fontSize: '36px', fontWeight: '600' }}>
          Korporativ Tədbir Təşkilatında Üzləşilən Problemlər
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-[#EF4444]" />
            </div>
            <h3 className="text-[#111827] mb-4" style={{ fontSize: '24px', fontWeight: '700' }}>
              10+ saat vaxt itkisi
            </h3>
            <p className="text-[#6B7280]" style={{ fontSize: '16px' }}>
              Məkanlara bir bir zəng edərək qiymətləri toplamaq
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#FEF3C7] flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h3 className="text-[#111827] mb-4" style={{ fontSize: '24px', fontWeight: '700' }}>
              Qiymət Şəffaflığı
            </h3>
            <p className="text-[#6B7280]" style={{ fontSize: '16px' }}>
              Gizli xərclər, əlavə ödənişlər, qiymət müqayisəsində çətinliklər
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-[#E5E7EB] shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center mb-6">
              <Puzzle className="w-6 h-6 text-[#EF4444]" />
            </div>
            <h3 className="text-[#111827] mb-4" style={{ fontSize: '24px', fontWeight: '700' }}>
              Parçalanmış Proseslər
            </h3>
            <p className="text-[#6B7280]" style={{ fontSize: '16px' }}>
              Bir neçə biznes sahibi ilə əlaqədə olmaq yorucu və vaxt aparan prosesdir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
