import React, { ReactNode } from 'react';

interface Props {
  /**
   * Additional Tailwind css classes to add
   */
  twClasses?: string;
}

export const Footer = (props: Props) => {
  return (
    <div className="fixed bottom-0 w-full flex flex-row min-w-[1200px]">
      {/* actual totals box */}
      <div className="w-[50%] py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">Total Budget:</div>
        <div>$15,000</div>
      </div>

      {/* weekly totals box */}
      <div className="w-[25%] mx-4 py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">This Week:</div>
        <div>$15,000</div>
      </div>

      {/* projected totals box */}
      <div className="w-[25%] py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">Projected Budget:</div>
        <div>$15,000</div>
      </div>
    </div>
  );
};
