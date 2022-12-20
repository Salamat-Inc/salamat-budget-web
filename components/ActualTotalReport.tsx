import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useNumberFormatter } from 'hooks/numberFormatter';
import { useDebounce } from 'hooks/useDebounce';
import { BudgetContext } from 'contexts/Budget/BudgetContext';
import CurrencyInput from 'react-currency-input-field';
import { classNames } from 'utils/classNames';
import { MODAL_CONSTANTS } from './AddItemModal';

const TableItemDropdown = ({ setShowItemModal }: any) => {
  const handleOnDropdownItemClick = (modalType: any) => {
    setShowItemModal(modalType);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex items-center">
        <Menu.Button className="inline-flex w-full justify-center focus:outline-none">
          <PlusCircleIcon height="22" width="22" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm w-full text-left'
                  )}
                  onClick={() =>
                    handleOnDropdownItemClick(MODAL_CONSTANTS.CATEGORY)
                  }
                >
                  Add Category
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm w-full text-left'
                  )}
                  onClick={() =>
                    handleOnDropdownItemClick(MODAL_CONSTANTS.SUBCATEGORY)
                  }
                >
                  Add Subcategory
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm w-full text-left'
                  )}
                  onClick={() =>
                    handleOnDropdownItemClick(MODAL_CONSTANTS.EMPLOYEE)
                  }
                >
                  Add Employee
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const SubCategoryRow = ({
  formatter,
  categoryId,
  employees,
  subCategoryId,
  subCategory,
}) => {
  const rows = subCategory.order.map((employee: any, i: number) => {
    if (employee.type === 'employee') {
      return (
        <LeftRow
          categoryId={categoryId}
          key={`${subCategoryId}-${i}-row-actual`}
          employee={employees[employee.id]}
          employeeId={employee.id}
          formatter={formatter}
          subCategoryId={subCategoryId}
        />
      );
    }
  });
  // return <div>{rows}</div>;
  return (
    <React.Fragment key={`${subCategory.id}-something-else`}>
      <div className="min-h-[40px] flex justify-between items-center bg-salamat-orange-light text-salamat-black font-bold rounded-md px-2.5 py-1.5 mt-1">
        <div className="w-[50%]">{subCategory.name}</div>
        <div className="w-[50%] text-right">
          {formatter.format(subCategory.total)}
        </div>
      </div>
      {rows}
    </React.Fragment>
  );
};

const LeftRow = ({
  categoryId,
  employee,
  employeeId,
  formatter,
  subCategoryId,
}: any) => {
  const { dispatch } = useContext(BudgetContext);
  const [rateTerm, setRateTerm] = useState<number>(employee.rate);

  const debouncedRateTerm: number = useDebounce<number>(rateTerm, 500);

  useEffect(
    () => {
      dispatch({
        type: 'UPDATE_RATE',
        payload: {
          rate: debouncedRateTerm,
          employeeId,
          categoryId,
          subCategoryId,
        },
      });
    },
    [debouncedRateTerm] // Only call effect if debounced search term changes
  );

  return (
    <div className="min-h-[40px] flex justify-between items-center bg-salamat-white rounded-md px-2.5 py-1.5 mt-1">
      <div className="w-[30%] text-salamat-black">{employee.name}</div>
      <div className="w-[10%] text-salamat-black text-right">
        {employee.totalDays}
      </div>
      <div className="w-[30%] flex flex-row items-baseline text-salamat-black text-right relative">
        <CurrencyInput
          className="appearance-none bg-transparent border-none w-full text-salamat-black text-right py-1 px-2 leading-tight outline-0 focus:ring-0"
          aria-label="rate for work"
          decimalsLimit={2}
          decimalScale={2}
          value={rateTerm}
          onValueChange={(value: any) => {
            setRateTerm(value || 0);
          }}
          placeholder="ex. $100.00"
          prefix={'$'}
          allowNegativeValue={false}
        />
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
  subCategories: any,
  formatter: any
) => {
  // map over the designated order of the categories in order (rows)
  return order.map((item: any, index: number) => {
    // get the current category and then iterate through all the items within a category
    const category = categories[item.id];

    const rows = category.order.map((categoryItem: any, i: number) => {
      if (categoryItem.type === 'employee') {
        return (
          <LeftRow
            categoryId={item.id}
            key={`${categoryItem}-${i}-row-actual`}
            employee={employees[categoryItem.id]}
            employeeId={categoryItem.id}
            formatter={formatter}
          />
        );
      } else {
        return (
          <SubCategoryRow
            key={`${categoryItem}-${i}-row-actual`}
            subCategoryId={categoryItem.id}
            subCategory={subCategories[categoryItem.id]}
            categoryId={item.id}
            formatter={formatter}
            employees={employees}
          />
        );
      }
    });

    return (
      <React.Fragment key={`${item.id}-something-else`}>
        <div className="min-h-[40px] flex justify-between items-center bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 ">
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

export const ActualTotalReport = ({ project, data, setShowItemModal }: any) => {
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
      <div className="min-h-[40px] flex justify-between items-center bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
        <div className="w-[30%] flex flex-row">
          {/* <button
            onClick={() => {
              setShowItemModal(true);
            }}
          >
            <PlusCircleIcon height="22" width="22" />
          </button> */}
          <TableItemDropdown setShowItemModal={setShowItemModal} />
          <span className="ml-1">Items</span>
        </div>
        <div className="w-[10%] text-right">Days</div>
        <div className="w-[30%] text-right">Rate</div>
        <div className="w-[30%] text-right">Total</div>
      </div>

      {/* Actual Totals */}
      {renderActualTotals(
        data,
        project.dataOrder,
        project.employees,
        project.subCategories,
        currencyFormatter
      )}
    </div>
  );
};
