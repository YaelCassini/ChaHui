Page({
  data: {
    commentContent: '',
    commentScore: 4,
    orderList: [ ],
    showIDtags: false,
    showAchievement: false,
  },
  onLoad() {
      // Set data from db
      my.serverless.db.collection('order')
        .find()
        .then(res => {
          console.log(res.result)
          this.data.orderList = res.result
          this.setData({["orderList"]:this.data.orderList})
          console.log(this.data.orderList)
        })
        .catch(console.error);
      this.setData({["orderList"]:this.data.orderList})
  },

  onButtomBtnTap() {
    this.setData({
      showBottom: true,
    });
  },
  onPopupClose() {
    this.setData({
      showLeft: false,
      showRight: false,
      showTop: false,
      showBottom: false,
    });
  },
  onInput(e) {
    this.setData({
      value: e.detail.value,
    });
    this.data.commentContent = e.detail.value
  },
  onScoreChange(e) {
    this.data.commentScore = e.detail.value
  },
  async onAddComment() {
    
    my.showLoading({
      content: '评论提交中',
    });

    my.serverless.db.collection('comment').insertOne({
      like: 0,
      score: this.data.commentScore,
      content: this.data.commentContent})
    .then(res => {})
    .catch(console.error);

    my.hideLoading();
    this.onPopupClose();
  },
});
