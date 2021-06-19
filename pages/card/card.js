Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
    expand3rd: false,
    GoodName: '波霸奶茶',
    tag: [
      'hello','hello2','hello3','hello4', 'test'],
    descriptor: [{
      title: '商品描述',
      content: '波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，',
    },{
      title: '商品描述',
      content: '波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，',
    }] ,
    src: '../asserts/picture/yangzhiganlu.jpg',

  },
  onCardClick(ev) {
    my.alert({
      content: ev.info,
    });
  },
  onActionClick() {
    my.alert({
      content: 'action clicked',
    });
  },
  onExtraActionClick() {
    my.alert({
      content: 'extra action clicked',
    });
  },
  toggle() {
    this.setData({
      expand3rd: !this.data.expand3rd,
    });
  },
});
