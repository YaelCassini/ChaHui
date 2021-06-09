Page({
  data: {
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false,

    activeIndex: 1,
    failIndex: 0,
    size: 0,

    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
    expand3rd: false, 

    items: [{
      title: '步骤1',
    }, {
      title: '步骤2',
    }, {
      title: '步骤3',
    }, {
      title: '步骤3',
    }, {
      title: '步骤3',
    }],
    
    orderList: [
      {
        time: '2019.4.11 12:09',
        state: '商家备货中',
        sum: '1096.00',
        total: 2,
        commodity: [
          {
            title: '屈臣氏 碧柔致臻颜面膜64片 补水 水润 白皙 保湿 透滑',
            description: '150ml',
            price: '299.00',
            num: '1',
            image:
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ',
          },
          {
            title: '屈臣氏 碧柔致臻颜面膜64片 补水 水润 白皙 保湿 透滑',
            description: '150ml',
            price: '299.00',
            num: '1',
            image:
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*6HXWRKGCK-oAAAAAAAAAAABkARQnAQ',
          },
        ],
      },
      {
        time: '2019.4.11 12:09',
        state: '配送中',
        sum: '1096.00',
        total: 2,
        commodity: [
          {
            title: '屈臣氏 碧柔致臻颜面膜64片 补水 水润 白皙 保湿 透滑',
            description: '150ml',
            price: '299.00',
            num: '1',
            image:
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ',
          },
          {
            title: '屈臣氏 碧柔致臻颜面膜64片 补水 水润 白皙 保湿 透滑',
            description: '150ml',
            price: '299.00',
            num: '1',
            image:
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*6HXWRKGCK-oAAAAAAAAAAABkARQnAQ',
          },
        ],
      },
    ],
  },
  onLoad() {},
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    });
  },
  changeVertical() {
    this.setData({
      vertical: !this.data.vertical,
    });
  },
  changeCircular(e) {
    this.setData({
      circular: !this.data.circular,
    });
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay,
    });
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value,
    });
  },
  nextStep() {
    this.setData({
      activeIndex: this.data.activeIndex + 1,
    });
  },
  preStep() {
    this.setData({
      activeIndex: this.data.activeIndex - 1,
    });
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
