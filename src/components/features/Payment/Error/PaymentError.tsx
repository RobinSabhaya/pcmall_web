'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ArrowLeft, XCircle } from 'lucide-react';

import type { PaymentErrorProp } from './PaymentError.type';

const PaymentError = ({ errorDetails }: PaymentErrorProp) => {
  // state
  const router = useRouter();

  function onBackToHome() {
    router.replace('/');
  }

  function onRetry() {
    // TODO: implement retry mechanism
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Error Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all">
          {/* Error Icon with Animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-400 rounded-full blur-xl opacity-40 animate-pulse" />
              <div className="relative bg-gradient-to-br from-red-400 to-orange-500 rounded-full p-6">
                <XCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Payment Failed
            </h1>
            <p className="text-gray-600 text-lg">
              We couldn&apos;t process your payment
            </p>
          </div>

          {/* Error Details */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 mb-6 border-2 border-red-100">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 rounded-full p-1 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">Error Code</p>
                  <p className="text-gray-600">
                    {errorDetails?.code ?? 'ERR_PAYMENT_DECLINED'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-500 rounded-full p-1 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">Reason</p>
                  <p className="text-gray-600">
                    {errorDetails?.reason ??
                      'Your card was declined. Please check your card details or try another payment method.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <p className="font-semibold text-gray-700 mb-2 text-sm">
              Common Issues:
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Insufficient funds in account</li>
              <li>• Incorrect card details entered</li>
              <li>• Card expired or blocked</li>
              <li>• Network connectivity issues</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onRetry}
              className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
            <button
              onClick={onBackToHome}
              className="w-full bg-white border-2 border-gray-200 hover:border-red-500 text-gray-700 hover:text-red-600 font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
          </div>
        </div>

        {/* Support Info */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm mb-2">Need help?</p>
          <Link
            href="/"
            className="text-red-600 hover:text-red-700 font-semibold text-sm hover:underline"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentError;
