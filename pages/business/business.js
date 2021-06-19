import { getCommodity } from '../../services/comment';
import * as log from '../../utils/log';

Page({
  data: {
    seller_id: 0,
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
    //   id: 5,
    //   name: '厝内小眷村（文三店）',
    //   salePerMonth: '1633',
    //   waitingTime: '30',
    //   waitingCup: '12',
    //   pic: "/asserts/picture/seller/cuonei.jpg",
    //   tag: [{value:'超值'},{value:'性价比很高'},{value:'涓豆腐奶茶不错'}],
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
    commodities: [],
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
  },
  onLoad(options)
  {
    this.data.seller_id = parseInt(options.id);
    this.fetchCurrentCommodities(1);
    // seller info
    my.serverless.db.collection('seller').find()
      .then(res => {
        this.setData({["SellerInfo"]:res.result[options.id]})
      })
      .catch(console.error);
    // commodity info
    console.log(this.data.seller_id)
    my.serverless.db.collection('commodity').find({
        seller_id: { $eq: this.data.seller_id }
      })
      .then(res => {
        this.setData({["commodities"]:res.result})
      })
      .catch(console.error);
    // this.onAddSellerInfo()
  },
  onShow() {
    
  },
  onTapCommodity(id) {
    // this.setData({ selectedCommodityId: id, showCommodityDrawer: true });
    console.log("before navigate")
    console.log(id, this.data.commodities)
    const commodity_id = this.data.commodities[id].id;
    const seller_id = this.data.commodities[id].seller_id;
    console.log(commodity_id, seller_id)
    console.log("start navigate")
    my.navigateTo({url:'../card/card?id='+commodity_id+'&seller_id='+seller_id});
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
