Page({
  data: {
    commentContent: '',
    commentScore: 4,
    orderList: [ ],
    showIDtags: false,
    showAchievement: false,
    show: true,
    items: [
      { id: 1, value: '衣服', selected: true },
      { id: 1, value: '橱柜' },
    ],
    commentInfo:
    {
      userid: 0,
      isMyComment: true,
      avatar: "/asserts/my/avatar.jpg",
      sex: 1,
      tag1: "果茶爱好者",
      tag2: "只爱三分甜",
      time: "2021-06-18  10:31",
      score: 5,
      cover: "../../asserts/picture/caomeixiaoquexing.jpg",
      title: "草莓小确幸",
      subtitle: "厝内小眷村",
      addition: "椰果",
      temperature: "少冰",
      sweetness: "三分糖",
      detail: "强烈安利！和椰果绝配",
      url: "/pages/commodity/commodity/id?=undefined"
    }
  },
  handleCallBack(data) {
    my.alert({
      content: data,
    });
  },
  toggleFilter() {
    this.setData({
      show: !this.data.show,
    });
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
  onOneMoreOrder(){
    my.navigateTo({
              url: '/pages/business/business',
          })
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

    my.serverless.db.collection('comment').insertOne(this.data.commentInfo)
    .then(res => {})
    .catch(console.error);

    my.hideLoading();
    this.onPopupClose();
  },
});
