'use client';

import { useState } from 'react';

import { useForm } from '@tanstack/react-form';
import axios from 'axios';

import Button from '@/components/ui/Common/Button/Button';

import { useUserContext } from '../../../../contexts/User/UserContext';
import { useUpdateUser } from '../../../../hooks';
import { useUploadFile } from '../../../../hooks/query/File/useFileMutations';
import { editProfileSchema } from '../../../../validations/userSchema';
import { Error } from '../../../ui/Common/Error';
import Input from '../../../ui/Common/Input/Input';
import ProfilePicker from '../../../ui/Common/ProfilePicker/ProfilePicker';

import type { FormValue } from './ProfileForm.type';

// TODO: implement password change functionality
export default function ProfileForm() {
  // state
  const [file, setFile] = useState<File>();

  // Tanstack query
  const { mutate: updateUserProfile } = useUpdateUser();
  const { mutate: uploadFile, data: fileData } = useUploadFile();
  const data = useUserContext();

  // pre-fill form
  const defaultValues: FormValue = {
    first_name: data?.user_profile?.first_name ?? '',
    last_name: data?.user_profile?.last_name ?? '',
    email: data?.email ?? '',
  };

  async function onSubmit({ value }: { value: FormValue }) {
    if (fileData) {
      // Put the image in pre-signed URL
      const data = await axios.put(fileData.data.url, file);

      if (data.status === 200 && file) {
        value['profile_picture'] = file.name;
      }
    }
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
      <h2 className="text-xl font-medium text-brand-primary mb-3">
        Edit Your Profile
      </h2>

      <div className="flex justify-center items-center w-full mb-8">
        <ProfilePicker
          name={defaultValues.first_name ?? 'User'}
          currentImage={data?.user_profile?.profile_picture ?? null}
          onImageChange={file => {
            uploadFile({
              fileName: file.name,
            });

            setFile(file);
          }}
        />
      </div>

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
              <div>
                <Input
                  label="First name"
                  type="text"
                  value={field.state.value}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder="Enter first name"
                />
                <Error field={field} />
              </div>
            )}
          </form.Field>
          <form.Field name="last_name">
            {field => (
              <div>
                <Input
                  label="Last name"
                  type="text"
                  value={field.state.value}
                  onChange={e => field.handleChange(e.target.value)}
                  placeholder="Enter last name"
                />
                <Error field={field} />
              </div>
            )}
          </form.Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form.Field name="email">
            {field => (
              <div>
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
                <Error field={field} />
              </div>
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
          <Button type="button" variant="ghost">
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
