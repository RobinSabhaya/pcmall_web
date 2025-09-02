export interface ContactInfo {
  phone: string;
  email: string;
  supportEmail: string;
  availability: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactProps {
  contactInfo?: ContactInfo;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

export interface ContactInfoProps {
  contactInfo: ContactInfo;
}
