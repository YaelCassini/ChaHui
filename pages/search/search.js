import { getSearchTrend } from "../../services/commodity";
import * as log from "../../utils/log";

Page({
  data: {
    trend: [],
    searchValue: "",
  },
  onLoad() {
    getSearchTrend()
      .then(({ data }) => this.setData({ trend: data }))
      .catch(error => log.error("search.onLoad.getSearchTrend", error));
  },
  onSearchConfirm() {
    const app = getApp();
    app.searchValue = this.data.searchValue;
    my.navigateBack({
      delta: 1,
    });
  },
  onSearchInput({ detail }) {
    this.setData({ searchValue: detail.value });
  },
  onSearchClear() {
    this.setData({ searchValue: "" });
  },
});
