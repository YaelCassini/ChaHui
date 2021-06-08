Page({
  data: {
    currentUser: {
      name: '糙米苏打0905',
      credit: 10,
      member: '屈臣氏会员',
    },
    entries: [
      {
        title: '新人礼遇',

        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*HTNURLN0hv8AAAAAAAAAAABkARQnAQ',
      },
      {
        title: '积分享好礼',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*8mUFQZnkpX4AAAAAAAAAAABkARQnAQ',
      },

      {
        title: '积分兑好礼',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*CwXrR4hRcGAAAAAAAAAAAABkARQnAQ',
      },

      {
        title: '会员特惠',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*dyvrR6BIbYgAAAAAAAAAAABkARQnAQ',
      },

      {
        title: '新人礼遇',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*7G9XQLcv6tYAAAAAAAAAAABkARQnAQ',
      },
    ],
    navList: [
      {
        name: '我的订单',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*Y8BATYqMN78AAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-order/my-order',
          }),
      },
      {
        name: '我的券',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*9RqXQaxLeCEAAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-ticket/my-ticket',
          }),
      },
      {
        name: '关于',
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
