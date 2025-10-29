import { Tag, Shield, Clock } from 'lucide-react';

export function SolutionSection() {
  return (
    <section className="bg-white py-20 relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1690192123455-6337e6db4179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY2VsZWJyYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzYxNDk3ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-[#111827] mb-6" style={{ fontSize: '36px', fontWeight: '600' }}>
          Olsun Həll Yolu
        </h2>

        <p className="text-center text-[#6B7280] mb-16 max-w-4xl mx-auto" style={{ fontSize: '20px' }}>
          Bir abunəlik. 4 fərqli kateqoriya. Limitsiz endirimli təkliflər.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border-2 border-[#E5E7EB] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
              <Tag className="w-5 h-5 text-[#10B981]" />
            </div>
            <h3 className="text-[#111827] mb-4" style={{ fontSize: '24px', fontWeight: '700' }}>
              Xərcə 10-15% Qənaət
            </h3>
            <p className="text-[#6B7280]" style={{ fontSize: '16px' }}>
              Bütün sifarişlərdə əvvəlcədən razılaşdırılmış korporativ endirimlər
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-[#E5E7EB] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <Shield className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <h3 className="text-[#111827] mb-4" style={{ fontSize: '24px', fontWeight: '700' }}>
              Etibarlı Tərəfdaşlar
            </h3>
            <p className="text-[#6B7280]" style={{ fontSize: '16px' }}>
              Yalnız keyfiyyətə zəmanət verən məkanlar və xidmət təminatçıları
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-[#E5E7EB] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}>
              <Clock className="w-5 h-5 text-[#6366F1]" />
            </div>
            <h3 className="text-[#111827] mb-4" style={{ fontSize: '24px', fontWeight: '700' }}>
              10+ saat qabağa düşün
            </h3>
            <p className="text-[#6B7280]" style={{ fontSize: '16px' }}>
              Rahat müqayisə edərək sifariş edin - bütün xidmətlər bir platformada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
