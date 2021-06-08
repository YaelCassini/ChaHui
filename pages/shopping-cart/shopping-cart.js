Page({
  data: {
    count: 2,
    totalDiscount: 2,
    shopDiscount: 50,
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
  onLoad() {
    my.setNavigationBar({
      title: '屈臣氏购物车',
    });
  },
});
