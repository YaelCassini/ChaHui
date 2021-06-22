import { getCommodity } from '../../services/commodity';
import * as log from '../../utils/log';
import { ALL, TREND, NEW, PRICE } from '../../asserts/CommodityType';

Page({
  data: {
    ALL,
    TREND,
    NEW,
    PRICE,
    searchValue: '',
    tabs: [
      {
        id: NEW,
        title: '附近的店',
      },
      {
        id: TREND,
        title: '人气店家',
      },
      {
        id: ALL,
        title: '猜你喜欢',
      },

    ],
    activeTabId: NEW,
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
  },
  onShow() {
    const { searchValue = '' } = getApp();
    this.setData({ searchValue });
    this.fetchCurrentCommodities(this.data.activeTabId);
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
    this.fetchCurrentCommodities(id);
  },
  onTapCommodity(id) {
    const seller_id = this.data.currentCommodities[id].seller_id
    console.log(seller_id)
    // this.setData({ selectedCommodityId: id, showCommodityDrawer: true });
    my.navigateTo({url:'../business/business?id='+seller_id});
  },
  onTapjumpGood(m_id){
    const commodity_id = this.data.commodities[id].id;
    const seller_id = this.data.commodities[id].seller_id;
    my.navigateTo({url:'../card/card?id='+commodity_id+'&seller_id='+seller_id});
  },
  onCloseCommodityDrawer() {
    this.setData({ showCommodityDrawer: false });
  },
  getCommodityDetailPagePath(id) {
    return `/pages/commodity/commodity?id=${id}`;
  },
  mapCommodityItemToViewList(commodities = []) {
    return commodities.map(item => ({
      ...item,
      url: this.getCommodityDetailPagePath(item.id),
    }));
  },
  fetchCurrentCommodities(commodityType) {
    this.setData({ currentCommodities: [] });
    getCommodity({ type: commodityType })
      .then(({ data = [] }) =>
        this.setData({
          currentCommodities: this.mapCommodityItemToViewList(data),
        })
      )
      .catch(err =>
        log.error('handbag.fetchCurrentCommodities.getAllCommodity', err)
      );
  },
  onConfirm() {
    this.onCloseCommodityDrawer();
    my.showToast({
      type: 'success',
      content: '添加成功，在购物车等亲',
      duration: 3000,
    });
  },
});
