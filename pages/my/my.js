const achievementsData = {
  name:[
    "查看更多",
    "尝新达人",
    "薅羊毛大师",
    "奶茶行家",
    "体重超标",
    "再来一杯",
    "百家斩"
  ],
  pic:[
    '../../asserts/icon/achievement/chakangengduo.png',
    '../../asserts/icon/achievement/changxindaren.png',
    '../../asserts/icon/achievement/haoyangmaodashi.png',
    '../../asserts/icon/achievement/naichahangjia.png',
    '../../asserts/icon/achievement/tizhongchaobiao.png',
    '../../asserts/icon/achievement/zailaiyibei.png',
    '../../asserts/icon/achievement/bianchangbaijia.png'
  ]
};

Page({
  data: {
    currentUser: {
    },
    achievementsData,
    navList: [
      {
        name: '愿望单',
        thumb:
          '../../asserts/icon/wish.png',
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
          '../../asserts/icon/ticket.png',
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
  onLoad() {
    // Set data from db
      my.serverless.db.collection('user')
        .find()
        .then(res => {
          console.log(res.result)
          this.data.userList = res.result
          this.setData({["currentUser"]:this.data.userList[0]})
          console.log(this.data.userList[0])
        })
        .catch(console.error);
      this.setData({["currentUser"]:this.data.userList[0]})
  },
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
