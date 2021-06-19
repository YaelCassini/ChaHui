import { getCommodity } from '../../services/comment';
import * as log from '../../utils/log';

Page({
  data: {
    CommodityInfo:
    {
      id: 1,
      seller_id: 0,
      name: '四季奶青',
      price: '14',
      salePerMonth: '351',
      description:
      [{type: "商品描述", content: "四季春茶搭配特选植脂末，经由黄金比例调制而成，香顺可口。。"},
       {type: "辅料", content: "植脂末"},
       {type: "原料", content: "四季春茶"},
      ],
      pic: '/asserts/picture/commodity/0002.jpg',
      tag: [{value:'适合三分甜'},{value:'喜欢少冰'},{value:'加红豆不错'},],
    },
    expand3rd: false,
    
  },
  onCardClick(ev) {
    my.alert({
      content: ev.info,
    });
  },
  async onAddCommodity() {
    
    my.showLoading({
      content: '评论提交中',
    });

    my.serverless.db.collection('commodity').insertOne(
      this.data.CommodityInfo)
    .then(res => {})
    .catch(console.error);

    my.hideLoading();
    this.onPopupClose();
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
  async onLoad(options)
  {
    await this.fetchCurrentCommodities(1);
    console.log(this.data.currentCommodities)
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
});
