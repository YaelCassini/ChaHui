import { getCommodity } from '../../services/comment';
import * as log from '../../utils/log';

Page({
  data: {
    CommodityInfo:
    {
      id: 0,
      name: '波霸奶茶',
      price: '18',
      salePerMonth: '1024',
      description:
      [{type: "商品描述", content: "奶茶搭配波霸，口感软Q。"},
       {type: "辅料", content: "波霸、植脂末"},
       {type: "原料", content: "阿萨姆红茶"},
      ],
      pic: '/asserts/picture/commodity/0001.jpg',
    },
    thumb: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
    expand3rd: false,
    tag: [
      'hello','hello2','hello3','hello4', 'test'],
    descriptor: [{
      title: '商品描述',
      content: '波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，',
    },{
      title: '商品描述',
      content: '波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，波霸奶茶美滋滋美滋滋美滋滋，',
    }]
    
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
  onShow() {
    this.fetchCurrentCommodities(1);
  },
  fetchCurrentCommodities(commodityType) {
    this.setData({ currentCommodities: [] });
    getCommodity({ type: commodityType })
      .then(
        ({ data = [] }) =>
        this.setData({
          currentCommodities: data,
        })
      )
      .catch(err =>
        log.error('handbag.fetchCurrentCommodities.getComment1', err)
      );
  },
});
