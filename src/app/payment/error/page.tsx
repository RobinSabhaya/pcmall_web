import PaymentError from '../../../components/features/Payment/Error';

const ErrorPage = () => {
  return (
    <PaymentError
      errorDetails={{ code: 'PAYMENT_FAILED', reason: 'Due to network' }}
    />
  );
};

export default ErrorPage;
