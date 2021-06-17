const ONLINE = 0;
const OFFLINE = 1;

Page({
  data: {
    ONLINE,
    OFFLINE,
    tabs: [
      {
        title: '外卖优惠券',
        subTitle: '描述文案',
        // number: '6',
        showBadge: true,
        badge: {
          arrow: true,
          stroke: true,
        },
      },
      {
        title: '到店优惠券',
        subTitle: '描述文案描述',
        // number: '66',
        showBadge: true,
        badge: {
          arrow: false,
          stroke: true,
        },
      },
    ],
    tickets: [
      {
        id: 0,
        price: 10,
        baseline: 100,
        startAt: '2021.4.01',
        endAt: '2021.12.31',
      },
      {
        id: 0,
        price: 30,
        baseline: 300,
        startAt: '2021.4.01',
        endAt: '2021.12.31',
      },
      {
        id: 0,
        price: 5,
        baseline: 30,
        startAt: '2021.4.01',
        endAt: '2021.12.31',
      },
    ],
    activeId: 0,
  },
  onLoad() {},
  onTabItemTap(id) {
    console.log(id);
    this.setData({ activeId: id });
  },
});
