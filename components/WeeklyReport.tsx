import React, { useState, useEffect, useContext } from 'react';
import { useNumberFormatter } from 'hooks/numberFormatter';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useDebounce } from 'hooks/useDebounce';
import { BudgetContext } from 'contexts/Budget/BudgetContext';
import { classNames } from 'utils/classNames';

const WeeklyRow = ({
  employeeWeeklyData,
  employeeId,
  formatter,
  category,
  currentReport,
  subCategory = null,
  subCategoryId,
}: any) => {
  const { dispatch } = useContext(BudgetContext);

  const [daysTerm, setDaysTerm] = useState<string>(
    employeeWeeklyData.days.toString()
  );

  const debouncedDaysTerm: string = useDebounce<string>(daysTerm, 500);

  useEffect(
    () => {
      const days = parseFloat(debouncedDaysTerm);

      if (days !== employeeWeeklyData.days) {
        dispatch({
          type: 'UPDATE_DAYS_WEEKLY',
          payload: {
            days: days || 0,
            employeeId,
            category,
            currentReport,
            subCategory,
            subCategoryId,
          },
        });
      }
    },
    [debouncedDaysTerm] // Only call effect if debounced search term changes
  );

  return (
    <div className="min-h-[40px] flex justify-between items-center bg-salamat-white rounded-md px-2.5 py-1.5 mt-1">
      <div className="w-[15%] text-salamat-black text-right">
        <input
          className="appearance-none bg-transparent border-none w-full text-salamat-black mr-3 py-1 px-2 text-left leading-tight focus:ring-0"
          type="number"
          placeholder="0"
          aria-label="days worked"
          onChange={(e) => {
            setDaysTerm(e.target.value);
          }}
          value={daysTerm}
        ></input>
      </div>
      <div className="w-[60%] text-salamat-black text-right">
        {formatter.format(employeeWeeklyData.total)}
      </div>
    </div>
  );
};

const WeeklySubcategoryRow = ({
  subCategoryWeeklyData,
  subCategory,
  formatter,
  currentReport,
  category,
  subCategoryId,
}) => {
  const rows = subCategory.order.map((item: any, index: any) => {
    const employeeWeeklyData = currentReport.employeePayBreakdown[item.id];
    return (
      <WeeklyRow
        key={`weekly-${index}-${item.id}`}
        category={category}
        employeeId={item.id}
        employeeWeeklyData={employeeWeeklyData}
        formatter={formatter}
        currentReport={currentReport}
        subCategory={subCategory}
        subCategoryId={subCategoryId}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="min-h-[40px] flex justify-between items-center bg-salamat-orange-light text-salamat-black uppercase font-bold rounded-md px-2.5 py-1.5 mt-1">
        <div className="w-full text-right">
          {formatter.format(subCategoryWeeklyData.total)}
        </div>
      </div>
      {rows}
    </React.Fragment>
  );
  // return <div>{subCategoryWeeklyData.total}</div>;
};

const renderWeekly = (projectData: any, currentReport: any, formatter: any) => {
  return projectData.dataOrder.map((item: any, index: any) => {
    const category = projectData.categories[item.id];

    const rows = category.order.map((categoryItem: any, index2: any) => {
      const employeeWeeklyData =
        currentReport.employeePayBreakdown[categoryItem.id];

      return categoryItem.type === 'employee' ? (
        <WeeklyRow
          key={`weekly-${index2}-${categoryItem.id}`}
          category={item}
          employeeId={categoryItem.id}
          employeeWeeklyData={employeeWeeklyData}
          formatter={formatter}
          currentReport={currentReport}
        />
      ) : (
        <WeeklySubcategoryRow
          key={`weekly-${index2}-${categoryItem.id}`}
          subCategoryWeeklyData={employeeWeeklyData}
          formatter={formatter}
          subCategory={projectData.subCategories[categoryItem.id]}
          subCategoryId={categoryItem.id}
          currentReport={currentReport}
          category={item}
        />
      );
    });
    return (
      <React.Fragment key={`${currentReport.name}-${item.name}-${index}`}>
        <div className="min-h-[40px] flex justify-between items-center bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 ">
          <div className="w-full text-right">
            {formatter.format(
              currentReport.employeePayBreakdown[item.id].total
            )}
          </div>
        </div>
        {rows}
      </React.Fragment>
    );
  });
};

export const WeeklyReport = ({
  projectData,
  activeWeeklyReport,
  setActiveWeeklyReport,
}: any) => {
  const weeklyReportData = projectData.weeklyReports;
  const currentReport = weeklyReportData[activeWeeklyReport];

  const currencyFormatter = useNumberFormatter({
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });

  const handleWeeklyPaginate = (
    direction,
    currentActiveReportIndex,
    totalWeeklyReports,
    setActiveWeeklyReport
  ) => {
    if (direction === 'previous') {
      const previousIndex = currentActiveReportIndex - 1;
      if (previousIndex > -1) {
        setActiveWeeklyReport(previousIndex);
      }
    } else if (direction === 'next') {
      const nextIndex = currentActiveReportIndex + 1;
      if (nextIndex <= totalWeeklyReports) {
        setActiveWeeklyReport(nextIndex);
      }
    }
  };

  return (
    <div className="w-[25%] p-4">
      <div className="flex flex-row justify-between h-16 items-center">
        <button
          className={classNames(
            activeWeeklyReport - 1 > -1 ? '' : 'invisible',
            'text-salamat-orange'
          )}
          onClick={() =>
            handleWeeklyPaginate(
              'previous',
              activeWeeklyReport,
              projectData.weeklyReports.length - 1,
              setActiveWeeklyReport
            )
          }
        >
          <ChevronLeftIcon height="30" width="30" />
        </button>
        <div className="uppercase font-bold">{currentReport.name}</div>
        <button
          className={classNames(
            activeWeeklyReport + 1 <= projectData.weeklyReports.length - 1
              ? ''
              : 'invisible',
            'text-salamat-orange'
          )}
          onClick={() =>
            handleWeeklyPaginate(
              'next',
              activeWeeklyReport,
              projectData.weeklyReports.length - 1,
              setActiveWeeklyReport
            )
          }
        >
          <ChevronRightIcon height="30" width="30" />
        </button>
      </div>
      {/* Header of the table */}
      <div className="min-h-[40px] flex justify-between items-center bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
        <div className="w-[40%] text-left">Days</div>
        <div className="w-[40%] text-right">Total</div>
      </div>

      {renderWeekly(projectData, currentReport, currencyFormatter)}
    </div>
  );
};
