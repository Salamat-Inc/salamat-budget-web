import React from 'react';

const renderTotalToDate = (projectData: any, weekData: any) => {
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
            {rowToDate.totalToDate}
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
          <div className="w-full text-right">{categoryTotalToDate}</div>
        </div>

        {rows}
      </>
    );
  });
};

const renderWeekly = (projectData: any, weekData: any) => {
  console.log(projectData, weekData);
  return projectData.dataOrder.map((item: any, index: any) => {
    const category = projectData.categories[item.name];
    let categoryTotalWeek = 0;
    const rows = category.order.map((e: any, index: any) => {
      const emp = weekData.rateData[e.id];
      categoryTotalWeek += emp.currentTotal;
      return (
        <div
          key={`${emp.name}-week-${index}`}
          className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1"
        >
          <div className="w-[10%] text-salamat-black text-right">
            {emp.days}
          </div>
          {/* <div className="w-[10%] text-salamat-black text-right">
            {emp.rate}
          </div> */}
          <div className="w-[40%] text-salamat-black text-right">
            {emp.currentTotal}
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
          {/* <div className="w-[50%]">{item.name}</div> */}
          <div className="w-full text-right">{categoryTotalWeek}</div>
        </div>
        {rows}
      </>
    );
  });

  // return Object.keys(projectData).map((category, index) => {
  //   return (
  // <div
  //   key={`${weekData.name}-${category}-${index}`}
  //   className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 "
  // >
  //   <div className="w-[50%]">{category}</div>
  //   <div className="w-[50%] text-right">Yolo</div>
  // </div>
  //   );
  // });
};

export const WeeklyReport = ({ weekData, projectData }: any) => {
  console.log(projectData);
  const currentReport = weekData[0];
  return (
    <>
      <div className="w-[25%] p-4">
        <div className="flex flex-row justify-between h-16 items-center">
          <div>left</div>
          <div>Week 1</div>
          <div>right</div>
        </div>
        {/* Header of the table */}
        <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
          {/* <div className="w-[40%]">Items</div> */}
          <div className="w-[10%] text-right">Days</div>
          {/* <div className="w-[10%] text-right">Rate</div> */}
          <div className="w-[40%] text-right">Total</div>
        </div>

        {renderWeekly(projectData, currentReport)}

        {/* each item and sub table */}

        {/* <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4">
          <div className="w-[50%]">Directors</div>
          <div className="w-[50%] text-right">$20,500.50</div>
        </div>
        <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
          <div className="w-[40%] text-salamat-black">George Lucas</div>
          <div className="w-[10%] text-salamat-black text-right">Days</div>
          <div className="w-[10%] text-salamat-black text-right">Rate</div>
          <div className="w-[40%] text-salamat-black text-right">10,000.00</div>
        </div>
        <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
          <div className="w-[40%] text-salamat-black">George Lucas</div>
          <div className="w-[10%] text-salamat-black text-right">Days</div>
          <div className="w-[10%] text-salamat-black text-right">Rate</div>
          <div className="w-[40%] text-salamat-black text-right">10,000.00</div>
        </div>
        <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
          <div className="w-[40%] text-salamat-black">George Lucas</div>
          <div className="w-[10%] text-salamat-black text-right">Days</div>
          <div className="w-[10%] text-salamat-black text-right">Rate</div>
          <div className="w-[40%] text-salamat-black text-right">10,000.00</div>
        </div> */}

        {/* each item and sub table */}
        {/* <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4">
          <div className="w-[50%]">Directors</div>
          <div className="w-[50%] text-right">$20,500.50</div>
        </div>
        <div className="flex flex-row justify-end bg-salamat-orange-light text-salamat-black font-bold rounded-md px-2.5 py-1.5 mt-1">
          <div className="text-right">$20,500.50</div>
        </div>
        <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
          <div className="w-[40%] text-salamat-black">George Lucas</div>
          <div className="w-[10%] text-salamat-black text-right">Days</div>
          <div className="w-[10%] text-salamat-black text-right">Rate</div>
          <div className="w-[40%] text-salamat-black text-right">10,000.00</div>
        </div>
        <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
          <div className="w-[40%] text-salamat-black">George Lucas</div>
          <div className="w-[10%] text-salamat-black text-right">Days</div>
          <div className="w-[10%] text-salamat-black text-right">Rate</div>
          <div className="w-[40%] text-salamat-black text-right">10,000.00</div>
        </div>
        <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
          <div className="w-[40%] text-salamat-black">George Lucas</div>
          <div className="w-[10%] text-salamat-black text-right">Days</div>
          <div className="w-[10%] text-salamat-black text-right">Rate</div>
          <div className="w-[40%] text-salamat-black text-right">10,000.00</div>
        </div> */}
      </div>

      <div className="w-[25%] shadow-[-7px_0_14px_-7px_rgba(54,61,77,0.4)] p-4">
        <div className="flex flex-row justify-between items-center h-16"></div>
        {/* Header of the table */}
        <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
          {/* <div className="w-[40%]">Items</div>
          <div className="w-[10%] text-right">Days</div>
          <div className="w-[10%] text-right">Rate</div> */}
          <div className="w-full text-right">Total To Date</div>
        </div>

        {/* each item and sub table */}
        {renderTotalToDate(projectData, currentReport)}
      </div>
    </>
  );
};
