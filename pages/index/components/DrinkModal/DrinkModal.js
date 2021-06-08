Component({
  mixins: [],
  data: {
    title: "饮悦工坊来杯百香果",
    description: "YinYooWorkShop",
    content: [
      {
        name: "h2",
        attrs: {
          class: "h2",
        },
        children: [
          {
            type: "text",
            text: "产品描述",
          },
        ],
      },
      {
        name: "p",
        attrs: {
          class: "h4",
        },
        children: [
          {
            type: "text",
            text:
              "百香果又叫鸡蛋果，果瓤多汁液，气味特别芳香，可散发出香蕉、菠萝、柠檬、草莓、番桃、石榴等多种水果的浓郁香味而被举为“百香果”。",
          },
        ],
      },
      {
        name: "p",
        attrs: {
          class: "h4",
        },
        children: [
          {
            type: "text",
            text:
              "注：该产品冷饮为冰摇状态，只供冷饮。产品含大块果肉，为提倡环保，luckin门店不主动提供叉子，如有需要请备注。",
          },
        ],
      },
      {
        name: "h2",
        attrs: {
          class: "h2",
        },
        children: [
          {
            type: "text",
            text: "调制配料",
          },
        ],
      },
      {
        name: "p",
        attrs: {
          class: "h4",
        },
        children: [
          {
            type: "text",
            text: "百香果、冬提、奇异果、青柠片",
          },
        ],
      },
    ],
  },
  props: {
    show: false,
    onClose: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClose() {
      this.props.onClose();
    },
  },
});
