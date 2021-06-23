Component({
  mixins: [],
  data: {},
  props: {
    commentData: [],
    columns: 2,
    isRanking: false,
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
        .catch(console.error);  
    },
  },
});
