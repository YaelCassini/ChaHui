Component({
  mixins: [],
  data: {},
  props: {
    masonryData: [],
    columns: 2,
    isRanking: false,
    onTapCommodity: () => {},
    jumpToGoods: () => {},
    onTapjumpGoods: () => {},
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
    onTapjumpGoods(event) {
      var m_id=event.target.dataset.id.goods_id;
      var s_id=event.target.dataset.id.seller_id;
      console.log(m_id,s_id);
      this.props.onTapjumpGoods(m_id,s_id);
      
    },
  },
});
