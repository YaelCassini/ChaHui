import { request } from "../utils/request";
import {
  searchTrend,
  Comment1,
  trendCommodity,
  commodityDetail,
} from "./__mock__/comment";
import { ALL, TREND } from "../asserts/CommentType";

export const getSearchTrend = () => {
  // return request(`${URL_PREFIX}/trend`);
  return Promise.resolve(searchTrend);
};

export const getCommodity = ({ type = 1 }) => {
  // return request(`${URL_PREFIX}/commodity?type=${type}`);
  switch (type) {
    case ALL:
      return Promise.resolve(Comment1);
    case TREND:
      return Promise.resolve(trendCommodity);
    default:
      return Promise.resolve([]);
  }
};

export const getCommodityDetail = id => {
  // return request(`${URL_PREFIX}/commodity/${id}`);
  return Promise.resolve(commodityDetail);
};
