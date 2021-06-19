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
        id: 0,
        title: '商品',
      },
      {
        id: 1,
        title: '评价',
      },
    ],
    activeTabId: 0,
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
  },
  onShow() {
    this.fetchCurrentCommodities(1);
  },
  fetchCurrentCommodities(commodityType) {
    this.setData({ currentCommodities: [] });
    getCommodity({ type: commodityType })
      .then(
        ({ data = [] }) =>
        this.setData({
          currentCommodities: data,
        })
      )
      .catch(err =>
        log.error('handbag.fetchCurrentCommodities.getComment1', err)
      );
  },
});
