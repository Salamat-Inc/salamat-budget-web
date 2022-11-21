import React from 'react';
import { useNumberFormatter } from 'hooks/numberFormatter';

const calculateTotal = (employees: any) => {
  let total = 0;
  employees.forEach((employee: any) => (total += employee.total));

  return total;
};

const calculateActualTotal = (project: any) => {
  let total = 0;

  Object.keys(project.categories).forEach((category: any) => {
    if (project.categories[category]?.order?.length) {
      total += calculateTotal(project.categories[category].order);
    }
  });

  return total;
};

const calculateWeeklyTotal = (project: any, currentWeekIndex = 0) => {
  let total = 0;

  const weeklyData = project.weeklyReports[currentWeekIndex];

  Object.keys(weeklyData.rateData).forEach((item) => {
    console.log('inside weelyTotal', item, weeklyData[item]);
    total += weeklyData.rateData[item].currentTotal;
  });

  return total;
};

interface Props {
  project?: any;
  /**
   * Additional Tailwind css classes to add
   */
  twClasses?: string;
}

export const Footer = ({ project }: Props) => {
  const currencyFormatter = useNumberFormatter({
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });

  const actualTotal = calculateActualTotal(project);
  const weeklyTotal = calculateWeeklyTotal(project);

  return (
    <div className="fixed bottom-0 w-full flex flex-row min-w-[1200px]">
      {/* actual totals box */}
      <div className="w-[50%] py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">Total Budget:</div>
        <div>{currencyFormatter.format(actualTotal)}</div>
      </div>

      {/* weekly totals box */}
      <div className="w-[25%] mx-4 py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">This Week:</div>
        <div>{weeklyTotal}</div>
      </div>

      {/* projected totals box */}
      <div className="w-[25%] py-4 px-8 text-right bg-salamat-black text-salamat-white">
        <div className="uppercase">Projected Budget:</div>
        <div>{currencyFormatter.format(project.projectedTotal)}</div>
      </div>
    </div>
  );
};
