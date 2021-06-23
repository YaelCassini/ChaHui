
Component({
  mixins: [],
  data: {
    test:1,
  },
  props: {
    masonryData: [],
    columns: 2,
    isRanking: false,
    onTapCommodity: () => {},
    jumpToGoods: () => {},
    addtoShoppingcar:() =>{},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTapCommodity(e) {
      this.props.onTapCommodity(0,e.target.dataset.id);
      console.log(e);
    },
    jumpToGoods(id, seller_id)
    {
      // 事件处理
		  console.log('我是点击事件')
      my.navigateTo({ url: '../../../card/card?id='+id+'&seller_id='+ seller_id})
    },
    addtoShoppingcar(event) {
      console.log(event);
      var price=event.target.dataset.id;
      console.log("test",price);
      this.props.onTapCommodity(1,price); 
    },
  },
});
