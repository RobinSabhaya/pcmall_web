'use client';

import { useForm } from '@tanstack/react-form';

import Button from '@/components/ui/Common/Button/Button';

import { useUserContext } from '../../../../contexts/User/UserContext';
import { useUpdateUser } from '../../../../hooks';
import { editProfileSchema } from '../../../../validations/userSchema';
import Input from '../../../ui/Common/Input/Input';

interface FormValue {
  first_name?: string;
  last_name?: string;
  email?: string;
}

export default function ProfileForm() {
  // Tanstack query
  const { mutate: updateUserProfile } = useUpdateUser();
  const data = useUserContext();

  // pre-fill form
  const defaultValues: FormValue = {
    first_name: data?.user_profile?.first_name ?? '',
    last_name: data?.user_profile?.last_name ?? '',
    email: data?.email ?? '',
  };

  async function onSubmit({ value }: { value: FormValue }) {
    updateUserProfile(value);
  }

  const form = useForm({
    defaultValues,
    validators: {
      onChange: editProfileSchema,
    },
    onSubmit,
  });

  return (
    <div className="max-w-4xl">
      <h2 className="text-xl font-medium text-red-500 mb-8">
        Edit Your Profile
      </h2>

      <form
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form.Field name="first_name">
            {field => (
              <Input
                label="First name"
                type="text"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                placeholder="Enter first name"
              />
            )}
          </form.Field>
          <form.Field name="last_name">
            {field => (
              <Input
                label="Last name"
                type="text"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                placeholder="Enter last name"
              />
            )}
          </form.Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form.Field name="email">
            {field => (
              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                autoComplete="email"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>
        </div>

        {/* <div className="space-y-4">
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
        </div> */}

        <div className="flex justify-end gap-4 pt-6">
          <Button type="button" variant="ghost" onClick={() => {}}>
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
