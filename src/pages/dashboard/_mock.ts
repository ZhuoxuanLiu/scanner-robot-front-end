import type { Request, Response } from 'express';
import type { AnalysisData } from './data.d';
import type { CardData } from './data.d';

// mock data
const cardData: CardData = {
  currentBook: 3,
  runTime: 120,
  status: true,
};

const getFakeChartData: AnalysisData = {
  cardData,
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakeChartData,
  });
};

export default {
  'GET  /api/fake_analysis_chart_data': fakeChartData,
};
