import React, { useEffect, useState, useContext } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useNumberFormatter } from 'hooks/numberFormatter';
import { useDebounce } from 'hooks/useDebounce';
import { BudgetContext } from 'contexts/Budget/BudgetContext';

const LeftRow = ({ category, name, data, formatter }: any) => {
  const { dispatch } = useContext(BudgetContext);

  const [daysTerm, setDaysTerm] = useState<number | undefined>(
    data.days || undefined
  );

  const debouncedDaysTerm: number = useDebounce<number>(daysTerm, 1500);

  useEffect(
    () => {
      console.log('going to dispatch');
      dispatch({
        type: 'UPDATE_DAYS',
        payload: {
          days: debouncedDaysTerm || 0,
          employeeId: data.id,
          category,
        },
      });
    },
    [debouncedDaysTerm] // Only call effect if debounced search term changes
  );

  const [rateTerm, setRateTerm] = useState<number>(data.rate);

  const debouncedRateTerm: number = useDebounce<number>(rateTerm, 1500);

  useEffect(
    () => {
      console.log('going to dispatch');
      dispatch({
        type: 'UPDATE_RATE',
        payload: {
          rate: debouncedRateTerm,
          employeeId: data.id,
          category,
        },
      });
    },
    [debouncedRateTerm] // Only call effect if debounced search term changes
  );

  return (
    <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
      <div className="w-[45%] text-salamat-black">{name}</div>
      <div className="w-[10%]">
        <input
          className="appearance-none bg-transparent border-none w-full text-salamat-black text-right mr-3 py-1 px-2 leading-tight focus:outline-none"
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
        {formatter.format(data.total)}
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
  return order.map((item: any) => {
    const category = categories[item.name];

    let categoryTotal = 0;

    const rows = category.order.map((e: any, i: number) => {
      const hire = employees[e.id];
      categoryTotal += e.total;
      return (
        <LeftRow
          category={item.name}
          key={`${e.id}-row-main`}
          name={hire.name}
          data={e}
          formatter={formatter}
        />
      );
    });

    return (
      <>
        <div
          key={item.id}
          className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 "
        >
          <div className="w-[50%]">{item.name}</div>
          <div className="w-[50%] text-right">
            {formatter.format(categoryTotal)}
          </div>
        </div>
        {rows}
      </>
    );
  });
};

export const ActualTotalReport = ({ project, data }: any) => {
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
            onClick={() =>
              dispatch({
                type: 'CREATE_EMPLOYEE',
                payload: {
                  name: 'Jane Doe',
                  category: 'Directors',
                },
              })
            }
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
