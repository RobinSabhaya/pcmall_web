'use client';

import { useMemo, useState } from 'react';

import EmptyState from '@/components/ui/Common/EmptyState/EmptyState';

import { useGetAllOrders } from '../../../../hooks/query/Order/useOrderMutations';
import FilterTab from '../../../ui/Common/FilterTab';
import LineSkeleton from '../../../ui/Skeleton/Line/LineSkeleton';
import OrderItem from '../OrderItem/OrderItem';

import { filterList, PaymentStatus } from './utils';

export default function OrderList() {
  // state
  const filterStatusList = useMemo(() => filterList, []);
  const [filter, setFilter] = useState<PaymentStatus>(PaymentStatus.ALL);

  // Tanstack query
  const { data, isLoading } = useGetAllOrders({
    ...(PaymentStatus.ALL != filter && { status: filter }),
  });

  const ordersList = data?.ordersData?.results;

  function onFilterChange(filter: string) {
    setFilter(filter as PaymentStatus);
  }

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <FilterTab
        filterList={filterStatusList}
        preSelectFilter={filter}
        onFilterChange={onFilterChange}
      />

      {/* Orders List */}
      <div className="space-y-4">
        {isLoading ? (
          <LineSkeleton count={3} />
        ) : ordersList && ordersList?.length > 0 ? (
          ordersList?.map(order => <OrderItem key={order._id} order={order} />)
        ) : (
          <EmptyState
            title="No Orders Found"
            message="You haven't placed any orders yet. Start shopping to see your orders here."
            buttonText="Shop Now"
            buttonHref="/"
            className="flex justify-center w-full"
          />
        )}
      </div>
    </div>
  );
}
