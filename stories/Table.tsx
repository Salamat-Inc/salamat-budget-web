import React, { useContext, useEffect, useState } from 'react';
import { WeeklyReport } from 'components/WeeklyReport';
import { useNumberFormatter } from 'hooks/numberFormatter';
import { BudgetContext } from 'contexts/Budget/BudgetContext';
import { useDebounce } from 'hooks/useDebounce';
import { ProjectedTotalReport } from 'components/ProjectedTotalReport';
import { ActualTotalReport } from 'components/ActualTotalReport';

export const Table = ({
  project,
  activeWeeklyReport,
  setShowItemModal,
  setActiveWeeklyReport,
}: {
  project: any;
  activeWeeklyReport: number;
  setShowItemModal: (value: any) => void;
  setActiveWeeklyReport: (value: any) => void;
}) => {
  const budgetData = project.categories;

  return (
    // Container for the table
    <div className="min-w-full min-h-[800px] flex flex-row bg-salamat-lesser-white">
      {/* Actual Totals */}
      <ActualTotalReport
        project={project}
        data={budgetData}
        setShowItemModal={setShowItemModal}
      />

      {/* Weekly report */}
      <WeeklyReport
        projectData={project}
        activeWeeklyReport={activeWeeklyReport}
        setActiveWeeklyReport={setActiveWeeklyReport}
      />

      {/* Render projected totals */}
      <ProjectedTotalReport project={project} />
    </div>
  );
};
