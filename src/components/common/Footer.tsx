import { Building2, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111827] text-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-white" />
              <span className="text-white" style={{ fontSize: '20px', fontWeight: '700' }}>
                Olsun Events
              </span>
            </div>
            <p className="text-[#F9FAFB]" style={{ fontSize: '14px', opacity: 0.8 }}>
              Azərbaycanda korporativ tədbirlərin planlamasını rahatlaşdırırıq
            </p>
            <div className="flex gap-4 pt-2">
              <a target='_blank' href="https://www.linkedin.com/company/olsun-events/" className="text-white hover:text-[#6366F1] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a target='_blank' href="https://www.instagram.com/olsun_events" className="text-white hover:text-[#6366F1] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white" style={{ fontSize: '16px', fontWeight: '600' }}>
              Tez Keçidlər
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F9FAFB] hover:text-[#6366F1] transition-colors" style={{ fontSize: '14px' }}>
                  Haqqımızda
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F9FAFB] hover:text-[#6366F1] transition-colors" style={{ fontSize: '14px' }}>
                  Xidmətlərimiz
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F9FAFB] hover:text-[#6366F1] transition-colors" style={{ fontSize: '14px' }}>
                  Bizimlə Əlaqə
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F9FAFB] hover:text-[#6366F1] transition-colors" style={{ fontSize: '14px' }}>
                  Gizlilik Siyasəti
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white" style={{ fontSize: '16px', fontWeight: '600' }}>
              Əlaqə
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                <a href="mailto:info@olsunevents.com" className="text-[#F9FAFB] hover:text-[#6366F1] transition-colors" style={{ fontSize: '14px' }}>
                  info@olsunevents.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-[#F9FAFB]" style={{ fontSize: '14px' }}>
                  <a
                    href="tel:+994104177132"
                    className="text-xs sm:text-base text-white hover:text-[#D4AF37] transition-colors"
                  >
                    +994 10 417 71 32
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-[#F9FAFB]" style={{ fontSize: '14px' }}>
                  Bakı, Azərbaycan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#374151] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F9FAFB]" style={{ fontSize: '14px', opacity: 0.8 }}>
            © {new Date().getFullYear()} Olsun Events. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#374151] rounded-md">
            <span className="text-[#F9FAFB]" style={{ fontSize: '12px' }}>
              Mədəniyyət Nazirliyi tərəfindən dəstəklənir
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
