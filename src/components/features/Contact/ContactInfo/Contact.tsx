import BreadCrumb from '@/components/ui/Common/BreadCrumb/BreadCrumb';

import ContactForm from '../ContactForm/ContactForm';

import type { ContactProps } from './Contact.type';
import ContactInfo from './ContactInfo';
import { breadcrumbItems, defaultContactInfo } from './utils';

export default function Contact({
  contactInfo = defaultContactInfo,
}: ContactProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
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
