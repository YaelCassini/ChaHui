Page({
  data: {
    myIdentity:
    {
      userName: "奶茶品鉴大师",
      isMyComment: true,
      avatar: "/asserts/my/avatar.jpg",
      sex: 1,
      tag1: "果茶爱好者",
      tag2: "只爱三分甜",
    },
    commentContent: '',
    commentScore: 4,
    orderList: 
    [ ],
    // [{
    //   seller_id: 0,
    //   seller_name: "一点点",
    //   time: "2021.4.11 12:09",
    //   state: "商家备货中",
    //   sum: "48.00",
    //   total: 2,
    //   value: "内容",
    //   controlled: true,
    //   commodity: [
    //     {
    //       commodity_id: 0,
    //       title: "波霸奶茶",
    //       description: "少冰 三分糖",
    //       price: "18.00",
    //       num: "1",
    //       image: "/asserts/picture/commodity/0001.jpg",
    //       commented: false,
    //     },
    //     {
    //       commodity_id: 1,
    //       title: "四季奶青",
    //       description: "正常冰 五分糖",
    //       price: "14.00",
    //       num: "1",
    //       image: "/asserts/picture/commodity/0002.jpg",
    //       commented: false,
    //     }
    //   ],
    // },
    // ], 
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
      seller_id: 0,
      commodity_id: 0,
      user_name: "奶茶品鉴大师",
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
    },
    selectedOrder: 0,
    selectedCommodity: 0,
    WriteComment:
    {
      score: 4,
      temperature: "少冰",
      sweetness: "七分糖",
      addstuff: "奶霜",
      writing: "很好喝",
    }
  },
  onLoad() {
      // insert data
      // this.onAddOrder()
      // Set data from db
      my.serverless.db.collection('order')
        .find()
        .then(res => {
          console.log("res", res.result)
          this.data.orderList = res.result
          this.setData({["orderList"]:this.data.orderList})
          console.log(this.data.orderList)
        })
        .catch(console.error);
      this.useAccountDoComment("000003", 0, 1)
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
  CommodityNav(event)
  {
      console.log('Order index: ', event.target.dataset.orderId)
      console.log('Commodity index: ', event.target.dataset.commodityId)
      
      const selectedOrder = event.target.dataset.orderId;
      const selectedCommodity = event.target.dataset.commodityId;
    
      const seller_id = this.data.orderList[selectedOrder].seller_id;
      console.log(seller_id)
      const commodity_id = this.data.orderList[selectedOrder].commodity[selectedCommodity].commodity_id;
      console.log(seller_id, commodity_id)
      console.log("start navigate")
      my.navigateTo({url:'../card/card?id='+commodity_id+'&seller_id='+seller_id});
  },
  useAccountDoComment(userId, sellerId, commodityId)
  {
    my.serverless.db.collection('user').find({
          userID: userId})
      .then(res => {

      this.data.commentInfo.seller_id = sellerId,
      this.data.commentInfo.commodity_id = commodityId,
      this.data.commentInfo.isMyComment = false,
      this.data.commentInfo.avatar = res.result[0].avatar,
      this.data.commentInfo.sex = res.result[0].sex,
      this.data.commentInfo.tag1 = res.result[0].tag1,
      this.data.commentInfo.tag2 = res.result[0].tag2,
      this.data.commentInfo.user_name = res.result[0].name,

      this.data.commentInfo.score = this.data.WriteComment.score,
      this.data.commentInfo.addition = this.data.WriteComment.addstuff,
      this.data.commentInfo.temperature = this.data.WriteComment.temperature,
      this.data.commentInfo.sweetness = this.data.WriteComment.sweetness,
      this.data.commentInfo.detail = this.data.WriteComment.writing,
      this.data.commentInfo.url = '../card/card?id='+commodityId+'&seller_id='+sellerId
      
      my.getServerTime({
        success: (res) => {
        var now = new Date(res.time);
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        console.log("Time: ",year,month,date,hour,minute)
        
        this.data.commentInfo.time = year+"-"+month+"-"+date+" "+hour+":"+minute;

        my.serverless.db.collection('commodity')
        .find({seller_id: sellerId},{id: commodityId})
        .then(res => {
          
          this.data.commentInfo.cover = res.result[0].pic
          this.data.commentInfo.title = res.result[0].name
                    
          my.serverless.db.collection('seller')
            .find({id: sellerId})
            .then(res => {
              this.data.commentInfo.subtitle = res.result[0].name;

              my.serverless.db.collection('comment').insertOne(this.data.commentInfo)
                .then(res => {
                })
                .catch(console.error);

        })
        .catch(console.error);
        })
        .catch(console.error);
      }})})
      .catch(console.error);
  },

  onButtomBtnTap(event) {
    console.log('Order index: ', event.target.dataset.orderId)
    console.log('Commodity index: ', event.target.dataset.commodityId)

    this.data.selectedOrder = event.target.dataset.orderId;
    this.data.selectedCommodity = event.target.dataset.commodityId;
    
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
    this.data.WriteComment.writing = e.detail.value
  },
  onScoreChange(e) {
    console.log('你选择的分数是：', e.detail.value);
    this.data.WriteComment.score = e.detail.value
  },
  temperatureChange(e) {
    console.log('你选择的温度是：', e.detail.value);
    this.data.WriteComment.temperature = e.detail.value;
  },
  addstuffChange(e) {
    console.log('你选择的加料是：', e.detail.value);
    this.data.WriteComment.addstuff = e.detail.value;
  },
  sweetnessChange(e) {
    console.log('你选择的加料是：', e.detail.value);
    this.data.WriteComment.sweetness = e.detail.value;
  },
  async onAddComment() {
    
    my.showLoading({
      content: '评论提交中',
    });
    
    my.getServerTime({
      success: (res) => {
        console.log(res.time)
        var now = new Date(res.time);
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        console.log(year,month,date,hour,minute)

      const selectedOrder = this.data.selectedOrder;
      const selectedCommodity = this.data.selectedCommodity;
      const seller_id = this.data.orderList[selectedOrder].seller_id;
      const commodity_id = this.data.orderList[selectedOrder].commodity[selectedCommodity].commodity_id;
        
      this.data.commentInfo.seller_id = seller_id,
      this.data.commentInfo.commodity_id = commodity_id,
      this.data.commentInfo.isMyComment = this.data.myIdentity.isMyComment,
      this.data.commentInfo.avatar = this.data.myIdentity.avatar,
      this.data.commentInfo.sex = this.data.myIdentity.sex,
      this.data.commentInfo.tag1 = this.data.myIdentity.tag1,
      this.data.commentInfo.tag2 = this.data.myIdentity.tag2,
      this.data.commentInfo.time = year+"-"+month+"-"+date+" "+hour+":"+minute;
      this.data.commentInfo.score = this.data.WriteComment.score,
      this.data.commentInfo.cover = this.data.orderList[selectedOrder].commodity[selectedCommodity].image,
      this.data.commentInfo.title = this.data.orderList[selectedOrder].commodity[selectedCommodity].title,
      this.data.commentInfo.subtitle = this.data.orderList[selectedOrder].seller_name,
      this.data.commentInfo.addition = this.data.WriteComment.addstuff,
      this.data.commentInfo.temperature = this.data.WriteComment.temperature,
      this.data.commentInfo.sweetness = this.data.WriteComment.sweetness,
      this.data.commentInfo.detail = this.data.WriteComment.writing,
      this.data.commentInfo.url = '../card/card?id='+commodity_id+'&seller_id='+seller_id
      
      this.data.orderList[selectedOrder].commodity[selectedCommodity].commented = true;
      this.setData({["orderList"]:this.data.orderList})

      my.serverless.db.collection('comment').insertOne(this.data.commentInfo)
        .then(res => {
          // Change commented done
          console.log("id",this.data.orderList._id)
          
          my.serverless.db.collection('order').updateOne({
               _id: this.data.orderList[selectedOrder]._id}, {
              $set: {
                commodity: this.data.orderList[selectedOrder].commodity
              }
          })
            .then(res => {
              
            })
            .catch(console.error)
        })
        .catch(console.error);
      },

    });

    my.hideLoading();
    this.onPopupClose();
  },
  async onAddOrder()
  {
      console.log(this.data.orderList[0])
      my.serverless.db.collection('order').insertOne(this.data.orderList[0])
        .then(res => {
        })
        .catch(console.error);
  },
});