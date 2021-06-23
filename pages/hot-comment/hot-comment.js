Page({
  data: {
    currentUser:[],
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
    activeTabId: 0,
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
  },
});
