import { Suspense } from 'react';

import PaymentSuccess from '../../../components/features/Payment/Success';
import { Spinner } from '../../../components/ui/Common/Shadcn/spinner';

const SuccessPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <PaymentSuccess />
    </Suspense>
  );
};

export default SuccessPage;
