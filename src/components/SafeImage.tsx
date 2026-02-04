import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: string;
  fallbackGradient?: string;
}

const SafeImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackIcon = 'Image',
  fallbackGradient = 'from-purple-100 to-orange-100'
}: SafeImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br ${fallbackGradient} flex items-center justify-center ${className}`}>
        <Icon name={fallbackIcon} size={120} className="text-primary/20" />
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`bg-gradient-to-br ${fallbackGradient} flex items-center justify-center ${className} animate-pulse`}>
          <Icon name="Loader2" size={48} className="text-primary/40 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : 'block'}`}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </>
  );
};

export default SafeImage;
