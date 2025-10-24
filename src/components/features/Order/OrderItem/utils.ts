export const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green/10 text-green border-green/20';
    case 'pending':
      return 'bg-orange/10 text-orange border-orange/20';
    case 'processing':
      return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    case 'cancelled':
      return 'bg-red/10 text-red border-red/20';
    default:
      return 'bg-light-300 text-dark-700 border-light-400';
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
