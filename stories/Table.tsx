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

export const Table = () => {
  return (
    // Container for the table
    <div className="min-w-full flex flex-row bg-salamat-lesser-white">
      <div className="w-[40%] shadow-[7px_0_14px_-7px_rgba(54,61,77,0.4)] p-4">
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
          <div className="w-[50%]">Principal Cast</div>
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
        {/* All categor"ies dropdown */}
        <div className="flex flex-row justify-between h-16 items-center">
          <div>left</div>
          <div>Week 1</div>
          <div>right</div>
        </div>
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
        </div>
      </div>

      <div className="w-[30%] shadow-[-7px_0_14px_-7px_rgba(54,61,77,0.4)] p-4">
        <div className="flex flex-row justify-between items-center h-16"></div>
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
