'use client';

import { Edit2, MapPin, Trash2 } from 'lucide-react';

import Button from '@/components/ui/Common/Button/Button';

import type { AddressCardProp } from './AddressCard.type';
import { formatAddress } from './utils';

const AddressCard = ({ address, onEdit, onDelete }: AddressCardProp) => {
  const formattedAddress = formatAddress(address);

  return (
    <div
      className={`group relative bg-white rounded-lg border transition-all duration-200 hover:shadow-md ${
        address.isPrimary
          ? 'border-blue-500 shadow-sm'
          : 'border-light-300 hover:border-light-400'
      }`}
    >
      {/* Primary Badge */}
      {address.isPrimary && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">
            Primary
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className={`p-2 rounded-lg ${
                address.isPrimary
                  ? 'bg-blue-500/10 text-blue-500'
                  : 'bg-light-200 text-dark-700'
              }`}
            >
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-dark-900">
                {address.isPrimary ? 'Default Address' : 'Address'}
              </h3>
            </div>
          </div>
        </div>

        {/* Address Content */}
        <div className="mb-6">
          <p className="text-sm text-dark-700 leading-relaxed whitespace-pre-line">
            {formattedAddress}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-light-300">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit({ address })}
            className="flex-1 flex items-center justify-center gap-2 hover:bg-light-200"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete({ address })}
            className="flex-1 flex items-center justify-center gap-2 text-red hover:text-red hover:border-red hover:bg-red/5"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
