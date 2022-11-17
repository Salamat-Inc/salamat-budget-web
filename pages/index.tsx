import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import { SalamatHeader } from 'stories/SalamatHeader';
import { Button } from 'stories/Button';
import { Table } from 'stories/Table';
import { Data } from 'interfaces/ApiData';
const Home: NextPage = () => {
  const { data, error } = useSWR<Data>(
    '/api/hello/?id=apple',
    (url: string) => {
      return fetch(url).then((res) => res.json());
    }
  );

  return (
    <>
      <SalamatHeader />
      <div className="flex flex-row py-7 px-5 justify-between">
        <h1 className="text-salamant-black text-2xl font-montserrat">
          {data?.name}
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
