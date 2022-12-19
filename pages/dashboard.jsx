import React from 'react';
import Link from 'next/link';
import { SalamatHeader } from 'stories/SalamatHeader';
import { SideNav } from 'components/SideNav';

const Dashboard = () => {
  return (
    <>
      <SalamatHeader />
      <main className="min-h-[calc(100vh_-_80px)] flex flex-row">
        <SideNav />
        <div className="p-8 grid gap-x-8 gap-y-4 grid-cols-6">
          {/* budget component */}
          <div className=" flex flex-col items-center">
            <Link href="/budget/12uih2191l">
              <div className="h-36 w-36 bg-salamat-orange text-5xl text-salamat-white flex justify-center items-center">
                MT 1
              </div>
              <div className="text-center pt-4">
                Movie Title 1<br />
                Budget
              </div>
            </Link>
          </div>

          <div className=" flex flex-col items-center">
            <Link href="/budget/12iu23h391l">
              <div className="h-36 w-36 bg-salamat-orange text-5xl text-salamat-white flex justify-center items-center">
                MT 2
              </div>
              <div className="text-center pt-4">
                Movie Title 2<br />
                Budget
              </div>
            </Link>
          </div>

          <div className=" flex flex-col items-center">
            <Link href="/budget/23987hui2hi">
              <div className="h-36 w-36 bg-salamat-orange text-5xl text-salamat-white flex justify-center items-center">
                MT 3
              </div>
              <div className="text-center pt-4">
                Movie Title 2<br />
                Budget
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
export default Dashboard;
