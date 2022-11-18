import React, { useState, useEffect, useContext } from 'react';
import { useNumberFormatter } from 'hooks/numberFormatter';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useDebounce } from 'hooks/useDebounce';
import { BudgetContext } from 'contexts/Budget/BudgetContext';

const renderProjectedAmount = (
  projectData: any,
  weekData: any,
  formatter: any
) => {
  console.log(weekData);
  return projectData.dataOrder.map((item: any, index: any) => {
    const category = projectData.categories[item.name];
    let categoryTotalToDate = 0;

    const rows = category.order.map((i: any, s: any) => {
      const rowToDate = weekData.rateData[i.id];
      categoryTotalToDate += rowToDate.totalToDate;
      return (
        <div
          key={`yolo-${i.id}`}
          className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1"
        >
          <div className="w-full text-salamat-black text-right">
            {formatter.format(rowToDate.totalToDate)}
          </div>
        </div>
      );
    });

    return (
      <>
        <div
          key={`${weekData.name}-${item.name}-${index}`}
          className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 "
        >
          <div className="w-full text-right">
            {formatter.format(categoryTotalToDate)}
          </div>
        </div>

        {rows}
      </>
    );
  });
};

const WeeklyRow = ({ employee, formatter, category }: any) => {
  const { dispatch } = useContext(BudgetContext);

  const [daysTerm, setDaysTerm] = useState<number | undefined>(
    employee.days || undefined
  );

  const debouncedDaysTerm: number = useDebounce<number>(daysTerm, 1500);

  useEffect(
    () => {
      console.log('going to dispatch from weekly');
      dispatch({
        type: 'UPDATE_DAYS_WEEKLY',
        payload: {
          days: debouncedDaysTerm || 0,
          employeeId: employee.id,
          category,
        },
      });
    },
    [debouncedDaysTerm] // Only call effect if debounced search term changes
  );

  return (
    <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
      <div className="w-[15%] text-salamat-black text-right">
        <input
          className="appearance-none bg-transparent border-none w-full text-salamat-black mr-3 py-1 px-2 text-left leading-tight focus:outline-none"
          type="number"
          placeholder="0"
          aria-label="days worked"
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            setDaysTerm(parseFloat(e.target.value) || undefined);
          }}
          value={daysTerm}
        ></input>
      </div>
      <div className="w-[60%] text-salamat-black text-right">
        {formatter.format(employee.currentTotal)}
      </div>
    </div>
  );
};

const renderWeekly = (projectData: any, weekData: any, formatter: any) => {
  return projectData.dataOrder.map((item: any, index: any) => {
    const category = projectData.categories[item.name];
    let categoryTotalWeek = 0;
    const rows = category.order.map((e: any, index: any) => {
      const emp = weekData.rateData[e.id];
      categoryTotalWeek += emp.currentTotal;

      return (
        <WeeklyRow
          key={`weekly-${index}-${emp.id}`}
          category={item.name}
          employee={emp}
          i={index}
          formatter={formatter}
        />
      );
    });

    return (
      <>
        <div
          key={`${weekData.name}-${item.name}-${index}`}
          className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 "
        >
          <div className="w-full text-right">
            {formatter.format(categoryTotalWeek)}
          </div>
        </div>

        {rows}
      </>
    );
  });
};

export const WeeklyReport = ({ weekData, projectData }: any) => {
  const currentReport = weekData[0];
  console.log('yo', currentReport);

  const currencyFormatter = useNumberFormatter({
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <div className="w-[25%] p-4">
        <div className="flex flex-row justify-between h-16 items-center">
          <div className="text-salamat-orange">
            <ChevronLeftIcon height="30" width="30" />
          </div>
          <div className="uppercase font-bold">Week 1</div>
          <div className="text-salamat-orange">
            <ChevronRightIcon height="30" width="30" />
          </div>
        </div>
        {/* Header of the table */}
        <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
          <div className="w-[40%] text-left">Days</div>
          <div className="w-[40%] text-right">Total</div>
        </div>

        {renderWeekly(projectData, currentReport, currencyFormatter)}
      </div>

      <div className="w-[25%] shadow-[-7px_0_14px_-7px_rgba(54,61,77,0.4)] p-4">
        <div className="flex flex-row justify-between items-center h-16"></div>
        {/* Header of the table */}
        <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
          <div className="w-full text-right">Total To Date</div>
        </div>

        {/* each item and sub table */}
        {renderProjectedAmount(projectData, currentReport, currencyFormatter)}
      </div>
    </>
  );
};
