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
    }
  },
});
