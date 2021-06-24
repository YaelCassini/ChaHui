Page({
  data: {
    currentUser:[],
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
    activeTabId: 0,
    myfans:[],
    tabs: [
      {
        id: 0,
        title: '最新',
      },
      {
        id: 1,
        title: '最热',
      },
      {
        id: 2,
        title: '好友圈',
      },
    ],
  },
  onLoad()
  {
    my.serverless.db.collection('collection').find()
      .then(res => {
        console.log(res.result)
        this.setData({["currentCommodities"]:res.result})
      })
      .catch(console.error);
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
    // this.fetchCurrentCommodities(id);
    if(this.data.activeTabId==0)
    {
      my.serverless.db.collection('collection').find()
      .then(res => {
        console.log(res.result)
        this.setData({["currentCommodities"]:res.result})
      })
      .catch(console.error);
    }
    else if(this.data.activeTabId==1)
    {
      my.serverless.db.collection('collection').find({},{sort: {commodity_id: 1}})
      .then(res => {
        console.log(res.result)
        this.setData({["currentCommodities"]:res.result})
      })
      .catch(console.error);
    }
    else if(this.data.activeTabId==2)
    {
      my.serverless.db.collection('user')
      .find({userID: "000001"},{projection: {fansUser: 1,_id:0}})
      .then(res => {
        this.data.fansList = res.result[0]["fansUser"]
        //this.data.followList = res.result
        this.setData({["myfans"]:this.data.fansList})
        //console.log(this.data.followList)
        //console.log(this.data.myfans)
        
        // Set data from db
        my.serverless.db.collection('comment')
          //.find({userID:{$in: ["000003", "000004", "000002"]}})
          .find({userid: {$in: [0,2]}})
          .then(res => {
            console.log(res.result)
            this.setData({["currentCommodities"]:res.result})
          })
          .catch(console.error);
          // this.setData({["currentCommodities"]:this.data.userList});
        })
        .catch(console.error);
    }
  },
});
