import { Building2, Plane, Users, Music, Check } from 'lucide-react';

interface PackagesSectionProps {
  selectedPackage: string | null;
  onSelectPackage: (packageId: string) => void;
}

const packages = [
  {
    id: 'venue',
    title: 'Məkan Paketləri',
    description: 'Otellər, saraylar, restoranlar, konfrans zalları şəffaf rəylər ilə',
    icon: Building2,
    iconColor: '#6366F1',
    image: 'https://images.unsplash.com/photo-1505845753232-f74a87b62db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjByb29tfGVufDF8fHx8MTc2MTUwMjU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Premium Məkanlar',
      'Tutum: 50-200 qonaqlar',
      'Çevik bronlama şərtləri'
    ],
  },
  {
    id: 'tourism',
    title: 'Turizm Paketləri',
    description: 'Bizim turistik tərəfdaşlarımızla ölkədaxili və ölkəxarici korporativ səyahətlər',
    icon: Plane,
    iconColor: '#3B82F6',
    image: 'https://images.unsplash.com/photo-1666065972478-d8eae578ec92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTU2NzkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      '10+ səyahət agentlikləri',
      'Yerli və xarici səyahətlər',
      'Hamısı birində eksklüziv seçimlər',
    ],
  },
  {
    id: 'team-building',
    title: 'Team Building Paketləri',
    description: 'Komanda əlaqəsini gücləndirən müxtəlif aktivitelərin peşəkar təşkilatçılar',
    icon: Users,
    iconColor: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1758225351177-1069bdd4ce1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwYnVpbGRpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2MTUyNjA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      '15+ tədbir təşkilatçıları ',
      'Qapalı və açıq məkanlarda seçimlər ',
      'Bütün proses boyu peşəkar dəstək',
    ],
  },
  {
    id: 'entertainment',
    title: 'Əyləncə Paketləri',
    description: 'Canlı musiqi, DJ-lər və əyləncə proqramları',
    icon: Music,
    iconColor: '#EC4899',
    image: 'https://images.unsplash.com/photo-1651418481287-20819065dc68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBwZXJmb3JtYW5jZSUyMGV2ZW50fGVufDF8fHx8MTc2MTU2NzkwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Məşhur müğənnilər',
      'Peşəkar avadanlıqlar',
      'Tədbir idarəedilməsi',
    ],
  },
];

export function PackagesSection({ selectedPackage, onSelectPackage }: PackagesSectionProps) {
  return (
    <section id="packages" className="bg-[#F9FAFB] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-[#111827] mb-4" style={{ fontSize: '36px', fontWeight: '600' }}>
          Sizə ən uyğun olan xidmət paketin seçin
        </h2>

        <p className="text-center text-[#6B7280] mb-16" style={{ fontSize: '18px' }}>
          Otellər, saraylar, restoranlar, konfrans zalları şəffaf rəylər ilə.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const isSelected = selectedPackage === pkg.title;

            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg.title)}
                className={`
                  bg-white rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-300 relative
                  ${isSelected
                    ? 'border-4 border-[#6366F1] shadow-lg scale-[1.03]'
                    : 'border-3 border-[#E5E7EB] hover:border-[#CBD5E1] hover:shadow-md'
                  }
                `}
                style={{ minHeight: '420px' }}
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${pkg.iconColor}1A` }}
                    >
                      <Icon className="w-14 h-14" style={{ color: pkg.iconColor }} />
                    </div>
                  </div>

                  <h3 className="text-center text-[#111827] mb-3" style={{ fontSize: '24px', fontWeight: '700' }}>
                    {pkg.title}
                  </h3>

                  <p className="text-center text-[#6B7280] mb-6" style={{ fontSize: '16px' }}>
                    {pkg.description}
                  </p>

                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="text-[#6B7280] flex items-start" style={{ fontSize: '14px' }}>
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isSelected && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg animate-in fade-in zoom-in duration-200">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
