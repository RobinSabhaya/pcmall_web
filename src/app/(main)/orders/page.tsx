import { OrderList } from '@/components/features/Order';
import PageWrapper from '@/components/ui/Common/PageWrapper/PageWrapper';
import Title from '@/components/ui/Common/Title/Title';

export default function OrdersPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto py-8">
        <Title title="My Orders" />

        <OrderList />
      </div>
    </PageWrapper>
  );
}
