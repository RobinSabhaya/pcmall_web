import { Spinner } from '../../components/ui/Common/Shadcn/spinner';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner className="size-7" />
    </div>
  );
}
