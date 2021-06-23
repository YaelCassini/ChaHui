const medals = [
    "尝新达人",
    "薅羊毛大师",
    "奶茶行家",
    "体重超标",
    "再来一杯",
    "百茶斩"
  ];
const sexs = ['男', '女'];

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

Page({
  data: {
    currentUser:{
      isMyAccount: true,
      name: "奶茶品鉴大师",
      avatar: "/asserts/my/avatar.jpg",
      sex: 1,
      tag1: "果茶爱好者",
      tag2: "只爱三分糖",
      time: "2021-06-18  10:31",
      follow: 10,
      fans: 20,
      comment: 50,
      followUser: [
        "000003",
        "000004",
        "000002"
      ],
      fansUser: [
        "000004",
        "000005",
        "000006"
      ],
      introduction: "该用户还没有简介",
      medal1: 1,
      medal2: 2,
      medal3: 3,
      userID: "000001",
      medals: [
        1,
        2,
        3,
        0
      ]
    },
    cardNo: '1234****',
    name: '',
    showAchievement: true,
    showIDtags: true,
    tag1: "果茶爱好者",
    tag2: "只爱三分糖",
    medal: '尝新达人',
    sex: '女',
  },
  onLoad()
  {
    my.serverless.db.collection('user')
      .find({userID: "000001"})
      .then(res => {
        //console.log(res.result[0]);
        this.data.currentUserInfo = res.result[0]
        //this.data.followList = res.result
        this.setData({["currentUser"]:this.data.currentUserInfo})
        //console.log(this.data.currentUser)
      });
  },
  saveChange()
  {
    console.log(this.data.currentUser);
    my.serverless.db.collection('user').updateOne({
               _id: this.data.currentUser._id}, {
              $set: {
                sex: 5
              }
          })
            .then(res => {
              console.log("success");
            })
            .catch(console.error);
    // my.serverless.db.collection('user').updateOne(
    //   {
    //     userID: "000001"
    //   }, 
    //   {
    //     $set: {sex:3}
    //   });
  },
  onExtraTap() {
    my.alert({
      content: 'extra tapped',
    });
  },
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  onItemFocus() {},
  onItemBlur() {},
  onItemConfirm() {},
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
    console.log(this.data.currentUser.tag2);
  },
  onSend() {
    my.alert({
      title: 'verify code sent',
    });
  },
  setInfo(e) {
    const { dataset } = e.target;
    const { name } = dataset;
    if (name) {
      this.setData({
        [name]: e.detail.value,
      });
    }
  },

  onPickerTap() {
    my.showActionSheet({
      title: '选择展示勋章',
      items: medals,
      success: (res) => {
        this.setData({
          medal: medals[res.index],
        });
        this.setData({
          ["currentUser.medal1"]: res.index+1,
        });
      },
    });
  },
  onPickerTap1() {
    my.showActionSheet({
      title: '您的性别',
      items: sexs,
      success: (res) => {
        this.setData({
          ["currentUser.sex"]: res.index+1,
        });
        this.setData({
          ["sex"]: sexs[res.index],
        });
      },
    });
  },
});
