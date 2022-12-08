import React, { useState, useEffect, useContext } from 'react';
import { useNumberFormatter } from 'hooks/numberFormatter';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useDebounce } from 'hooks/useDebounce';
import { BudgetContext } from 'contexts/Budget/BudgetContext';

const WeeklyRow = ({
  employee,
  employeeId,
  formatter,
  category,
  currentReport,
}: any) => {
  const { dispatch } = useContext(BudgetContext);

  const [daysTerm, setDaysTerm] = useState<string>(employee.days.toString());

  const debouncedDaysTerm: string = useDebounce<string>(daysTerm, 1500);

  useEffect(
    () => {
      const days = parseFloat(debouncedDaysTerm);
      console.log('this is firing');

      if (days !== employee.days) {
        dispatch({
          type: 'UPDATE_DAYS_WEEKLY',
          payload: {
            days: days || 0,
            employeeId: employeeId,
            employee,
            category,
            currentReport,
          },
        });
      }
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
        {formatter.format(employee.total)}
      </div>
    </div>
  );
};

const renderWeekly = (projectData: any, currentReport: any, formatter: any) => {
  const employeeList = projectData.employees;

  return projectData.dataOrder.map((item: any, index: any) => {
    const category = projectData.categories[item.id];
    let categoryTotalWeek = 0;

    const rows = category.order.map((employeeId: any, index2: any) => {
      const employee = employeeList[employeeId];
      // const employeeCurrentReport = employee.weeklyBreakdown[currentReport.id];
      const employeeCurrentReport =
        currentReport.employeePayBreakdown[employeeId];

      categoryTotalWeek += employeeCurrentReport.total;

      return (
        <WeeklyRow
          key={`weekly-${index2}-${employeeId}`}
          category={item}
          employeeId={employeeId}
          employee={employeeCurrentReport}
          formatter={formatter}
          currentReport={currentReport}
        />
      );
    });
    return (
      <>
        <div
          key={`${currentReport.name}-${item.name}-${index}`}
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

export const WeeklyReport = ({ projectData }: any) => {
  const weeklyReportData = projectData.weeklyReports;

  const currentReport = weeklyReportData[weeklyReportData.length - 1];

  const currencyFormatter = useNumberFormatter({
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });

  return (
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
  );
};
