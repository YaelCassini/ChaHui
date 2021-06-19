import { request } from "../utils/request";
import {
  searchTrend,
  Comment1,
} from "./__mock__/collection";

export const getSearchTrend = () => {
  // return request(`${URL_PREFIX}/trend`);
  return Promise.resolve(searchTrend);
};

export const getCommodity = ({ type = 1 }) => {
  // return request(`${URL_PREFIX}/commodity?type=${type}`);
  return Promise.resolve(Comment1);
};

// export const getCommodityDetail = id => {
//   // return request(`${URL_PREFIX}/commodity/${id}`);
//   return Promise.resolve(commodityDetail);
// };
