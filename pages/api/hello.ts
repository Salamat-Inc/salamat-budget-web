// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Data } from 'interfaces/ApiData';

const mockData: Data = {
  name: 'Test Project',
  id: 'apple',
  categories: [],
  employees: [],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET' && req.query.id === 'apple') {
    res.status(200).json(mockData);
  }
}
