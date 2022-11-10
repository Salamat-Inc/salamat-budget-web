import React, { ReactNode } from 'react';
import Link from 'next/link';
import { classNames } from '../utils/classNames';

interface Props {
  /**
   * Link contents
   */
  children: ReactNode;
  /**
   * Link hyperlink address
   */
  url: string;
  /**
   * Additional Tailwind css classes to add
   */
  twClasses?: string;
}

export const TextLink = ({ twClasses = '', url, ...props }: Props) => {
  const baseStyles = 'text-salamat-black hover:text-salamat-blue-light';
  if (/^http(s)?:\/\//i.test(url)) {
    return (
      <a
        href={url}
        className={classNames(baseStyles, twClasses)}
        rel="noreferrer noopener"
        target="_blank"
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link href={url}>
      <a className={classNames(baseStyles, twClasses)}>{props.children}</a>
    </Link>
  );
};
