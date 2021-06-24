import { getCommodity } from '../../services/comment';
import * as log from '../../utils/log';

Page({
  data: {
    seller_id: 0,
    cost:0,
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
    ChoiceDetail:
    {
      temperature: "",
      sweetness: "",
      addstuff: "",
    },
    CommodityDetail:
    {
      commodity_id: 0,
      title: "波霸奶茶",
      description: "少冰 三分糖",
      price: "18.00",
      num: "1",
      image: "/asserts/picture/commodity/0001.jpg",
      commented: false,
    },
    orderInfo:
    {
      seller_id: 0,
      seller_name: "一点点",
      time: "2021.4.11 12:09",
      state: "商家备货中",
      sum: "48.00",
      total: 2,
      value: "内容",
      controlled: true,
      commodity: [
        {
          commodity_id: 0,
          title: "波霸奶茶",
          description: "少冰 三分糖",
          price: "18.00",
          num: "1",
          image: "/asserts/picture/commodity/0001.jpg",
          commented: false,
        },
        {
          commodity_id: 1,
          title: "四季奶青",
          description: "正常冰 五分糖",
          price: "14.00",
          num: "1",
          image: "/asserts/picture/commodity/0002.jpg",
          commented: false,
        }
      ],
    }, 
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
    showBottom: false,
    currentid: 0,
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
  },
  onLoad(options)
  {
    this.data.seller_id = parseInt(options.id);
    this.data.orderInfo.seller_id = this.data.seller_id;
    this.data.orderInfo.total = 0;
    this.data.orderInfo.commodity = [];
    this.data.orderInfo.seller_name = this.data.SellerInfo.name

    this.fetchCurrentCommodities();
    // seller info
    my.serverless.db.collection('seller').find()
      .then(res => {
        this.setData({["SellerInfo"]:res.result[options.id]})
        this.data.orderInfo.seller_name = this.data.SellerInfo.name
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
      // console.log("test",this.commodities);
    // this.onAddSellerInfo()
  },
  onShow() {
    
  },
  
  onTapCommodity(flag,id) {
    
    if(flag==0){
      // this.setData({ selectedCommodityId: id, showCommodityDrawer: true });
      console.log("before navigate1")
      console.log(id, this.data.commodities)
      const commodity_id = this.data.commodities[id].id;
      const seller_id = this.data.commodities[id].seller_id;
      console.log(commodity_id, seller_id)
      console.log("start navigate")
      my.navigateTo({url:'../card/card?id='+commodity_id+'&seller_id='+seller_id});
    }
    else{
      console.log("before navigate1")
      console.log(id, this.data.commodities)
      console.log(id)
      console.log(id, this.data.commodities[id])
      console.log(id, this.data.commodities[id], this.data.commodities[id].id)
      this.data.CommodityDetail.commodity_id = this.data.commodities[id].id
      this.data.CommodityDetail.title = this.data.commodities[id].name
      this.data.CommodityDetail.price = this.data.commodities[id].price
      this.data.CommodityDetail.num = "1",
      this.data.CommodityDetail.image = this.data.commodities[id].pic
      
      this.data.currentid = id
      this.onPopupShow()
    }
  },

  onUploadOrder()
  {
    console.log("Upload Order")
    
      my.getServerTime({
        success: (res) => {
        var now = new Date(res.time);
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        console.log("Time: ",year,month,date,hour,minute)
        
        this.data.orderInfo.time = year+"-"+month+"-"+date+" "+hour+":"+minute;
        this.data.orderInfo.total = this.data.orderInfo.commodity.length;
        console.log(this.data.orderInfo)

        
        my.serverless.db.collection('order').insertOne(this.data.orderInfo)
          .then(res => {
              my.navigateTo({url:'../order/order'});
          })
          .catch(console.error);

      }})
      .catch(console.error);
      
  },
  onPopupShow()
  {
    this.setData({
      showBottom: true,
    });
    
  },
  onPopupClose()
  {
    this.setData({
      showBottom: false,
    });

  },
  fetchCurrentCommodities() {
    this.setData({ currentCommodities: [] });
    
    my.serverless.db.collection('comment').find({
        seller_id: { $eq: this.data.seller_id }
      })
      .then(res => {
        this.setData({["currentCommodities"]:res.result})
      })
      .catch(console.error);
  },
  onAddCommodity()
  {
    this.data.CommodityDetail.description = this.data.ChoiceDetail.temperature + " " + 
      this.data.ChoiceDetail.sweetness +  " " + 
      this.data.ChoiceDetail.addstuff;

    var d = JSON.stringify(this.data.CommodityDetail);
    var dd = JSON.parse(d);
    this.data.orderInfo.commodity.push(dd)
    console.log(this.data.orderInfo.commodity)

    var cost1=this.data.cost;
    cost1=cost1+parseInt(this.data.commodities[this.data.currentid].price);
    console.log("bbb");
    this.setData({cost:cost1,});
    this.onPopupClose()

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
  onInput(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  temperatureChange(e) {
    console.log('你选择的温度是：', e.detail.value);
    this.data.ChoiceDetail.temperature = e.detail.value;
  },
  addstuffChange(e) {
    console.log('你选择的加料是：', e.detail.value);
    this.data.ChoiceDetail.addstuff = e.detail.value;
  },
  sweetnessChange(e) {
    console.log('你选择的加料是：', e.detail.value);
    this.data.ChoiceDetail.sweetness = e.detail.value;
  },
});
