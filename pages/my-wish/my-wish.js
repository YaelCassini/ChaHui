Page({
  data: {
    commodities:[],
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

});
