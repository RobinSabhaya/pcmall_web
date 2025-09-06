'use client';

import { useState } from 'react';

import Input from '@/components/ui/Input';

import type { BillingFormData, BillingFormProps } from './BillingForm.type';

export default function BillingForm({
  onSubmit,
  initialData,
}: BillingFormProps) {
  const [formData, setFormData] = useState<BillingFormData>({
    firstName: initialData?.firstName ?? '',
    companyName: initialData?.companyName ?? '',
    streetAddress: initialData?.streetAddress ?? '',
    apartment: initialData?.apartment ?? '',
    townCity: initialData?.townCity ?? '',
    phoneNumber: initialData?.phoneNumber ?? '',
    emailAddress: initialData?.emailAddress ?? '',
    saveInfo: initialData?.saveInfo ?? false,
  });

  const handleChange = (
    field: keyof BillingFormData,
    value: string | boolean
  ) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onSubmit(newData);
  };

  return (
    <div className="space-y-6">
      <Input
        label="First Name*"
        value={formData.firstName}
        onChange={e => handleChange('firstName', e.target.value)}
        required
      />

      <Input
        label="Company Name"
        value={formData.companyName}
        onChange={e => handleChange('companyName', e.target.value)}
      />

      <Input
        label="Street Address*"
        value={formData.streetAddress}
        onChange={e => handleChange('streetAddress', e.target.value)}
        required
      />

      <Input
        label="Apartment, floor, etc. (optional)"
        value={formData.apartment}
        onChange={e => handleChange('apartment', e.target.value)}
      />

      <Input
        label="Town/City*"
        value={formData.townCity}
        onChange={e => handleChange('townCity', e.target.value)}
        required
      />

      <Input
        label="Phone Number*"
        type="tel"
        value={formData.phoneNumber}
        onChange={e => handleChange('phoneNumber', e.target.value)}
        required
      />

      <Input
        label="Email Address*"
        type="email"
        value={formData.emailAddress}
        onChange={e => handleChange('emailAddress', e.target.value)}
        required
      />

      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={formData.saveInfo}
          onChange={e => handleChange('saveInfo', e.target.checked)}
          className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
        />
        <span className="text-sm text-gray-700">
          Save this information for faster check-out next time
        </span>
      </label>
    </div>
  );
}
