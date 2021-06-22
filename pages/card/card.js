import { getCommodity } from '../../services/comment';
import * as log from '../../utils/log';

Page({
  data: {
    CommodityInfo:
    {
      id: 0,
      seller_id: 0,
      name: 'Loading',
      price: '-',
      salePerMonth: '-',
      score: '-',
      description:
      [{type: "-", content: "-"},
      ],
      pic: '/asserts/picture/loading.gif',
      tag: [{value:'-'},],
    },
    // {
    //   id: 1,
    //   seller_id: 1,
    //   name: '生椰大满贯',
    //   price: '16',
    //   salePerMonth: '1124',
    //   score: '4.9',
    //   description:
    //   [{type: "商品描述", content: "新鲜生打椰完美融合爽滑桂花冻、香软血糯米、Q弹椰果，一口大满足！"},
    //    {type: "主要原料", content: "椰浆，椰果，血糯米"},
    //   ],
    //   pic: '/asserts/picture/commodity/0004.jpg',
    //   tag: [{value:'适合半糖'},{value:'喜欢少冰'},],
    // },
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
    console.log("start")
    my.serverless.db.collection('commodity').insertOne(
      this.data.CommodityInfo)
    .then(res => {console.log("success")})
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
    
    console.log(options)
    const id = parseInt(options.id);
    const seller_id = parseInt(options.seller_id);
    console.log(id, seller_id)

    my.serverless.db.collection('commodity').findOne({
        id: { $eq: id },
        seller_id: { $eq: seller_id }
      })
      .then(res => {
        this.setData({["CommodityInfo"]:res.result})
      })
      .catch(console.error);
    console.log("finish")
  },
  onShow() {
    // this.onAddCommodity()
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
