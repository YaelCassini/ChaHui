Page({
  data: {
    searchValue: '',
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
    myfans:[],
    ffansList:[],

  },
  onLoad() {
    my.serverless.db.collection('user')
      .find({userID: "000001"},{projection: {fansUser: 1,_id:0}})
      .then(res => {
        this.data.fansList = res.result[0]["fansUser"]
        //this.data.followList = res.result
        this.setData({["myfans"]:this.data.fansList})
        //console.log(this.data.followList)
        //console.log(this.data.myfans)
        
        // Set data from db
        my.serverless.db.collection('user')
          //.find({userID:{$in: ["000003", "000004", "000002"]}})
          .find({userID: {$in: this.data.myfans}})
          .then(res => {
            console.log(res.result)
            this.data.userList = res.result
            this.setData({["currentCommodities"]:this.data.userList})
            //console.log(this.data.userList)
          })
          .catch(console.error);
          this.setData({["currentCommodities"]:this.data.userList});
        })
        .catch(console.error);

  },
});
