'use client';

import { useState } from 'react';

import { UserProvider } from '../../../../contexts/User/UserContext';
import { useUserDetail } from '../../../../hooks';
import { BreadCrumb } from '../../../ui/Common/BreadCrumb';
import AccountSidebar from '../AccountSideBar/AccountSidebar';
import ProfileForm from '../ProfileForm/ProfileForm';

import { breadCrumbList, COMPONENTS_MAP } from './utils';

export default function AccountLayout() {
  const [activeSection, setActiveSection] = useState('profile');

  const ActiveComponent =
    COMPONENTS_MAP[activeSection as keyof typeof COMPONENTS_MAP] || ProfileForm;

  // Tanstack query
  const { data } = useUserDetail();

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Welcome Message */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            {/* Breadcrumb */}
            <BreadCrumb breadCrumbList={breadCrumbList} />
            <div />
            <p className="text-sm text-gray-600">
              Welcome!{' '}
              <span className="text-red-500 font-medium">
                {data?.userData.user_profile.first_name}
              </span>
            </p>
          </div>

          {/* Main Content */}
          <div className="flex gap-8">
            <AccountSidebar
              activeItem={activeSection}
              onItemSelect={setActiveSection}
            />
            {data ? (
              <UserProvider value={data.userData}>
                <main className="flex-1 bg-white rounded-lg shadow-sm p-8">
                  <ActiveComponent />
                </main>
              </UserProvider>
            ) : (
              <div className="flex justify-center items-center w-full">
                Loading...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
