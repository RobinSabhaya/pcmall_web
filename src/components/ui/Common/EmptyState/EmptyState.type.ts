export interface EmptyStateProps {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}
