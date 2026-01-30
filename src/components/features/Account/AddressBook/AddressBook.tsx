import { useState } from 'react';

import { useUserDetail } from '../../../../hooks';
import { Button } from '../../../ui/Common';

import AddressList from './AddressList/AddressList';

export default function AddressBook() {
  // state
  const [showAddAddressModal, setShowAddAddressModal] =
    useState<boolean>(false);

  // Tanstack query
  const { data, isLoading } = useUserDetail();

  const addressList = data?.userData.addresses;

  // callbacks
  function onAddAddress() {
    setShowAddAddressModal(!showAddAddressModal);
  }

  return (
    <>
      <main className="max-w-4xl">
        <div className="flex justify-between items-center flex-wrap mb-3">
          <h2 className="text-xl font-medium text-brand-primary">
            Saved addresses
          </h2>
          <Button variant="primary" size="sm" onClick={onAddAddress}>
            Add new address
          </Button>
        </div>

        {/* Address List */}
        <AddressList
          showAddAddressModal={showAddAddressModal}
          setShowAddAddressModal={setShowAddAddressModal}
          addressList={addressList ?? []}
          isLoading={isLoading}
        />
      </main>
    </>
  );
}
