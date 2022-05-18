import request from "@/utils/request";
import type {CardData} from "@/pages/dashboard/data";

export const getInfoCard = async (): Promise<{ data: CardData }> => {
  return request.get('/api/info_card')
}
