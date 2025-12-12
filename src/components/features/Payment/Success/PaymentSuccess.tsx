'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { ArrowLeft, CheckCircle, Download, Mail } from 'lucide-react';

import Loading from '../../../../app/(main)/loading';
import { useGetPaymentDetails } from '../../../../hooks/query/Payment/usePaymentMutations';
import { formatDate } from '../../Order/OrderItem/utils';

const PaymentSuccess = () => {
  // state
  const router = useRouter();
  const params = useSearchParams();
  const sessionId = params.get('session_id');

  function onBackToHome() {
    router.replace('/');
  }

  if (!sessionId) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p className="text-red-500 text-2xl font-semibold">
          Failed to fetching payment details, please retry
        </p>
      </div>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useGetPaymentDetails({
    sessionId,
  });
  const paymentData = data?.paymentDetails;

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Animation Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all">
          {/* Success Icon with Animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-40 animate-pulse" />
              <div className="relative bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full p-6">
                <CheckCircle
                  className="w-16 h-16 text-white"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Payment Successful!
            </h1>
            <p className="text-gray-600 text-lg">
              Your transaction has been completed successfully
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200 flex-wrap lg:flex-nowrap">
              <span className="text-gray-600">Transaction ID</span>
              <span className="font-semibold text-gray-800 break-words break-all">
                {`#TXN${paymentData?._id}`}
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200  flex-wrap lg:flex-nowrap">
              <span className="text-gray-600">Amount Paid</span>
              <span className="font-bold text-2xl text-emerald-600">
                {paymentData?.amount} {paymentData?.currency}
              </span>
            </div>
            {paymentData?.createdAt && (
              <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                <span className="text-gray-600">Date & Time</span>
                <span className="font-medium text-gray-800">
                  {formatDate(paymentData.createdAt)}
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 pointer-events-none">
              <Download className="w-5 h-5" />
              Download Receipt
            </button>
            <button className="w-full bg-white border-2 border-gray-200 hover:border-emerald-500 text-gray-700 hover:text-emerald-600 font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 pointer-events-none">
              <Mail className="w-5 h-5" />
              Email Receipt
            </button>
            <button
              onClick={onBackToHome}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-center text-gray-500 text-sm mt-6">
          A confirmation email has been sent to your registered email address
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
