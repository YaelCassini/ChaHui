Component({
  mixins: [],
  data: {},
  props: {
    tabs: [],
    activeId: 0,
    className: '',
    onActiveTabChange: () => undefined,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onItemTap(e) {
      this.props.onActiveTabChange(e.target.dataset.index);
    },
  },
});
