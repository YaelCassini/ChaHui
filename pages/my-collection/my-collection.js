Page({
  data: {
    currentUser:[],
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
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
});
