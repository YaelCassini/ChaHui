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

export const allCommodity = {
  data: [
    {
      id: 0,
      cover:
        "../../asserts/picture/yidiandian.jpg",
      title: "一点点",
      canSelfPickUp: true,
      price: 19,
      sales: 1589,
      score:4.9,
      seller_id: 0,
    },
    {
      id: 1,
      cover:
        "../../asserts/picture/shop/long.jpg",
      title: "黑泷堂",
      canSelfPickUp: true,
      price: 25,
      sales: 1249,
      score:4.8,
      seller_id: 2,
    },
    {
      id: 2,
      cover:
        "../../asserts/picture/shop/coco.jpg",
      title: "coco",
      canSelfPickUp: false,
      price: 15,
      sales: 1092,
      score:4.2,
      seller_id: 3,
    },
    {
      id: 3,
      cover:
        "../../asserts/picture/shop/xi.png",
      title: "喜茶",
      canSelfPickUp: true,
      price: 19,
      sales: 989,
      score:4.3,
      seller_id: 4,
    },
    {
      id: 4,
      cover:
        "../../asserts/picture/shop/cha.png",
      title: "茶百道",
      canSelfPickUp: true,
      price: 25,
      sales: 1749,
      score:4.7,
      seller_id: 1,
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
      canSelfPickUp: false,
      price: 39,
      sales: 1749,
      score:4.7,
      seller_id: 1,
    },
    {
      id: 1,
      cover:
        "../../asserts/picture/yidiandian.jpg",
      title: "一点点",
      canSelfPickUp: false,
      price: 39,
      sales: 1589,
      score:4.9,
      seller_id: 0,
    },
    {
      id: 2,
      cover:
        "../../asserts/picture/cuoneixiaojuancun.jpg",
      title: "厝内小眷村",
      canSelfPickUp: false,
      price: 30,
      sales: 1130,
      score:4.7,
      seller_id: 5,
    },
    {
      id: 3,
      cover:
        "../../asserts/picture/shop/coco.jpg",
      title: "coco",
      canSelfPickUp: false,
      price: 30,
      sales: 1092,
      score:4.6,
      seller_id: 3,
    },
    {
      id: 4,
      cover:
        "../../asserts/picture/shop/xi.png",
      title: "喜茶",
      canSelfPickUp: false,
      price: 30,
      sales: 989,
      score:4.3,
      seller_id: 4,
    },
  ],
};

export const priceCommodity = {
  data: [
    {
      id: 0,
      cover:
        "../../asserts/picture/chabaidao.jpg",
      title: "茶百道",
      canSelfPickUp: false,
      price: 39,
      sales: 1749,
      score:4.7,
      seller_id: 1,
      goods:[{path:"../../asserts/picture/caomeixiaoquexing.jpg"},{path:"../../asserts/picture/boba.jpg"},{path:"../../asserts/picture/yangzhiganlu.jpg"}],
    },
    {
      id: 1,
      cover:
        "../../asserts/picture/yidiandian.jpg",
      title: "一点点",
      canSelfPickUp: false,
      price: 39,
      sales: 1589,
      score:4.9,
      seller_id: 0,
      goods:[{path:"../../asserts/picture/caomeixiaoquexing.jpg"},{path:"../../asserts/picture/boba.jpg"},{path:"../../asserts/picture/yangzhiganlu.jpg"}],
    
    },
    {
      id: 2,
      cover:
        "../../asserts/picture/cuoneixiaojuancun.jpg",
      title: "厝内小眷村",
      canSelfPickUp: false,
      price: 30,
      sales: 1130,
      score:4.7,
      seller_id: 5,
      goods:[{path:"../../asserts/picture/caomeixiaoquexing.jpg"},{path:"../../asserts/picture/boba.jpg"},{path:"../../asserts/picture/yangzhiganlu.jpg"}],
    
    },
    {
      id: 3,
      cover:
        "../../asserts/picture/shop/coco.jpg",
      title: "coco",
      canSelfPickUp: false,
      price: 30,
      sales: 1092,
      score:4.6,
      seller_id: 3,
      goods:[{path:"../../asserts/picture/caomeixiaoquexing.jpg"},{path:"../../asserts/picture/boba.jpg"},{path:"../../asserts/picture/yangzhiganlu.jpg"}],
    
    },
    {
      id: 4,
      cover:
        "../../asserts/picture/shop/xi.png",
      title: "喜茶",
      canSelfPickUp: false,
      price: 30,
      sales: 989,
      score:4.3,
      seller_id: 4,
      goods:[{path:"../../asserts/picture/caomeixiaoquexing.jpg"},{path:"../../asserts/picture/boba.jpg"},{path:"../../asserts/picture/yangzhiganlu.jpg"}],
    
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
