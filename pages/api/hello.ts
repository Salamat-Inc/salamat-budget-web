// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from 'interfaces/ApiData';

const mockData: any = {
  name: 'Test Project',
  id: 'apple',
  projectedTotal: 800,
  actualTotal: 300,
  dataOrder: [
    {
      id: 1,
      name: 'Directors',
    },
  ],
  categories: {
    1: {
      name: 'Directors',
      total: 300,
      order: [
        // {
        //   id: 123,
        //   type: 'employee',
        //   rate: 100,
        //   days: 2,
        //   total: 200,
        //   projectedTotal: 400,
        // },
        // {
        //   id: 124,
        //   type: 'employee',
        //   rate: 100,
        //   days: 1,
        //   total: 100,
        //   projectedTotal: 400,
        // },
        123,
      ],
    },
  },
  employees: {
    123: {
      name: 'George Lucas',
      rate: 100,
      totalDays: 2,
      actualTotalSalary: 200,
      projectedTotalSalary: 400,
      weeklyBreakdown: {},
    },
    // 124: {
    //   name: 'John Doe',
    // },
  },
  weeklyReports: [
    {
      name: 'week 1',
      rateData: {
        123: {
          days: 1,
          currentTotal: 100,
          totalToDate: 100,
        },
        // 124: {
        //   days: 1,
        //   currentTotal: 200,
        //   totalToDate: 200,
        // },
      },
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET' && req.query.id === 'apple') {
    res.status(200).json(mockData);
  }
}
