import { getAllCategories } from "../../services/category";
import * as log from "../../utils/log";

Page({
  data: {
    categories: [],
  },
  onLoad({ query }) {
    console.log(query);
    getAllCategories()
      .then(({ data }) => this.setData({ categories: data }))
      .catch(error => log.error("category.onLoad.getAllCategories", error));
  },
});
