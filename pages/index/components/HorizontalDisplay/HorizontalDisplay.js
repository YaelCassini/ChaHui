Component({
  mixins: [],
  data: {},
  props: {
    dataList: [],
    moreAction: "",
    onSelect: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onItemSelect(e) {
      this.props.onSelect(e.target.dataset.itemId);
    },
  },
});
