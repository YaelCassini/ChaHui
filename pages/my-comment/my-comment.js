import { getCommodity } from '../../services/comment';
import * as log from '../../utils/log';
import { ALL, TREND, NEW, PRICE } from '../../asserts/CommentType';

Page({
  data: {
    commentInfo: []
  },  
  onLoad() {
    // Set data from db
    my.serverless.db.collection('comment')
      .find({
        isMyComment: { $eq: true }
      })
      .then(res => {
        this.setData({["commentInfo"]:res.result})
      })
      .catch(console.error);
  },
});
