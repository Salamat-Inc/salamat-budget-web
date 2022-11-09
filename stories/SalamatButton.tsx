import React from 'react';
import { classNames } from '../utils/classNames';

interface SalamatButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Additional Tailwind css classes to add
   */
  twClasses?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const buttonSizes: { [key: string]: string } = {
  'extra-small': 'rounded px-2.5 py-1.5 text-xs',
  small: 'rounded-md px-3 py-2 text-sm leading-4',
  medium: 'rounded-md px-4 py-2 text-sm',
  large: 'rounded-md px-4 py-2 text-base',
  'extra-large': 'rounded-md px-6 py-3 text-base',
};

export const SalamatButton = ({
  size = 'medium',
  backgroundColor,
  label,
  twClasses = '',
  ...props
}: SalamatButtonProps) => {
  const baseStyles =
    'inline-flex items-center border border-transparent font-medium focus:outline-none focus:ring-salamat-black focus:ring-offset-2 text-salamat-black shadow-sm bg-salamat-yellow';
  return (
    <button
      type="button"
      className={classNames(baseStyles, buttonSizes[size], twClasses)}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
