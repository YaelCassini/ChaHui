Component({
  mixins: [],
  data: {
    focus: false,
  },
  props: {
    disabled: false,
    defaultFocus: false,
    value: "",
    className: "",
    onInput: () => {},
    onClear: () => {},
    onConfirm: () => {},
  },
  didMount() {
    if (this.props.defaultFocus) {
      this.onFocus();
    }
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onBlur() {
      this.setData({ focus: false });
    },
    onFocus() {
      this.setData({ focus: true });
    },
    clear() {
      this.props.onClear();
    },
    onConfirm() {
      this.props.onConfirm();
    },
    onInput(e) {
      this.props.onInput(e);
    },
  },
});
