'use client';

import { useMemo } from 'react';

import { useForm } from '@tanstack/react-form';

import Input from '@/components/ui/Common/Input';
import Select from '@/components/ui/Common/Select';

import {
  useUpdateUser,
  useUserDetail,
} from '../../../../hooks/query/User/useUserMutations';
import { billingFormSchema } from '../../../../validations/billingFormSchema';

import type { BillingFormDetails, BillingFormProps } from './BillingForm.type';
import { generateAddressFormat } from './utils';

export default function BillingForm({
  setSelectedAddress,
  selectedAddress,
}: BillingFormProps) {
  // Tanstack query
  const { mutate: updateAddress } = useUpdateUser();
  const { data: userDetailsData } = useUserDetail();

  const isUserPrimaryAddressExists = useMemo(
    () =>
      userDetailsData?.userData?.addresses.find(
        address => address.isPrimary === true
      ),
    [userDetailsData]
  );

  const defaultValues = {
    line1: '',
    line2: '',
    state: '',
    city: '',
    country: '',
  };

  function onSubmit({ value }: { value: BillingFormDetails }) {
    updateAddress(value);
  }

  const form = useForm({
    defaultValues,
    validators: {
      onChange: billingFormSchema,
    },
    onSubmit,
  });

  return (
    <>
      {!isUserPrimaryAddressExists ? (
        <form
          onSubmit={async e => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          <form.Field name="line1">
            {field => (
              <Input
                label="Line1*"
                placeholder="Enter your line1"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>

          <form.Field name="line2">
            {field => (
              <Input
                label="Line2"
                placeholder="Enter your line2"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>

          <form.Field name="state">
            {field => (
              <Input
                label="State*"
                placeholder="Enter your state"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>

          <form.Field name="city">
            {field => (
              <Input
                label="City*"
                placeholder="Enter your city"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>

          <form.Field name="country">
            {field => (
              <Input
                label="Country*"
                placeholder="Enter your country"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>

          {/* <label className="flex items-center space-x-3">
    <input
      type="checkbox"
      checked={formData.saveInfo}
      onChange={e => handleChange('saveInfo', e.target.checked)}
      className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-red-500"
    />
    <span className="text-sm text-gray-700">
      Save this information for faster check-out next time
    </span>
  </label> */}

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-dark-900/20"
          >
            Add address
          </button>
        </form>
      ) : (
        <>
          <Select
            options={
              userDetailsData?.userData?.addresses?.map(address => ({
                label: generateAddressFormat(address) as string,
                value: address._id as string,
              })) ?? [{ label: '', value: '' }]
            }
            value={selectedAddress}
            onChange={(optionValue: string) => {
              setSelectedAddress(() => optionValue);
            }}
            placeholder="Select your address"
          />
        </>
      )}
    </>
  );
}
