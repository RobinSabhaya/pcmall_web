export interface ProfilePickerProps {
  name: string;
  currentImage?: string | null;
  size?: 'sm' | 'md' | 'lg';
  onImageChange?: (file: File) => void;
  className?: string;
}
