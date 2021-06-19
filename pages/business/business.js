Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
    expand3rd: false,
    SellerName: '一点点',
    descriptor: [{
      title: '商品描述',
      content: '波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，',
    },{
      title: '商品描述',
      content: '波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，',
    }] ,
    src: '../asserts/picture/yangzhiganlu.jpg',
    activeTabId: 0,
    tabs: [{
        id: 0,
        title: '奶茶',
      },{
        id: 1,
        title: '评价',
      }]
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
    this.fetchCurrentCommodities(id);
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
