export interface BillingFormData {
  firstName: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  townCity: string;
  phoneNumber: string;
  emailAddress: string;
  saveInfo: boolean;
}

export interface BillingFormProps {
  onSubmit: (data: BillingFormData) => void;
  initialData?: Partial<BillingFormData>;
}
