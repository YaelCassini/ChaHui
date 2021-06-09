Page({
  data: {
    currentUser: {
      name: '奶茶品鉴大师',
      credit: 100,
      member: '尝新达人',
    },
    entries: [
      {
        title: '奶茶行家',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*HTNURLN0hv8AAAAAAAAAAABkARQnAQ',
      },
      {
        title: '尝新达人',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*8mUFQZnkpX4AAAAAAAAAAABkARQnAQ',
      },

      {
        title: '薅羊毛大师',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*CwXrR4hRcGAAAAAAAAAAAABkARQnAQ',
      },

      {
        title: '再来一杯',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*dyvrR6BIbYgAAAAAAAAAAABkARQnAQ',
      },

      {
        title: '体重超标',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*7G9XQLcv6tYAAAAAAAAAAABkARQnAQ',
      },
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
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*Y8BATYqMN78AAAAAAAAAAABkARQnAQ',
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
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*9RqXQaxLeCEAAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-ticket/my-ticket',
          }),
      },
      {
        name: '设置',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*-Lp1TZDggnoAAAAAAAAAAABkARQnAQ',
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
