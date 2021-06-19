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
    //   id: 3,
    //   seller_id: 2,
    //   name: '荔枝肉肉奶绿',
    //   price: '13',
    //   salePerMonth: '35',
    //   score: '5',
    //   description:
    //   [{type: "商品描述", content: "荔枝夏了夏天，妙！"},
    //    {type: "主要原料", content: "荔枝，椰果，绿茶"},
    //   ],
    //   pic: '/asserts/picture/commodity/0003.png',
    //   tag: [{value:'适合七分甜'},{value:'喜欢少冰'},{value:'加椰果不错'},],
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
