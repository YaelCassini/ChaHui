Page({
  data: {
    commentContent: '',
    commentScore: 4,
    orderList: [
      {
        time: '2021.4.11 12:09',
        state: '商家备货中',
        sum: '48.00',
        total: 2,
        value: '内容',
        controlled: true,
        commodity: [
          {
            title: '杨枝甘露',
            description: '少冰 三分糖',
            price: '19.00',
            num: '1',
            image:
              '../../asserts/picture/yangzhiganlu.jpg',
          },
          {
            title: '草莓小确幸',
            description: '正常冰 五分糖',
            price: '29.00',
            num: '1',
            image:
              '../../asserts/picture/caomeixiaoquexing.jpg',
          },
        ],
      },
      {
        time: '2021.4.11 12:06',
        state: '配送中',
        sum: '48.00',
        total: 2,
        commodity: [
          {
            title: '杨枝甘露',
            description: '少冰 三分糖',
            price: '19.00',
            num: '1',
            image:
              '../../asserts/picture/yangzhiganlu.jpg',
          },
          {
            title: '草莓小确幸',
            description: '正常冰 五分糖',
            price: '29.00',
            num: '1',
            image:
              '../../asserts/picture/caomeixiaoquexing.jpg',
          },
        ],
      },
    ],
  },
  onLoad() {
      this.data.orderList[2] = this.data.orderList[0]
      this.data.orderList[0].state = 'wtf'
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
    
    // my.serverless.db.collection('order')
    //   .find()
    //   .then(res => {
    //     console.log(this.data.orderList)
    //     this.data.orderList[2] = this.data.orderList[0]
    //     this.data.orderList[0].state = 'wtf'
    //     this.setData({["orderList"]:this.data.orderList})
    //     console.log(this.data.orderList)
    //   })
    //   .catch(console.error);
      
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
