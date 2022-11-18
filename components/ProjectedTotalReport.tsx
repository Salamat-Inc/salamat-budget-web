import React from 'react';

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

export const ProjectedTotalReport = () => {
  return (
    <div className="w-[25%] shadow-[-7px_0_14px_-7px_rgba(54,61,77,0.4)] p-4">
      <div className="flex flex-row justify-between items-center h-16"></div>
      {/* Header of the table */}
      <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
        <div className="w-full text-right">Total To Date</div>
      </div>

      {/* each item and sub table */}
      {/* {renderProjectedAmount(projectData, currentReport, currencyFormatter)} */}
    </div>
  );
};
