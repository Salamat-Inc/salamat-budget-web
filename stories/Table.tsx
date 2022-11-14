import React from 'react';
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

const TableHead = (columnTitle) => (
  <thead>
    <tr>
      <th
        scope="col"
        colSpan={5}
        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
      >
        {columnTitle.name}
      </th>
      {/* <th
        scope="col"
        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
      >
        {columnTitle.amount}
      </th> */}
    </tr>
  </thead>
);

export const Table = () => {
  return (
    // Container for the table
    <div className="min-w-full p-4 flex flex-row bg-salamat-lesser-white">
      <div className="w-[40%] shadow-[7px_0_14px_-7px_rgba(54,61,77,0.7)] p-4">
        {/* Header of the table */}
        <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
          <div className="w-[40%]">Items</div>
          <div className="w-[10%] text-right">Days</div>
          <div className="w-[10%] text-right">Rate</div>
          <div className="w-[40%] text-right">Total</div>
        </div>

        {/* each item and sub table */}
        <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4 ">
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
        </div>

        {/* each item and sub table */}
        <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4">
          <div className="w-[50%]">Cast</div>
          <div className="w-[50%] text-right">$20,500.50</div>
        </div>

        {/* sub category example */}
        <div className="flex justify-between bg-salamat-orange-light text-salamat-black font-bold rounded-md px-2.5 py-1.5 mt-1">
          <div className="w-[50%]">Principle Cast</div>
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
        </div>
      </div>

      <div className="w-[30%] p-4">
        {/* Header of the table */}
        <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
          <div className="w-[40%]">Items</div>
          <div className="w-[10%] text-right">Days</div>
          <div className="w-[10%] text-right">Rate</div>
          <div className="w-[40%] text-right">Total</div>
        </div>

        {/* each item and sub table */}
        <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4">
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
        </div>

        {/* each item and sub table */}
        <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4">
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
        </div>
      </div>

      <div className="w-[30%] shadow-[-7px_0_14px_-7px_rgba(54,61,77,0.7)] p-4">
        {/* Header of the table */}
        <div className="flex justify-between bg-salamat-blue-dark text-salamat-white rounded-md px-2.5 py-1.5">
          <div className="w-[40%]">Items</div>
          <div className="w-[10%] text-right">Days</div>
          <div className="w-[10%] text-right">Rate</div>
          <div className="w-[40%] text-right">Total</div>
        </div>

        {/* each item and sub table */}
        <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4">
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
        </div>

        {/* each item and sub table */}
        <div className="flex justify-between bg-salamat-orange text-salamat-white uppercase font-bold rounded-md px-2.5 py-1.5 mt-4">
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
        </div>
      </div>
    </div>
  );
};
