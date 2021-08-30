import React, { MouseEventHandler as F } from 'react';
import { AvatarIcon } from './Icons';
import { Image } from 'cloudinary-react';

export type AvatarProps<T extends SVGSVGElement | HTMLImageElement> = {
  alt?: string;
  circle?: boolean;
  image?: T extends HTMLImageElement ? string : never;
  onClick?: F<T>;
  rounded?: boolean;
  size?: number;
};

export function Avatar<T extends HTMLImageElement | SVGSVGElement>({
  size,
  image,
  alt,
  rounded,
  circle,
  onClick,
}: AvatarProps<T>) {
  const sharedProperties = {
    style: size ? { width: `${size}px`, height: `${size}px` } : {},
    className: `raf-avatar ${rounded ? 'raf-avatar--rounded' : ''} ${circle ? 'raf-avatar--circle' : ''}`,
  };

  return image ? (
    <Image
      {...sharedProperties}
      width={200}
      height={200}
      crop="fill"
      publicId={image}
      alt={alt ?? ''}
      onClick={onClick as F<HTMLImageElement>}
    />
  ) : (
    <AvatarIcon {...sharedProperties} onClick={onClick as F<SVGSVGElement>} />
  );
}
