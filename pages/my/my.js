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
      introduction: "该用户还没有简介",
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
    ],
    navList: [
      {
        name: '愿望单',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*Y8BATYqMN78AAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-achievement/my-achievement',
          }),
      },
      {
        name: '我的收藏',
        thumb:
          '../../asserts/icon/collection.png',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-collection/my-collection',
          }),
      },
      {
        name: '我的卡劵',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*9RqXQaxLeCEAAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-ticket/my-ticket',
          }),
      },
      {
        name: '我的测评',
        thumb:
          '../../asserts/icon/comment.png',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-comment/my-comment',
          }),
      },
      {
        name: '设置',
        thumb:
          '../../asserts/icon/setting.png',
        onClick: () => 
          my.navigateTo({
              url: '/pages/my-setting/my-setting',
          }),
      },
    ],
  },
  onLoad() {},
  onAchievementClick() {
    my.navigateTo({
      url: '/pages/my-achievement/my-achievement',
    })
  },
  onListClick({ target: { dataset } }) {
    const { onClick } = this.data.navList[dataset.index];
    if (onClick) {
      onClick();
    }
  },
  jumpToFollow() {
    my.navigateTo({
      url: '/pages/my-follow/my-follow',
    })
  },
  jumpToFans() {
    my.navigateTo({
      url: '/pages/my-fans/my-fans',
    })
  },
  jumpToComment() {
    my.navigateTo({
      url: '/pages/my-comment/my-comment',
    })
  },
});
