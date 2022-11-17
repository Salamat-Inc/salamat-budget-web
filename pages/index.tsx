import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SalamatHeader } from '../stories/SalamatHeader';
import { Button } from '../stories/Button';
import { Table } from '../stories/Table';
const Home: NextPage = () => {
  return (
    <>
      <SalamatHeader />
      <div className="flex flex-row py-7 px-5 justify-between">
        <h1 className="text-salamant-black text-2xl font-montserrat">
          Broken Play
        </h1>
        <div className="flex flex-row">
          <Button label="Export" size="extra-small" />
          <Button label="Share" size="extra-small" twClasses="ml-4" />
        </div>
      </div>
      <div className="px-5">
        <Table />
      </div>
    </>
  );
};

export default Home;
