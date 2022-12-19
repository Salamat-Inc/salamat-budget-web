import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { SalamatHeader } from 'stories/SalamatHeader';
import { Footer } from 'stories/Footer';
import { Button } from 'stories/Button';
import { Table } from 'stories/Table';
import { Data } from 'interfaces/ApiData';
import { BudgetContext } from 'contexts/Budget/BudgetContext';
import { AddItemModal } from 'components/AddItemModal';

const Home: NextPage = () => {
  const { project } = useContext(BudgetContext);
  const [activeWeeklyReport, setActiveWeeklyReport] = useState<number>(
    !project ? 0 : project.weeklyReports.length - 1
  );
  const [showItemModal, setShowItemModal] = useState(null);

  return (
    <>
      <SalamatHeader />
      {project ? (
        <>
          <main className="pb-24">
            <div className="flex flex-row py-7 px-5 justify-between">
              <h1 className="text-salamant-black text-2xl font-montserrat">
                {project?.name}
              </h1>
              <div className="flex flex-row">
                <Button label="Export" size="extra-small" />
                <Button label="Share" size="extra-small" twClasses="ml-4" />
              </div>
            </div>
            <div className="px-5">
              {project && (
                <Table
                  project={project}
                  activeWeeklyReport={activeWeeklyReport}
                  setShowItemModal={setShowItemModal}
                />
              )}
            </div>
          </main>
          <Footer project={project} activeWeeklyReport={activeWeeklyReport} />
          {showItemModal && (
            <AddItemModal
              open={showItemModal.type}
              setOpen={setShowItemModal}
            />
          )}
        </>
      ) : null}
    </>
  );
};

export default Home;
