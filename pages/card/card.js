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
    //   id: 5,
    //   seller_id: 4,
    //   name: '芝芝芒芒',
    //   price: '35',
    //   salePerMonth: '170',
    //   score: '4.4',
    //   description:
    //   [{type: "商品描述", content: "冷650m1甄选当季台芒搭配清幽绿妍茶底新鲜现制，清新绵密。"},
    //    {type: "主要原料", content: "芝士、芒果"},
    //   ],
    //   pic: '/asserts/picture/commodity/0027.jpg',
    //   tag: [{value:'芒香浓郁'},{value:'满满芒果肉'},{value:'细腻芝士'},],
    // },
    
    expand3rd: false,
    
  },
  AddtoWish()
  {
    console.log("enter function");
    console.log(this.data.CommodityInfo);
    my.serverless.db.collection('wish').insertOne(this.data.CommodityInfo)
      .then(res => {
        console.log("success add to wish");
        my.showToast({
          type: 'success',
          content: '已将该单品加入愿望单',
          duration: 2000,
        });
      })
      .catch(console.error);  
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
    console.log(options)
    const id = parseInt(options.id);
    const seller_id = parseInt(options.seller_id);
    console.log(id, seller_id)

    this.setData({ currentCommodities: [] });
    
    my.serverless.db.collection('comment').find({
        seller_id: { $eq: seller_id },
        commodity_id: { $eq: id }
      })
      .then(res => {
        this.setData({["currentCommodities"]:res.result})
      })
      .catch(console.error);

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
  },
  
});
