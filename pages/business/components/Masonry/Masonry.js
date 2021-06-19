import {cost} from
Component({
  mixins: [],
  data: {},
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
      this.props.onTapCommodity(e.target.dataset.id);
    },
    jumpToGoods(id, seller_id)
    {
      // 事件处理
		  console.log('我是点击事件')
      my.navigateTo({ url: '../../../card/card?id='+id+'&seller_id='+ seller_id})
    },
    addtoShoppingcar(event) {
      onsole.log('加入购物车');

    },
  },
});
