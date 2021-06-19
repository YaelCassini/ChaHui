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
      description:
      [{type: "-", content: "---"}
      ],
      pic: "/asserts/picture/loading.gif",
      tag: [{value:'-'}],
    },
    // {
    //   id: 0,
    //   name: '一点点（玉泉北门店）',
    //   salePerMonth: '3089',
    //   waitingTime: '30',
    //   waitingCup: '12',
    //   description:
    //   [{type: "商品描述", content: "四季春茶搭配特选植脂末，经由黄金比例调制而成，香顺可口。。"},
    //    {type: "辅料", content: "植脂末"},
    //    {type: "原料", content: "四季春茶"},
    //   ],
    //   pic: "/asserts/picture/seller/onedotdot.jpg",
    //   tag: [{value:'适合三分甜'},{value:'喜欢少冰'},{value:'环境不错'},{value:'芒果很甜'}],
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
        this.setData({["SellerInfo"]:res.result[0]})
      })
      .catch(console.error);

    // this.onAddSellerInfo()
  },
  onShow() {
    
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
