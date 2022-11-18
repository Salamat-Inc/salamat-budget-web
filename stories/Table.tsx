import React from 'react';
import { WeeklyReport } from 'components/WeekyReport';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
];

const columnTitles = [
  {
    name: 'Director',
    amount: 20500.0,
  },
];

const renderStuffRight = (data: any) => {};

const renderStuffLeft = (categories: any, order: any, employees: any) => {
  console.log('this is the data', order);
  return order.map((item: any, index: number) => {
    const category = categories[item.name];

    let categoryTotal = 0;
    const rows = category.order.map((e: any, i: number) => {
      const hire = employees[e.id];
      categoryTotal += e.total;
      return (
        <div
          key={`${e.id}-${i}`}
          className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1"
        >
          <div className="w-[40%] text-salamat-black">{hire.name}</div>
          <div className="w-[10%] text-salamat-black text-right">{e.days}</div>
          <div className="w-[10%] text-salamat-black text-right">{e.rate}</div>
          <div className="w-[40%] text-salamat-black text-right">{e.total}</div>
        </div>
      );
    });
    return (
      <>
        <div
          key={item.id}
          className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 "
        >
          <div className="w-[50%]">{item.name}</div>
          <div className="w-[50%] text-right">{categoryTotal}</div>
        </div>
        {rows}
      </>
    );
  });
  // return Object.keys(data).map((category) => {
  //   return (
  //     <>
  //       <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 ">
  //         <div className="w-[50%]">{category}</div>
  //         <div className="w-[50%] text-right">Yolo</div>
  //       </div>

  //       {data[category].employees.map((e: any, i: number) => (
  //         <div
  //           key={`${e.name}-${i}`}
  //           className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1"
  //         >
  //           <div className="w-[40%] text-salamat-black">{e.name}</div>
  //           <div className="w-[10%] text-salamat-black text-right">
  //             {e.days}
  //           </div>
  //           <div className="w-[10%] text-salamat-black text-right">
  //             {e.rate}
  //           </div>
  //           <div className="w-[40%] text-salamat-black text-right">
  //             {e.total}
  //           </div>
  //         </div>
  //       ))}
  //     </>
  //   );
  // });
};

export const Table = ({ project }: { project: any }) => {
  const data = project.categories;
  const weeklyData = project.weeklyReports;

  console.log(project);

  return (
    // Container for the table
    <div className="min-w-full flex flex-row bg-salamat-lesser-white">
      <div className="w-[50%] shadow-[7px_0_14px_-7px_rgba(54,61,77,0.4)] p-4">
        {/* All categor"ies dropdown */}
        <div className="flex flex-row justify-between items-center h-16">
          <div className="font-bold">All Categories</div>
          <div>Last Update: 01/01/22</div>
        </div>

        {/* Header of the table */}
        <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
          <div className="w-[40%]">Items</div>
          <div className="w-[10%] text-right">Days</div>
          <div className="w-[10%] text-right">Rate</div>
          <div className="w-[40%] text-right">Total</div>
        </div>

        {/* New Rendering */}
        {renderStuffLeft(data, project.dataOrder, project.employees)}

        {/* each item and sub table */}
        {/* <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 ">
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
          <div className="w-[50%]">Cast</div>
          <div className="w-[50%] text-right">$20,500.50</div>
        </div> */}

        {/* sub category example */}
        {/* <div className="flex justify-between bg-salamat-orange-light text-salamat-black font-bold rounded-md px-2.5 py-1.5 mt-1">
          <div className="w-[50%]">Principal Cast</div>
          <div className="w-[50%] text-right">$20,500.50</div>
        </div> */}

        {/* <div className="flex justify-between bg-salamat-white text-salamat-white rounded-md px-2.5 py-1.5 mt-1">
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

      <WeeklyReport weekData={weeklyData} projectData={project} />
    </div>
  );
};
