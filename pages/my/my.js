Page({
  data: {
    currentUser: {
      name: '奶茶品鉴大师',
      credit: 100,
      member: '尝新达人',
      sex:"../../asserts/my/women.png",
      tag1:"果茶爱好者",
      tag2:"只爱三分糖",
      follow: 20,
      fans:5,
      comment:20,
    },
    entries: [
      {
        title: '奶茶行家',
        cover:
          '../../asserts/icon/achievement/naichahangjia.png',
      },
      {
        title: '尝新达人',
        cover:
          '../../asserts/icon/achievement/changxindaren.png',
      },
      {
        title: '薅羊毛大师',
        cover:
          '../../asserts/icon/achievement/haoyangmaodashi.png',
      },
      {
        title: '查看更多',
        cover:
          '../../asserts/my/more.png',
      },

      // {
      //   title: '再来一杯',
      //   cover:
      //     '../../asserts/icon/achievement/zailaiyibei.png',
      // },

      // {
      //   title: '体重超标',
      //   cover:
      //     '../../asserts/icon/achievement/tizhongchaobiao.png',
      // },
    ],
    navList: [
      {
        name: '愿望单',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*Y8BATYqMN78AAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-order/my-order',
          }),
      },
      {
        name: '收藏',
        thumb:
          '../../asserts/icon/collection.png',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-order/my-order',
          }),
      },
      {
        name: '卡包',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*9RqXQaxLeCEAAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-ticket/my-ticket',
          }),
      },
      {
        name: '我的评价',
        thumb:
          '../../asserts/icon/comment.png',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-ticket/my-ticket',
          }),
      },
      {
        name: '设置',
        thumb:
          '../../asserts/icon/setting.png',
        onClick: () => {},
      },
    ],
  },
  onLoad() {},
  onListClick({ target: { dataset } }) {
    const { onClick } = this.data.navList[dataset.index];
    if (onClick) {
      onClick();
    }
  },
});
