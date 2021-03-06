export const searchTrend = {
  data: [
    "桃桃乌龙",
    "大叔奶茶",
    "黄金椰椰乌龙",
    "葡萄多肉",
    "西瓜波波",
    "茉莉奶绿",
    "杨枝甘露",
    "草莓小确幸",
    "抹茶唤相思",
  ],
};

export const Comment1 = {
  data: [
    {
      isMyComment: true,
      score: 3,
      
      cover: "../../asserts/picture/caomeixiaoquexing.jpg",
      title: "草莓小确幸",
      price:20,
      subtitle: "厝内小眷村",
      addition: "椰果",
      temperature: "少冰",
      sweetness: "三分糖",
      detail: "强烈安利，椰果绝配！",

    },
    {
      isMyComment: true,
      score: 3,
      price:20,
      cover: "../../asserts/picture/caomeixiaoquexing.jpg",
      title: "草莓小确幸",
      subtitle: "厝内小眷村",
      addition: "椰果",
      temperature: "少冰",
      sweetness: "三分糖",
      detail: "强烈安利，椰果绝配！",
    },
    {
      isMyComment: true,
      score: 3,
      price:20,
      cover: "../../asserts/picture/caomeixiaoquexing.jpg",
      title: "草莓小确幸",
      subtitle: "厝内小眷村",
      addition: "椰果",
      temperature: "少冰",
      sweetness: "三分糖",
      detail: "强烈安利，椰果绝配！",
    },
    {
      isMyComment: true,
      score: 3,
      price:20,
      cover: "../../asserts/picture/caomeixiaoquexing.jpg",
      title: "草莓小确幸",
      subtitle: "厝内小眷村",
      addition: "椰果",
      temperature: "少冰",
      sweetness: "三分糖",
      detail: "强烈安利，椰果绝配！",
    },
    {
      isMyComment: true,
      score: 3,
      price:20,
      cover: "../../asserts/picture/caomeixiaoquexing.jpg",
      title: "草莓小确幸",
      subtitle: "厝内小眷村",
      addition: "椰果",
      temperature: "少冰",
      sweetness: "三分糖",
      detail: "强烈安利，椰果绝配！",
    },
  ],
};

export const trendCommodity = {
  data: [
    {
      id: 0,
      cover:
        "../../asserts/picture/chabaidao.jpg",
      title: "茶百道",
      //canSelfPickUp: true,
      price: 39,
      sales: 30,
    },
    {
      id: 1,
      cover:
        "../../asserts/picture/yidiandian.jpg",
      title: "一点点",
      //canSelfPickUp: true,
      price: 39,
      sales: 30,
    },
    {
      id: 2,
      cover:
        "../../asserts/picture/cuoneixiaojuancun.jpg",
      title: "厝内小眷村",
      //canSelfPickUp: false,
      price: 30,
      sales: 30,
    },
    {
      id: 3,
      cover:
        "../../asserts/picture/cuoneixiaojuancun.jpg",
      title: "厝内小眷村",
      //canSelfPickUp: false,
      price: 30,
      sales: 39,
    },
    {
      id: 4,
      cover:
        "../../asserts/picture/cuoneixiaojuancun.jpg",
      title: "厝内小眷村",
      //canSelfPickUp: false,
      price: 30,
      sales: 30,
    },
  ],
};

export const commodityDetail = {
  data: {
    cover:
      "../../asserts/picture/cuoneixiaojuancun.jpg",
    commodityName: "",
    price: 30,
    storage: 774,
    type: "少冰，三分糖",
    shippingMethod: [
      {
        id: 1,
        name: "派送上门",
      },
      {
        id: 2,
        name: "门店自提",
      },
    ],
    shippingFrom: {
      type: "同城配送",
      name: "饿了么骑手",
    },
    shippingTime: {
      payTime: "11:00",
      receiveDay: "今天",
      receiveFormatDay: "11:30",
    },
    options: [
      {
        id: 1,
        name: "温度",
        values: [
          {
            id: 1,
            name: "正常冰",
          },
          {
            id: 2,
            name: "少冰",
          },
          {
            id: 3,
            name: "去冰",
          },
          {
            id: 4,
            name: "常温",
          },
        ],
      },
      {
        id: 2,
        name: "甜度",
        values: [
          {
            id: 1,
            name: "正常糖",
          },
          {
            id: 2,
            name: "七分糖",
          },
          {
            id: 3,
            name: "五分糖",
          },
          {
            id: 4,
            name: "三分糖",
          },
          {
            id: 5,
            name: "不另外加糖",
          },
        ],
      },
    ],
    maxPurchaseNumber: 2,
  },
};
