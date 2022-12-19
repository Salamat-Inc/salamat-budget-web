import { useNumberFormatter } from 'hooks/numberFormatter';
import React from 'react';

const SubCategoryProjectedRow = ({
  subCategory,
  formatter,
  projectedCategoryTotal,
  projectData,
}) => {
  const rows = subCategory.order.map((item: any) => {
    const employee = projectData.employees[item.id];
    return (
      <div
        key={`projected-total-${item.id}`}
        className="min-h-[40px] flex justify-between items-center bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1"
      >
        <div className="w-full text-salamat-black text-right">
          {formatter.format(employee.projectedTotalSalary)}
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="min-h-[40px] flex justify-between items-center bg-salamat-orange-light text-salamat-black uppercase font-bold rounded-md px-2.5 py-1.5 mt-1">
        <div className="w-full text-right">
          {formatter.format(projectedCategoryTotal)}
        </div>
      </div>

      {rows}
    </React.Fragment>
  );
};

const renderProjectedAmount = (
  projectData: any,
  order: any,
  formatter: any
) => {
  return order.map((item: any, index: any) => {
    const category = projectData.categories[item.id];
    const { projectedCategoryTotal } = category;

    const rows = category.order.map((row: any) => {
      if (row.type === 'employee') {
        const employee = projectData.employees[row.id];

        return (
          <div
            key={`projected-total-${row.id}`}
            className="min-h-[40px] flex justify-between items-center bg-salamat-white rounded-md px-2.5 py-1.5 mt-1"
          >
            <div className="w-full text-salamat-black text-right">
              {formatter.format(employee.projectedTotalSalary)}
            </div>
          </div>
        );
      } else {
        const subCategory = projectData.subCategories[row.id];

        return (
          <SubCategoryProjectedRow
            key={row.id}
            subCategory={subCategory}
            formatter={formatter}
            projectedCategoryTotal={subCategory.projectedSubCategoryTotal}
            projectData={projectData}
          />
        );
      }
    });

    return (
      <React.Fragment key={`${item.name}-${index}`}>
        <div className="min-h-[40px] flex justify-between items-center bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 ">
          <div className="w-full text-right">
            {formatter.format(projectedCategoryTotal)}
          </div>
        </div>

        {rows}
      </React.Fragment>
    );
  });
};

export const ProjectedTotalReport = ({ project }: any) => {
  const currencyFormatter = useNumberFormatter({
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="w-[25%] shadow-[-7px_0_14px_-7px_rgba(54,61,77,0.4)] p-4">
      <div className="flex flex-row justify-between items-center h-16"></div>
      {/* Header of the table */}
      <div className="min-h-[40px] flex justify-between items-center bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
        <div className="w-full text-right">Total To Date</div>
      </div>

      {/* each item and sub table */}
      {renderProjectedAmount(project, project.dataOrder, currencyFormatter)}
    </div>
  );
};
