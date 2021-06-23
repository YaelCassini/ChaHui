const achievementsData = {
  name:[
    "查看更多",
    "尝新达人",
    "薅羊毛大师",
    "奶茶行家",
    "体重超标",
    "再来一杯",
    "百茶斩"
  ],
  pic:[
    '../../asserts/icon/achievement/chakangengduo.png',
    '../../asserts/icon/achievement/changxindaren.png',
    '../../asserts/icon/achievement/haoyangmaodashi.png',
    '../../asserts/icon/achievement/naichahangjia.png',
    '../../asserts/icon/achievement/tizhongchaobiao.png',
    '../../asserts/icon/achievement/zailaiyibei.png',
    '../../asserts/icon/achievement/baichazhan.png'
  ]
};

Component({
  mixins: [],
  data: {
    achievementsData,
  },
  props: {
    commentData: [],
    isRanking: false,
  },
  
});
