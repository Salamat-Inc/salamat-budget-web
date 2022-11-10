import React, { ReactNode } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';
import { classNames } from '../utils/classNames';

interface Props extends ImageProps {
  /**
   * Avatar image source
   */
  // src?: string | undefined;
  /**
   * Avatar size
   */
  size: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  /**
   * Avatar image's alternative text
   */
  // alt?: string | undefined;
  /**
   * Additional Tailwind css classes to add
   */
  twClasses?: string;
}

const sizeStyles = {
  'extra-small': 'h-6 w-6',
  small: 'h-8 w-8',
  medium: 'h-10 w-10',
  large: 'h-12 w-12',
  'extra-large': 'h-14 w-14',
};

export const Avatar = ({
  twClasses = '',
  size,
  src = '',
  alt = '',
  ...props
}: Props) => {
  const baseStyles = 'relative';

  return (
    <div className={classNames(baseStyles, sizeStyles[size], twClasses)}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className="rounded-full"
        {...props}
      />
    </div>
  );
};
