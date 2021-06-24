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
        title: '最新单品',
      },
      {
        id: 1,
        title: '销量最高',
      },
      {
        id: 2,
        title: '评价最优',
      },
      {
        id: 3,
        title: '好友推荐',
      },
    ],
    searchValue: '',
    activeTabId: 0,
    currentCommodities: [],
    commodities: [],
    activeTabId: 0,
  },
  onLoad()
  {
    my.serverless.db.collection('wish').find()
      .then(res => {
        console.log(res.result)
        this.setData({["commodities"]:res.result})
      })
      .catch(console.error);
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
      var cost1=this.data.cost;
      cost1=cost1+parseInt(id);
      console.log("bbb");
      this.setData({cost:cost1,});
    }    
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
    if(this.data.activeTabId==0)
    {
      my.serverless.db.collection('wish').find()
      .then(res => {
        console.log(res.result)
        this.setData({["commodities"]:res.result})
      })
      .catch(console.error);
    }
    else if(this.data.activeTabId==1)
    {
      my.serverless.db.collection('wish').find({},{sort: {salePerMonth: -1}})
      .then(res => {
        console.log(res.result)
        this.setData({["commodities"]:res.result})
      })
      .catch(console.error);
    }
    else if(this.data.activeTabId==2)
    {
      my.serverless.db.collection('wish').find({},{sort: {score: -1}})
      .then(res => {
        console.log(res.result)
        this.setData({["commodities"]:res.result})
      })
      .catch(console.error);
    }
    else if(this.data.activeTabId==3)
    {
      my.serverless.db.collection('wish').find({seller_id: 1},{})
      .then(res => {
        console.log(res.result)
        this.setData({["commodities"]:res.result})
      })
      .catch(console.error);
    }
    // this.fetchCurrentCommodities(id);
  },

});
