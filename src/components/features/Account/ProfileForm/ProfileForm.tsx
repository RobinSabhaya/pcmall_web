'use client';

import { useState } from 'react';

import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input';

import type { ProfileData } from './ProfileForm.type';
import { initialData } from './sampleData';

export default function ProfileForm() {
  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [errors, setErrors] = useState<Partial<ProfileData>>({});

  const handleChange =
    (field: keyof ProfileData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    };

  const validateForm = (): boolean => {
    const newErrors: Partial<ProfileData> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log('Form submitted:', formData);
    }
  };

  const handleCancel = () => {
    setFormData(initialData);
    setErrors({});
  };

  return (
    <div className="max-w-4xl">
      <h2 className="text-xl font-medium text-red-500 mb-8">
        Edit Your Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            error={errors.firstName as string}
            placeholder="Md"
          />
          <Input
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            error={errors.lastName as string}
            placeholder="Rimel"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            error={errors.email as string}
            placeholder="rimel1111@gmail.com"
          />
          <Input
            label="Address"
            value={formData.address}
            onChange={handleChange('address')}
            error={errors.address as string}
            placeholder="Kingston, 5236, United State"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Password Changes
          </h3>
          <Input
            label="Current Password"
            type="password"
            value={formData.currentPassword}
            onChange={handleChange('currentPassword')}
            error={errors.currentPassword as string}
            placeholder="Current Password"
          />
          <Input
            label="New Password"
            type="password"
            value={formData.newPassword}
            onChange={handleChange('newPassword')}
            error={errors.newPassword as string}
            placeholder="New Password"
          />
          <Input
            label="Confirm New Password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange('confirmPassword')}
            error={errors.confirmPassword as string}
            placeholder="Confirm New Password"
          />
        </div>

        <div className="flex justify-end gap-4 pt-6">
          <Button type="button" variant="ghost" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
