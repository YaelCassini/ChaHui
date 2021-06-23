const recommendpics = [
  '../../asserts/picture/low-hot.jpg',
  '../../asserts/picture/recommend2.jpg',
  '../../asserts/picture/recommend3.jpg',
  '../../asserts/picture/recommend2.jpg',
  '../../asserts/picture/recommend.jpg'
];
Page({
  data: {
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 1000,
    interval2: 3000,
    circular: false, 
    recommend:['../../asserts/picture/recommend.jpg','../../asserts/picture/recommend2.jpg','../../asserts/picture/recommend3.jpg'],
 
    recommendpic:'../../asserts/picture/low-hot.jpg',
    activeIndex: 1,
    failIndex: 0,
    size: 0,

    thumb: '../../asserts/icon/achievement/zailaiyibei.png',
    expand3rd: false, 

    items: [{
      title: '低卡奶茶',
    }, {
      title: '夏季果茶',
    }, {
      title: '风味咖啡',
    }, {
      title: '芝士奶盖',
    }, {
      title: '冷萃冰沙',
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
  jumpToHotComment()
  {
    console.log("this is jump to HotComment");
    my.navigateTo({
      url: '/pages/hot-comment/hot-comment',
    })
  },
  jumpToHotItem()
  {
    console.log("this is jump to HotItem");
    my.navigateTo({
      url: '/pages/hot-item/hot-item',
    })
  },
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
      activeIndex: this.data.activeIndex%5 + 1,
    });
    var picindex = (this.data.activeIndex-1)%5;
    this.setData({
      recommendpic: recommendpics[picindex],
    });
  },
  preStep() {
    this.setData({
      activeIndex: (this.data.activeIndex+5-2)%5+1,
    });
    var picindex = (this.data.activeIndex-1)%5;
    this.setData({
      recommendpic: recommendpics[picindex],
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
  // 新增数据
  async onAdd() {
    my.showLoading({
      content: '新增记录中',
    });
    
    my.serverless.db.collection('comment').insertOne({
      name: 'tom',
      age: 1})
    .then(res => {})
    .catch(console.error);

    my.hideLoading();
  },
});
