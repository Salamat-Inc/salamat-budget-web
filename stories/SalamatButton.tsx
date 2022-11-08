import React, { CSSProperties } from 'react';
import { classNames } from '../utils/classNames';

interface SalamatButtonProps {
  /**
   * The type of button style
   */
  style?: 'primary' | 'secondary';
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

const buttonStyles: { [key: string]: string } = {
  primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700',
  secondary: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
};

export const SalamatButton = ({
  style = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: SalamatButtonProps) => {
  const baseStyles =
    'inline-flex items-center border border-transparent font-medium focus:outline-none focus: ring-indigo-500 focus:ring-offset-2';
  return (
    <button
      type="button"
      className={classNames(baseStyles, buttonSizes[size], buttonStyles[style])}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
