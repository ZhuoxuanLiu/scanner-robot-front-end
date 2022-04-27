import { DataItem } from '@antv/g2plot/esm/interface/config';

export { DataItem };

export interface CardData {
  currentBook?: string | number;
  runTime?: string | number;
  status?: boolean;
}

export interface AnalysisData {
  cardData: CardData;
}
