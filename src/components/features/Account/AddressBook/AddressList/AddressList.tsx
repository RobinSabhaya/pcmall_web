'use client';

import { useState } from 'react';

import { MapPin } from 'lucide-react';

import Button from '@/components/ui/Common/Button/Button';

import Loading from '../../../../../app/(main)/loading';
import { useDeleteAddress } from '../../../../../hooks';
import AddressCard from '../AddressCard/AddressCard';
import type { Address } from '../AddressCard/AddressCard.type';
import AddressModal from '../AddressModal/AddressModal';

import type { AddressListProp } from './AddressList.type';

const AddressList = ({
  showAddAddressModal,
  addressList,
  isLoading,
  setShowAddAddressModal,
}: AddressListProp) => {
  // state
  const [address, setAddress] = useState<Address | null>(null);

  // Tanstack query
  const { mutate: onDeleteAddress } = useDeleteAddress();

  // callbacks
  function onAddAddress() {
    setShowAddAddressModal(!showAddAddressModal);
  }

  function onEdit({ address }: { address: Address }) {
    onAddAddress();
    setAddress(address);
  }

  function onDelete({ address }: { address: Address }) {
    onDeleteAddress({ addressId: address._id });
  }

  // Loading state
  if (isLoading) return <Loading />;

  return (
    <div className="w-full">
      {addressList && addressList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addressList.map(address => (
            <AddressCard
              key={address._id}
              address={address}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-light-200 rounded-lg border border-light-300">
          <div className="mb-4 p-4 bg-white rounded-full">
            <MapPin className="w-8 h-8 text-dark-500" />
          </div>
          <h3 className="text-lg font-semibold text-dark-900 mb-2">
            No addresses saved
          </h3>
          <p className="text-sm text-dark-700 mb-6 max-w-md">
            You haven&apos;t saved any addresses yet. Add your first address to
            get started with faster checkout.
          </p>
          <Button variant="primary" size="md" onClick={onAddAddress}>
            Add New Address
          </Button>
        </div>
      )}

      {/* Add new address Modal */}
      {showAddAddressModal && (
        <AddressModal
          showAddAddressModal={showAddAddressModal}
          handleClose={() => setShowAddAddressModal(false)}
          address={address}
        />
      )}
    </div>
  );
};

export default AddressList;
