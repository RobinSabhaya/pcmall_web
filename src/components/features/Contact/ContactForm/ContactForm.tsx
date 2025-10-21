'use client';

import { useState } from 'react';

import Button from '@/components/ui/Common/Button/Button';
import Input from '@/components/ui/Common/Input/Input';

import TextArea from '../../../ui/Common/TextArea/TextArea';
import type {
  ContactFormData,
  ContactFormProps,
} from '../ContactInfo/Contact.type';

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit?.(formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange =
    (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange('name')}
          error={errors.name as string}
          className="bg-gray-50"
        />
        <Input
          type="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email as string}
          className="bg-gray-50"
        />
        <Input
          type="tel"
          placeholder="Your Phone *"
          value={formData.phone}
          onChange={handleChange('phone')}
          error={errors.phone as string}
          className="bg-gray-50"
        />
      </div>

      <div>
        <TextArea
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange('message')}
          rows={6}
          error={errors.message as string}
          className="bg-gray-50"
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting} className="px-8 py-3">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
