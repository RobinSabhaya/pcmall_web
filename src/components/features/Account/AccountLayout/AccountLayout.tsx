'use client';

import { useState } from 'react';

import { BreadCrumb } from '../../../ui/BreadCrumb';
import AccountSidebar from '../AccountSideBar/AccountSidebar';
import ProfileForm from '../ProfileForm/ProfileForm';

const COMPONENTS_MAP = {
  profile: ProfileForm,
  'address-book': () => <div>Address Book Component</div>,
  'payment-options': () => <div>Payment Options Component</div>,
  returns: () => <div>Returns Component</div>,
  cancellations: () => <div>Cancellations Component</div>,
  wishlist: () => <div>Wishlist Component</div>,
};

const breadCrumbList = [
  { label: 'Home', href: '/' },
  { label: 'My Account', href: '/account' },
];

export default function AccountLayout() {
  const [activeSection, setActiveSection] = useState('profile');

  const ActiveComponent =
    COMPONENTS_MAP[activeSection as keyof typeof COMPONENTS_MAP] || ProfileForm;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}

      {/* Welcome Message */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <BreadCrumb breadCrumbList={breadCrumbList} />
          <div />
          <p className="text-sm text-gray-600">
            Welcome! <span className="text-red-500 font-medium">Test</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          <AccountSidebar
            activeItem={activeSection}
            onItemSelect={setActiveSection}
          />
          <main className="flex-1 bg-white rounded-lg shadow-sm p-8">
            <ActiveComponent />
          </main>
        </div>
      </div>
    </div>
  );
}
