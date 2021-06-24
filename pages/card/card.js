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
    //   id: 6,
    //   seller_id: 2,
    //   name: '白桃仙人',
    //   price: '18',
    //   salePerMonth: '87',
    //   score: '4.7',
    //   description:
    //   [{type: "商品描述", content: "“仙”气十足：瓜不过分“甜”，桃页不过分“香”"},
    //   ],
    //   pic: '/asserts/picture/commodity/0032.jpg',
    //   tag: [{value:'很甜'},{value:'果味纯正'}],
    // },
    
    expand3rd: false,
    
  },
  async onLoad(options)
  {
    console.log(options)
    const id = parseInt(options.id);
    const seller_id = parseInt(options.seller_id);
    console.log(id, seller_id)

    // this.onAddCommodity()
    
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
      .catch(error =>{
        console.log("failed add to wish");
        my.showToast({
          type: 'fail',
          content: '该单品已在愿望单中',
          duration: 2000,
        });
        console.error;
      });  
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
  fetchCurrentCommodities(commodityType) {
  },
  
});
