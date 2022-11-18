import React, { useContext, useEffect, useState } from 'react';
import { WeeklyReport } from 'components/WeeklyReport';
import { useNumberFormatter } from 'hooks/numberFormatter';
import { BudgetContext } from 'contexts/Budget/BudgetContext';
import { useDebounce } from 'hooks/useDebounce';
import { ProjectedTotalReport } from 'components/ProjectedTotalReport';
import { ActualTotalReport } from 'components/ActualTotalReport';

export const Table = ({ project }: { project: any }) => {
  const data = project.categories;
  const weeklyData = project.weeklyReports;

  return (
    // Container for the table
    <div className="min-w-full flex flex-row bg-salamat-lesser-white">
      {/* Actual Totals */}
      <ActualTotalReport project={project} data={data} />

      {/* Weekly report */}
      <WeeklyReport weekData={weeklyData} projectData={project} />

      {/* Render projected totals */}
      <ProjectedTotalReport />
    </div>
  );
};
