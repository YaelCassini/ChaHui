Component({
  mixins: [],
  data: {},
  props: {
    commentData: [],
    columns: 2,
    isRanking: false,
    commodity:[],
    onTapCommodity: () => {},
    jumpToGoods: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},

  methods: {
    onTapCommodity(e) {
      this.props.onTapCommodity(e.target.dataset.id);
    },
    jumpToGoods()
    {
      // 事件处理
		  console.log('我是点击事件')
      my.navigateTo({ url: '../card/card' })
    },
    AddtoCollection(event)
    {
      console.log(event);
      var item=event.target.dataset.id;
      my.serverless.db.collection('collection').insertOne(item)
        .then(res => {
          console.log("success add to collection");
          my.showToast({
            type: 'success',
            content: '已将该评价加入我的收藏',
            duration: 2000,
          });
        })
        .catch(error =>{
          console.log("failed add to collection");
          my.showToast({
            type: 'fail',
            content: '该评价已在我的收藏中',
            duration: 2000,
          });
          console.error;
        });  
    },
    AddtoWish(event)
    {
      console.log(event);
      var item=event.target.dataset.id;
      var seller_id = item.seller_id;
      var commodity_id = item.commodity_id;
      console.log("seller:"+seller_id);
      console.log("commodity:"+commodity_id);
      my.serverless.db.collection('commodity').find({
        seller_id: { $eq: item.seller_id },
        id: { $eq: item.commodity_id },
      })
        .then(res => {
          this.setData({["commodity"]:res.result[0]});
          console.log("commodity:"+this.data.commodity);
          my.serverless.db.collection('wish').insertOne(this.data.commodity)
            .then(res => {
              console.log("success add to wish");
              my.showToast({
                type: 'success',
                content: '已将该单品加入我的愿望单',
                duration: 2000,
              });
            })
            .catch(error =>{
              console.log("failed add to wish");
              my.showToast({
                type: 'fail',
                content: '该单品已在我的愿望单中',
                duration: 2000,
              });
              console.error;
            });  
        })
        .catch(console.error);
      // my.serverless.db.collection('wish').insertOne(item)
      //   .then(res => {
      //     console.log("success add to wish");
      //     my.showToast({
      //       type: 'success',
      //       content: '已将该单品加入我的愿望单',
      //       duration: 2000,
      //     });
      //   })
      //   .catch(error =>{
      //     console.log("failed add to wish");
      //     my.showToast({
      //       type: 'fail',
      //       content: '该单品已在我的愿望单中',
      //       duration: 2000,
      //     });
      //     console.error;
      //   });  
    },
  },
});
