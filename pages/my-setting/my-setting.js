const medals = ['再来一杯', '薅羊毛大师', '奶茶行家', '体重超标', '尝新达人'];

Page({
  data: {
    cardNo: '1234****',
    name: '',
    layerShow1: '',
    layerShow2: '垂直输入框的布局',
    layerShow3: 'disabled 状态的 input',
    showAchievement: false,
    showIDtags: false,
    IDtag1: "果茶爱好者",
    IDtag2: "只爱三分糖",
    medal: '',
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
      },
    });
  },
});
