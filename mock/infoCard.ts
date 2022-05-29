import type { Request, Response } from 'express';
import type { CardData } from '@/pages/dashboard/data.d';

// mock data
const cardData: CardData = {
  currentBook: 3,
  runTime: 120,
  status: 1,
};

const fakeCardData = (_: Request, res: Response) => {
  return res.json({ cardData });
};

export default {
  'GET  /api/info_card': fakeCardData,
};
