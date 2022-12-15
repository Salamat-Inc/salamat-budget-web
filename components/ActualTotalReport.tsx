import React, { useEffect, useState, useContext } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useNumberFormatter } from 'hooks/numberFormatter';
import { useDebounce } from 'hooks/useDebounce';
import { BudgetContext } from 'contexts/Budget/BudgetContext';

const LeftRow = ({
  category,
  categoryId,
  name,
  employee,
  employeeId,
  formatter,
}: any) => {
  const [rateTerm, setRateTerm] = useState<number>(employee.rate);

  // const debouncedRateTerm: number = useDebounce<number>(rateTerm, 1500);

  // useEffect(
  //   () => {
  //     dispatch({
  //       type: 'UPDATE_RATE',
  //       payload: {
  //         rate: debouncedRateTerm,
  //         employeeId: data.id,
  //         category,
  //       },
  //     });
  //   },
  //   [debouncedRateTerm] // Only call effect if debounced search term changes
  // );

  return (
    <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
      <div className="w-[45%] text-salamat-black">{employee.name}</div>
      <div className="w-[10%] text-salamat-black text-right">
        {employee.totalDays}
      </div>
      <div className="w-[15%] flex flex-row items-baseline text-salamat-black text-right relative">
        <input
          className="before:content-['Hello\_World'] appearance-none bg-transparent border-none w-full text-salamat-black text-right mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="number"
          placeholder="0"
          aria-label="rate for work"
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            setRateTerm(e.target.value);
          }}
          value={rateTerm}
        ></input>
      </div>
      <div className="w-[30%] text-salamat-black text-right">
        {formatter.format(employee.actualTotalSalary)}
      </div>
    </div>
  );
};

const renderActualTotals = (
  categories: any,
  order: any,
  employees: any,
  formatter: any
) => {
  // map over the designated order of the categories in order (rows)
  return order.map((item: any, index: number) => {
    // get the current category and then iterate through all the items within a category
    const category = categories[item.id];

    const rows = category.order.map((categoryItem: any, i: number) => {
      return (
        <LeftRow
          categoryId={item.id}
          key={`${categoryItem}-${i}-row-actual`}
          employee={employees[categoryItem]}
          employeeId={categoryItem}
          formatter={formatter}
        />
      );
    });

    return (
      <React.Fragment key={`${item.id}-something-else`}>
        <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 ">
          <div className="w-[50%]">{item.name}</div>
          <div className="w-[50%] text-right">
            {formatter.format(category.total)}
          </div>
        </div>
        {rows}
      </React.Fragment>
    );
  });
};

export const ActualTotalReport = ({
  project,
  data,
  setShowEmployeeModal,
}: any) => {
  const { dispatch } = useContext(BudgetContext);

  const currencyFormatter = useNumberFormatter({
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="w-[50%] shadow-[7px_0_14px_-7px_rgba(54,61,77,0.4)] p-4">
      {/* All categories dropdown */}
      <div className="flex flex-row justify-between items-center h-16">
        <div className="font-bold">All Categories</div>
        <div>Last Update: 01/01/22</div>
      </div>

      {/* Header of the table */}
      <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
        <div className="w-[45%] flex flex-row">
          <button
            onClick={() => {
              setShowEmployeeModal(true);
            }}
          >
            <PlusCircleIcon height="22" width="22" />
          </button>
          <span className="ml-1">Items</span>
        </div>
        <div className="w-[10%] text-right">Days</div>
        <div className="w-[15%] text-right">Rate</div>
        <div className="w-[30%] text-right">Total</div>
      </div>

      {/* Actual Totals */}
      {renderActualTotals(
        data,
        project.dataOrder,
        project.employees,
        currencyFormatter
      )}
    </div>
  );
};
