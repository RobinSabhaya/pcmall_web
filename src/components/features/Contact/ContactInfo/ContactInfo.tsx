import type { ContactInfoProps } from './Contact.type';

export default function ContactInfo({ contactInfo }: ContactInfoProps) {
  return (
    <div className="space-y-8">
      {/* Call To Us Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Call To Us</h3>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>{contactInfo.availability}</p>
          <p>Phone: {contactInfo.phone}</p>
        </div>

        <hr className="border-gray-200" />
      </div>

      {/* Write To US Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Write To US</h3>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: {contactInfo.email}</p>
          <p>Emails: {contactInfo.supportEmail}</p>
        </div>
      </div>
    </div>
  );
}
