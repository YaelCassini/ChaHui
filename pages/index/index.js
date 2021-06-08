Page({
  data: {
    message: "",
    swiperData: [],
    trailerCover: "",
    fruitTea: [],
    milkyTea: [],
    iceCream: [],
    enjoyment: [],
    drinkId: 0,
    drinkModalShow: false,
  },
  onLoad() {
    this.fetchData();
  },
  onPullDownRefresh() {
    // 页面被下拉
    this.fetchData();
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index",
    };
  },
  onDrinkModalClose() {
    this.setData({ drinkModalShow: false });
  },
  onDrinkSelect(id) {
    this.setData({ drinkModalShow: true, drinkId: id });
  },
  fetchData() {},
});
