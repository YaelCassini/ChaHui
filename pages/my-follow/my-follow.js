import { getCommodity } from '../../services/user';
import * as log from '../../utils/log';
// import { ALL, TREND, NEW, PRICE } from '../../asserts/CommentType';

Page({
  data: {
    searchValue: '',
    activeTabId: 1,
    currentCommodities: [],
    myfollows:[],
    selectedCommodityId: '',
    followList:[],
    // achievementsData,
  },
  onLoad() {
    my.serverless.db.collection('user')
      .find({userID: "000001"},{projection: {followUser: 1,_id:0}})
      .then(res => {
        this.data.followList = res.result[0]["followUser"]
        //this.data.followList = res.result
        this.setData({["myfollows"]:this.data.followList})
        //console.log(this.data.followList)
        //console.log(this.data.myfans)
        
        // Set data from db
        my.serverless.db.collection('user')
          //.find({userID:{$in: ["000003", "000004", "000002"]}})
          .find({userID: {$in: this.data.myfollows}})
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
      // this.setData({["myfans"]:this.data.followList});    
      // console.log(currentCommodities);
  },
});
