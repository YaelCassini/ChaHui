import { getCommodity } from '../../services/collection';
import * as log from '../../utils/log';
import { ALL, TREND, NEW, PRICE } from '../../asserts/CommentType';

Page({
  data: {
    searchValue: '',
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
    commodities:[],
  },
  onLoad()
  {
    my.serverless.db.collection('commodity').find()
      .then(res => {
        console.log(res.result)
        this.setData({["commodities"]:res.result})
      })
      .catch(console.error);
  },

});
