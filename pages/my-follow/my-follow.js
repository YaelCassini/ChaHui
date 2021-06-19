import { getCommodity } from '../../services/user';
import * as log from '../../utils/log';
// import { ALL, TREND, NEW, PRICE } from '../../asserts/CommentType';

Page({
  data: {
    searchValue: '',
    activeTabId: 1,
    currentCommodities: [],
    selectedCommodityId: '',
    // achievementsData,
  },
  onLoad() {
    // Set data from db
      my.serverless.db.collection('user')
        .find()
        .then(res => {
          //console.log(res.result)
          this.data.userList = res.result
          this.setData({["currentCommodities"]:this.data.userList})
          //console.log(this.data.userList)
        })
        .catch(console.error);
      this.setData({["currentCommodities"]:this.data.userList});
      // console.log(currentCommodities);
  },
  // onShow() {
  //   // const { searchValue = '' } = getApp();
  //   // this.setData({ searchValue });
  //   // this.fetchCurrentCommodities(this.data.activeTabId);
  // },
  // getCommodityDetailPagePath(id) {
  //   return `/pages/commodity/commodity?id=${id}`;
  // },
  // mapCommodityItemToViewList(commodities = []) {
  //   return commodities.map(item => ({
  //     ...item,
  //     url: this.getCommodityDetailPagePath(item.id),
  //   }));
  // },
  // fetchCurrentCommodities(commodityType) {
  //   this.setData({ currentCommodities: [] });
  //   getCommodity({ type: commodityType })
  //     .then(({ data = [] }) =>
  //       this.setData({
  //         currentCommodities: this.mapCommodityItemToViewList(data),
  //       })
  //     )
  //     .catch(err =>
  //       log.error('handbag.fetchCurrentCommodities.getComment1', err)
  //     );
  // },
});
