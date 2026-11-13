import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { BRAND_IMAGES } from '../data/assets';

export type ImageKey = keyof typeof BRAND_IMAGES;

interface EditorialImageProps {
  imageKey: ImageKey;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export function EditorialImage({
  imageKey,
  alt,
  className = 'w-full h-full object-cover',
  priority = false,
  fallbackLabel,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);
  const src = BRAND_IMAGES[imageKey];

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F5EF] via-[#EFE7DA] to-[#D8C2A0]/40 text-[#542333] p-6 text-center"
      >
        <Sparkles className="w-6 h-6 mb-2 text-[#AD9061]" aria-hidden="true" />
        <span className="font-editorial text-lg font-medium">
          {fallbackLabel ?? 'Mubarak Textiles'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
