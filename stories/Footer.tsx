import React from 'react';
import { useNumberFormatter } from 'hooks/numberFormatter';

const calculateTotal = (employees: any) => {
  let total = 0;
  employees.forEach((employee: any) => (total += employee.total));

  return total;
};

interface Props {
  project?: any;
  activeWeeklyReport: number;
  /**
   * Additional Tailwind css classes to add
   */
  twClasses?: string;
}

export const Footer = ({ project, activeWeeklyReport }: Props) => {
  const currencyFormatter = useNumberFormatter({
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });

  const weeklyTotal = project.weeklyReports[activeWeeklyReport].weeklyTotal;

  return (
    <div className="fixed bottom-0 w-full flex flex-row min-w-[1200px]">
      {/* actual totals box */}
      <div className="w-[50%] py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">Total Budget:</div>
        <div>{currencyFormatter.format(project.actualTotal)}</div>
      </div>

      {/* weekly totals box */}
      <div className="w-[25%] mx-4 py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">This Week:</div>
        <div>{currencyFormatter.format(weeklyTotal)}</div>
      </div>

      {/* projected totals box */}
      {/* <div className="w-[25%] py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">Projected Budget:</div>
        <div>{currencyFormatter.format(project.projectedTotal)}</div>
      </div> */}
    </div>
  );
};
