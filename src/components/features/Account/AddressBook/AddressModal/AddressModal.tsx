import { useForm } from '@tanstack/react-form';

import { useUpdateAddress, useUpdateUser } from '../../../../../hooks';
import { addAddressSchema } from '../../../../../validations/userSchema';
import { Button, Input } from '../../../../ui/Common';
import { Error } from '../../../../ui/Common/Error';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../../ui/Common/Shadcn/dialog';
import { ScrollArea } from '../../../../ui/Common/Shadcn/scroll-area';

import type {
  AddNewAddressForm,
  AddNewAddressModalProp,
} from './AddressModal.type';

const AddressModal = ({
  showAddAddressModal,
  handleClose,
  address,
}: AddNewAddressModalProp) => {
  // Tanstack query
  const { mutate: onAddAddress, isPending: isAddAddressPending } =
    useUpdateUser();
  const { mutate: onUpdateAddress, isPending: isUpdateAddressPending } =
    useUpdateAddress();

  // Default values
  const defaultValues = {
    line1: address?.line1 ?? '',
    line2: address?.line2 ?? '',
    city: address?.city ?? '',
    state: address?.state ?? '',
    country: address?.country ?? '',
  };

  function onSubmit({ value }: { value: AddNewAddressForm }) {
    if (address) {
      onUpdateAddress({
        addressId: address._id,
        ...value,
      });
    } else {
      onAddAddress({
        ...value,
      });
    }

    // Close modal
    handleClose();
  }

  const form = useForm({
    defaultValues,
    validators: {
      onChange: addAddressSchema,
    },
    onSubmit,
  });

  return (
    <div>
      <Dialog open={showAddAddressModal} onOpenChange={handleClose}>
        <DialogContent>
          <form
            onSubmit={e => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-6"
          >
            <DialogHeader>
              <DialogTitle className="text-body-medium text-dark-900">
                Add new address
              </DialogTitle>
            </DialogHeader>

            <ScrollArea className="overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <form.Field name="line1">
                  {field => (
                    <div>
                      <Input
                        label="Line1"
                        type="text"
                        value={field.state.value}
                        onChange={e => field.handleChange(e.target.value)}
                        placeholder="Enter line1"
                      />
                      <Error field={field} />
                    </div>
                  )}
                </form.Field>
                <form.Field name="line2">
                  {field => (
                    <div>
                      <Input
                        label="Line2"
                        type="text"
                        value={field.state.value}
                        onChange={e => field.handleChange(e.target.value)}
                        placeholder="Enter line2"
                      />
                      <Error field={field} />
                    </div>
                  )}
                </form.Field>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <form.Field name="state">
                  {field => (
                    <div>
                      <Input
                        label="State"
                        type="text"
                        value={field.state.value}
                        onChange={e => field.handleChange(e.target.value)}
                        placeholder="Enter state"
                      />
                      <Error field={field} />
                    </div>
                  )}
                </form.Field>
                <form.Field name="city">
                  {field => (
                    <div>
                      <Input
                        label="City"
                        type="text"
                        value={field.state.value}
                        onChange={e => field.handleChange(e.target.value)}
                        placeholder="Enter city"
                      />
                      <Error field={field} />
                    </div>
                  )}
                </form.Field>
                <form.Field name="country">
                  {field => (
                    <div>
                      <Input
                        label="Country"
                        type="text"
                        value={field.state.value}
                        onChange={e => field.handleChange(e.target.value)}
                        placeholder="Enter country"
                      />
                      <Error field={field} />
                    </div>
                  )}
                </form.Field>
              </div>
            </ScrollArea>

            <DialogFooter>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={isAddAddressPending || isUpdateAddressPending}
              >
                Add
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddressModal;
