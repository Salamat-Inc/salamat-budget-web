// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from 'interfaces/ApiData';

const mockData: any = {
  name: 'Test Project',
  id: 'apple',
  projectedTotal: 800,
  dataOrder: [
    {
      id: 1,
      name: 'Directors',
    },
  ],
  categories: {
    1: {
      name: 'Directors',
      order: [
        {
          id: 123,
          type: 'employee',
          rate: 100,
          days: 2,
          total: 200,
          projectedTotal: 400,
        },
        {
          id: 124,
          type: 'employee',
          rate: 100,
          days: 2,
          total: 200,
          projectedTotal: 400,
        },
      ],
    },
  },
  employees: {
    123: {
      name: 'George Lucas',
    },
    124: {
      name: 'John Doe',
    },
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
        124: {
          days: 1,
          currentTotal: 200,
          totalToDate: 200,
        },
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
