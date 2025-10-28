import { useState, useCallback } from 'react';
import { X, Building2, Plane, Users, Music, Check, Loader2 } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Label } from '../ui/label';
import { Dialog, DialogContent } from '../ui/dialog';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

interface PackageInfo {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  companySize: string;
  eventsPerYear: string;
  notes: string;
}

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string | null;
}

const packageInfo: Record<string, PackageInfo> = {
  'Məkan Paketləri': { name: 'Məkan Paketləri', icon: Building2, color: '#6366F1' },
  'Turizm Paketləri': { name: 'Turizm Paketləri', icon: Plane, color: '#3B82F6' },
  'Team Building Paketləri': { name: 'Team Building Paketləri', icon: Users, color: '#F59E0B' },
  'Əyləncə Paketləri': { name: 'Əyləncə Paketləri', icon: Music, color: '#EC4899' },
};

const companySizes = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '200+', label: '200+ employees' },
];

const eventFrequencies = [
  { value: '1-3', label: '1-3 events' },
  { value: '4-6', label: '4-6 events' },
  { value: '7-12', label: '7-12 events' },
  { value: '12+', label: '12+ events' },
];

const initialFormData: FormData = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  companySize: '',
  eventsPerYear: '',
  notes: '',
};

const validateForm = (formData: FormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
  if (!formData.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email';
  if (!formData.company.trim()) errors.company = 'Company name is required';
  if (!formData.companySize) errors.companySize = 'Please select company size';
  if (!formData.eventsPerYear) errors.eventsPerYear = 'Please select event frequency';

  return errors;
};

interface FormFieldProps {
  label: string;
  id: keyof FormData;
  value: string;
  onChange: (id: keyof FormData, value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, id, value, onChange, error, type = 'text', placeholder }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label} {type !== 'textarea' && '*'}</Label>
    {type === 'textarea' ? (
      <Textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        rows={4}
      />
    ) : (
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        className={error ? 'border-[#EF4444]' : ''}
      />
    )}
    {error && <p className="text-[#EF4444] text-xs">{error}</p>}
  </div>
);

interface SelectFieldProps {
  label: string;
  id: keyof FormData;
  value: string;
  onChange: (id: keyof FormData, value: string) => void;
  error?: string;
  options: { value: string; label: string }[];
  placeholder: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, id, value, onChange, error, options, placeholder }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label} *</Label>
    <Select value={value} onValueChange={(val) => onChange(id, val)}>
      <SelectTrigger className={error ? 'border-[#EF4444]' : ''}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-[#EF4444] text-xs">{error}</p>}
  </div>
);

export function DemoModal({ isOpen, onClose, selectedPackage }: DemoModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const packageData = selectedPackage ? packageInfo[selectedPackage] : null;
  const Icon = packageData?.icon;

  const handleChange = useCallback((id: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => handleClose(), 3000);
  };

  const handleClose = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setIsSuccess(false);
    onClose();
  }, [onClose]);

  if (!packageData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[540px] p-0">
        <Button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 z-10"
        >
          <X className="h-6 w-6 text-[#6B7280] hover:text-[#111827]" />
        </Button>

        <div className="p-12">
          {isSuccess ? (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-[#10B981] rounded-full flex items-center justify-center">
                  <Check className="w-12 h-12 text-white" strokeWidth={3} />
                </div>
              </div>
              <h2 className="text-[#111827] text-[28px] font-semibold">Demo Request Sent!</h2>
              <p className="text-[#6B7280] text-base">
                Thank you! We'll contact you within 24 hours to schedule your personalized demo for {packageData.name}.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                {Icon && (
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${packageData.color}1A` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: packageData.color }} />
                    </div>
                  </div>
                )}
                <h2 className="text-[#111827] mb-3 text-[28px] font-semibold">
                  Request Demo for {packageData.name}
                </h2>
                <p className="text-[#6B7280] text-sm">We'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <FormField
                  label="Full Name"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  placeholder="Your full name"
                />
                <FormField
                  label="Work Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="your.email@company.com"
                />
                <FormField
                  label="Company Name"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  error={errors.company}
                  placeholder="Your company"
                />
                <FormField
                  label="Phone Number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+994 10 417 71 32"
                />
                <SelectField
                  label="Company Size"
                  id="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  error={errors.companySize}
                  options={companySizes}
                  placeholder="Select company size"
                />
                <SelectField
                  label="How many events do you organize per year?"
                  id="eventsPerYear"
                  value={formData.eventsPerYear}
                  onChange={handleChange}
                  error={errors.eventsPerYear}
                  options={eventFrequencies}
                  placeholder="Select frequency"
                />
                <FormField
                  label="Tell us about your needs"
                  id="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  type="textarea"
                  placeholder="Any specific requirements or questions..."
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-4 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Demo Request'
                  )}
                </button>
                <p className="text-center text-[#6B7280] text-xs">We'll get back to you within 24 hours. No spam, ever.</p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}