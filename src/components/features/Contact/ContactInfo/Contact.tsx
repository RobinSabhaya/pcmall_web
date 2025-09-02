import BreadCrumb from '@/components/ui/BreadCrumb/BreadCrumb';

import ContactForm from '../ContactForm/ContactForm';

import type { ContactProps } from './Contact.type';
import ContactInfo from './ContactInfo';

const defaultContactInfo = {
  phone: '+88016111222222',
  email: 'customer@exclusive.com',
  supportEmail: 'support@exclusive.com',
  availability: 'We are available 24/7, 7 days a week.',
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/' },
];

export default function Contact({
  contactInfo = defaultContactInfo,
}: ContactProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadCrumb breadCrumbList={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <ContactInfo contactInfo={contactInfo} />
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
