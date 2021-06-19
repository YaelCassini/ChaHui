import { getCommodity } from '../../services/comment';
import * as log from '../../utils/log';

Page({
  data: {
    SellerInfo:
    {
      id: 0,
      name: 'Loading',
      salePerMonth: '-',
      waitingTime: '-',
      waitingCup: '-',
      pic: "/asserts/picture/loading.gif",
      tag: [{value:'-'}],
    },
    // {      
    //   id: 1,
    //   name: '茶百道（玉泉北门店）',
    //   salePerMonth: '7976',
    //   waitingTime: '34',
    //   waitingCup: '14',
    //   pic: "/asserts/picture/seller/chabaidao.jpg",
    //   tag: [{value:'超棒'},{value:'性价比高'},{value:'芋圆不错'},{value:'很快'}],
    // },
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
    searchValue: '',
    activeTabId: 0,
    currentCommodities: [],
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
  },
  onLoad(options)
  {
    this.fetchCurrentCommodities(1);
    my.serverless.db.collection('seller').find()
      .then(res => {
        this.setData({["SellerInfo"]:res.result[1]})
      })
      .catch(console.error);

    // this.onAddSellerInfo()
  },
  onShow() {
    
  },
  onTapCommodity(id) {
    // this.setData({ selectedCommodityId: id, showCommodityDrawer: true });
    my.navigateTo({url:'../card/card'});
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
  async onAddSellerInfo() {
    my.showLoading({
      content: '记录提交中',
    });
    my.serverless.db.collection('seller').insertOne(
      this.data.SellerInfo)
    .then(res => {})
    .catch(console.error);

    my.hideLoading();
    this.onPopupClose();
  },
});
