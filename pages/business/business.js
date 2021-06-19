import { getCommodity } from '../../services/comment';
import * as log from '../../utils/log';
import { ALL, TREND, NEW, PRICE } from '../../asserts/CommentType';

Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
    expand3rd: false,
    SellerName: '一点点',
    descriptor: [{
      title: '商品描述',
      content: '波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，',
    },{
      title: '商品描述',
      content: '波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，',
    }] ,
    src: '../asserts/picture/yangzhiganlu.jpg',

    tabs: [
      {
        id: ALL,
        title: '新品上市',
      },
      {
        id: TREND,
        title: '人气店家',
      },
      {
        id: NEW,
        title: '猜你喜欢',
      },
      {
        id: PRICE,
        title: '价格',
        sortable: true,
      },
    ],
    activeTabId: ALL,
    ALL,
    TREND,
    NEW,
    PRICE,
    searchValue: '',
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
    this.fetchCurrentCommodities(id);
  },
  onCardClick(ev) {
    my.alert({
      content: ev.info,
    });
  },
  onActionClick() {
    my.alert({
      content: 'action clicked',
    });
  },
  onExtraActionClick() {
    my.alert({
      content: 'extra action clicked',
    });
  },
  toggle() {
    this.setData({
      expand3rd: !this.data.expand3rd,
    });
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
    this.setData({ selectedCommodityId: id, showCommodityDrawer: true });
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
        log.error('handbag.fetchCurrentCommodities.getComment1', err)
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
