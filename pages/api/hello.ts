// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from 'interfaces/ApiData';

const mockData: any = {
  name: 'Test Project',
  id: 'apple',
  projectedTotal: 800,
  actualTotal: 450,
  dataOrder: [
    {
      id: 1,
      name: 'Directors',
    },
  ],
  categories: {
    1: {
      name: 'Directors',
      total: 450,
      order: [123, 124],
    },
  },
  employees: {
    123: {
      name: 'George Lucas',
      rate: 100,
      totalDays: 3,
      actualTotalSalary: 300,
      projectedTotalSalary: 400,
    },
    124: {
      name: 'George Foreman',
      rate: 50,
      totalDays: 3,
      actualTotalSalary: 150,
      projectedTotalSalary: 400,
    },
  },
  weeklyReports: [
    {
      name: 'week 1',
      id: 'week-1-id',
      weeklyTotal: 150,
      employeePayBreakdown: {
        123: {
          days: 1,
          total: 100,
        },
        124: {
          days: 1,
          total: 50,
        },
      },
    },
  ],
  projectedTotals: {},
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET' && req.query.id === 'apple') {
    res.status(200).json(mockData);
  }
}
