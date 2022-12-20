// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from 'interfaces/ApiData';

const mockData: any = {
  name: 'Test Project',
  id: 'apple',
  projectedTotal: 8000000,
  actualTotal: 40000,
  dataOrder: [
    {
      id: 1,
      name: 'Directors',
    },
  ],
  categories: {
    1: {
      name: 'Directors',
      total: 905,
      projectedCategoryTotal: 5000000,
      order: [
        { id: 123, type: 'employee' },
        { id: 124, type: 'employee' },
        { id: 11, type: 'subcategory' },
      ],
    },
  },
  subCategories: {
    11: {
      name: "Director's Assistant",
      total: 200,
      projectedSubCategoryTotal: 5000,
      order: [{ id: 125, type: 'employee' }],
    },
  },
  employees: {
    123: {
      name: 'Jane Doe',
      rate: 40,
      totalDays: 10,
      actualTotalSalary: 400,
      projectedTotalSalary: 15000,
    },
    124: {
      name: 'John Doe',
      rate: 30.5,
      totalDays: 10,
      actualTotalSalary: 305,
      projectedTotalSalary: 10000,
    },
    125: {
      name: 'Assistant Doe',
      rate: 20,
      totalDays: 10,
      actualTotalSalary: 200,
      projectedTotalSalary: 5000,
    },
  },
  weeklyReports: [
    {
      name: 'week 1',
      id: 'week-1-id',
      weeklyTotal: 210,
      employeePayBreakdown: {
        123: {
          days: 1,
          total: 40,
        },
        124: {
          days: 1,
          total: 30.5,
        },
        125: {
          days: 1,
          total: 20,
        },
        11: {
          total: 20,
        },
        1: {
          total: 90.5,
        },
      },
    },
    {
      name: 'week 2',
      id: 'week-2-id',
      weeklyTotal: 180.5,
      employeePayBreakdown: {
        123: {
          days: 3,
          total: 120,
        },
        124: {
          days: 2,
          total: 60.5,
        },
        125: {
          days: 1,
          total: 20,
        },
        11: {
          total: 20,
        },
        1: {
          total: 180.5,
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
