import React from 'react'
import { Cascader } from 'antd';
import "./style.css"
//千万不要展开看（下拉数据）
const options = [{
  value: 'A',
  label: '以A开头',
  children: [{
    "value": 495,
    "label": "阿拉善盟",
  },
  {
    "value": 527,
    "label": "鞍山市",
  },
  {
    "value": 1181,
    "label": "安庆市",
  },
  {
    "value": 1718,
    "label": "安阳市",
  },
  {
    "value": 2678,
    "label": "阿坝藏族羌族自治州",
  },
  {
    "value": 2763,
    "label": "安顺市",
  },
  {
    "value": 3049,
    "label": "阿里地区",
  },
  {
    "value": 3172,
    "label": "安康市",
  },
  {
    "value": 3439,
    "label": "阿克苏地区",
  },
  {
    "value": 3495,
    "label": "阿勒泰地区",
  },
  {
    "value": 3517,
    "label": "澳门市",
  }],
}, {
  value: 'B',
  label: 'B',
  children: [{
    "value": 2,
    "label": "北京市",
  },
  {
    "value": 132,
    "label": "保定市",
  },
  {
    "value": 388,
    "label": "包头市",
  },
  {
    "value": 453,
    "label": "巴彦淖尔市",
  },
  {
    "value": 545,
    "label": "本溪市",
  },
  {
    "value": 675,
    "label": "白山市",
  },
  {
    "value": 690,
    "label": "白城市",
  },
  {
    "value": 1144,
    "label": "蚌埠市",
  },
  {
    "value": 1239,
    "label": "亳州市",
  },
  {
    "value": 1642,
    "label": "滨州市",
  },
  {
    "value": 2354,
    "label": "北海市",
  },
  {
    "value": 2387,
    "label": "百色市",
  },
  {
    "value": 2666,
    "label": "巴中市",
  },
  {
    "value": 2771,
    "label": "毕节市",
  },
  {
    "value": 2868,
    "label": "保山市",
  },
  {
    "value": 3087,
    "label": "宝鸡市",
  },
  {
    "value": 3210,
    "label": "白银市",
  },
  {
    "value": 3425,
    "label": "博尔塔拉蒙古自治州",
  },
  {
    "value": 3429,
    "label": "巴音郭楞蒙古自治州",
  }],
}, {
  value: 'C',
  label: 'C',
  children: [{
    "value": 178,
    "label": "承德市",
  },
  {
    "value": 191,
    "label": "沧州市",
  },
  {
    "value": 404,
    "label": "赤峰市",
  },
  {
    "value": 611,
    "label": "朝阳市",
  },
  {
    "value": 918,
    "label": "常州市",
  },
  {
    "value": 1203,
    "label": "滁州市",
  },
  {
    "value": 1245,
    "label": "池州市",
  },
  {
    "value": 2056,
    "label": "常德市",
  },
  {
    "value": 2081,
    "label": "郴州市",
  },
  {
    "value": 2280,
    "label": "潮州市",
  },
  {
    "value": 2428,
    "label": "崇左市",
  },
  {
    "value": 2509,
    "label": "成都市",
  },
  {
    "value": 2917,
    "label": "楚雄彝族自治州",
  },
  {
    "value": 2994,
    "label": "昌都地区",
  },
  {
    "value": 3417,
    "label": "昌吉回族自治州",
  }],
}, {
  value: 'D',
  label: 'D',
  children: [{
    "value": 247,
    "label": "大同市",
  },
  {
    "value": 515,
    "label": "大连市",
  },
  {
    "value": 553,
    "label": "丹东市",
  },
  {
    "value": 776,
    "label": "大庆市",
  },
  {
    "value": 856,
    "label": "大兴安岭地区",
  },
  {
    "value": 1532,
    "label": "东营市",
  },
  {
    "value": 1619,
    "label": "德州市",
  },
  {
    "value": 2278,
    "label": "东莞市",
  },
  {
    "value": 2554,
    "label": "德阳市",
  },
  {
    "value": 2647,
    "label": "达州市",
  },
  {
    "value": 2955,
    "label": "大理白族自治州",
  },
  {
    "value": 2968,
    "label": "德宏傣族景颇族自治州",
  },
  {
    "value": 2979,
    "label": "迪庆藏族自治州",
  },
  {
    "value": 3268,
    "label": "定西市",
  }],
}
  , {
  value: 'E',
  label: 'E',
  children: [
    {
      "value": 428,
      "label": "鄂尔多斯市",
    },
    {
      "value": 1917,
      "label": "鄂州市",
    },
    {
      "value": 1973,
      "label": "恩施土家族苗族自治州",
    }
  ],
}
  , {
  value: 'F',
  label: 'F',
  children: [
    {
      "value": 536,
      "label": "抚顺市",
    },
    {
      "value": 578,
      "label": "阜新市",
    },
    {
      "value": 1213,
      "label": "阜阳市",
    },
    {
      "value": 1261,
      "label": "福州市",
    },
    {
      "value": 1460,
      "label": "抚州市",
    },
    {
      "value": 2186,
      "label": "佛山市",
    },
    {
      "value": 2360,
      "label": "防城港市",
    },
    {
      "value": 3661,
      "label": "费城",
    }
  ],
}
  , {
  value: 'G',
  label: 'G',
  children: [
    {
      "value": 1413,
      "label": "赣州市",
    },
    {
      "value": 2138,
      "label": "广州市",
    },
    {
      "value": 2326,
      "label": "桂林市",
    },
    {
      "value": 2372,
      "label": "贵港市",
    },
    {
      "value": 2573,
      "label": "广元市",
    },
    {
      "value": 2640,
      "label": "广安市",
    },
    {
      "value": 2692,
      "label": "甘孜藏族自治州",
    },
    {
      "value": 2730,
      "label": "贵阳市",
    },
    {
      "value": 3297,
      "label": "甘南藏族自治州",
    },
    {
      "value": 3339,
      "label": "果洛藏族自治州",
    },
    {
      "value": 3380,
      "label": "固原市",
    }
  ],
}
  , {
  value: 'H',
  label: 'H',
  children: [
    {
      "value": 90,
      "label": "邯郸市",
    },
    {
      "value": 221,
      "label": "衡水市",
    },
    {
      "value": 377,
      "label": "呼和浩特市",
    },
    {
      "value": 438,
      "label": "呼伦贝尔市",
    },
    {
      "value": 620,
      "label": "葫芦岛市",
    },
    {
      "value": 707,
      "label": "哈尔滨市",
    },
    {
      "value": 756,
      "label": "鹤岗市",
    },
    {
      "value": 836,
      "label": "黑河市",
    },
    {
      "value": 957,
      "label": "淮安市",
    },
    {
      "value": 1010,
      "label": "杭州市",
    },
    {
      "value": 1060,
      "label": "湖州市",
    },
    {
      "value": 1123,
      "label": "合肥市",
    },
    {
      "value": 1153,
      "label": "淮南市",
    },
    {
      "value": 1169,
      "label": "淮北市",
    },
    {
      "value": 1194,
      "label": "黄山市",
    },
    {
      "value": 1651,
      "label": "菏泽市",
    },
    {
      "value": 1729,
      "label": "鹤壁市",
    },
    {
      "value": 1855,
      "label": "河南省直辖行政区",
    },
    {
      "value": 1873,
      "label": "黄石市",
    },
    {
      "value": 1948,
      "label": "黄冈市",
    },
    {
      "value": 1982,
      "label": "湖北省直辖行政区",
    },
    {
      "value": 2017,
      "label": "衡阳市",
    },
    {
      "value": 2107,
      "label": "怀化市",
    },
    {
      "value": 2231,
      "label": "惠州市",
    },
    {
      "value": 2254,
      "label": "河源市",
    },
    {
      "value": 2401,
      "label": "贺州市",
    },
    {
      "value": 2407,
      "label": "河池市",
    },
    {
      "value": 2438,
      "label": "海口市",
    },
    {
      "value": 2450,
      "label": "海南省直辖行政区",
    },
    {
      "value": 2928,
      "label": "红河哈尼族彝族自治州",
    },
    {
      "value": 3145,
      "label": "汉中市",
    },
    {
      "value": 3316,
      "label": "海东地区",
    },
    {
      "value": 3323,
      "label": "海北藏族自治州",
    },
    {
      "value": 3328,
      "label": "黄南藏族自治州",
    },
    {
      "value": 3333,
      "label": "海南藏族自治州",
    },
    {
      "value": 3353,
      "label": "海西蒙古族藏族自治州",
    },
    {
      "value": 3413,
      "label": "哈密地区",
    },
    {
      "value": 3467,
      "label": "和田地区",
    }
  ],
}
  , {
  value: 'J',
  label: 'J',
  children: [
    {
      "value": 282,
      "label": "晋城市",
    },
    {
      "value": 298,
      "label": "晋中市",
    },
    {
      "value": 561,
      "label": "锦州市",
    },
    {
      "value": 641,
      "label": "吉林市",
    },
    {
      "value": 745,
      "label": "鸡西市",
    },
    {
      "value": 806,
      "label": "佳木斯市",
    },
    {
      "value": 1051,
      "label": "嘉兴市",
    },
    {
      "value": 1075,
      "label": "金华市",
    },
    {
      "value": 1376,
      "label": "景德镇市",
    },
    {
      "value": 1389,
      "label": "九江市",
    },
    {
      "value": 1433,
      "label": "吉安市",
    },
    {
      "value": 1488,
      "label": "济南市",
    },
    {
      "value": 1567,
      "label": "济宁市",
    },
    {
      "value": 1750,
      "label": "焦作市",
    },
    {
      "value": 1922,
      "label": "荆门市",
    },
    {
      "value": 1938,
      "label": "荆州市",
    },
    {
      "value": 2193,
      "label": "江门市",
    },
    {
      "value": 2285,
      "label": "揭阳市",
    },
    {
      "value": 3204,
      "label": "嘉峪关市",
    },
    {
      "value": 3206,
      "label": "金昌市",
    },
    {
      "value": 3249,
      "label": "酒泉市",
    }
  ],
}
  , {
  value: 'K',
  label: 'K',
  children: [
    {
      "value": 1677,
      "label": "开封市",
    },
    {
      "value": 2831,
      "label": "昆明市",
    },
    {
      "value": 3403,
      "label": "克拉玛依市",
    },
    {
      "value": 3449,
      "label": "克孜勒苏柯尔克孜自治州",
    },
    {
      "value": 3454,
      "label": "喀什地区",
    }
  ],
}
  , {
  value: 'L',
  label: 'L',
  children: [
    {
      "value": 209,
      "label": "廊坊市",
    },
    {
      "value": 342,
      "label": "临汾市",
    },
    {
      "value": 361,
      "label": "吕梁市",
    },
    {
      "value": 587,
      "label": "辽阳市",
    },
    {
      "value": 660,
      "label": "辽源市",
    },
    {
      "value": 948,
      "label": "连云港市",
    },
    {
      "value": 1111,
      "label": "丽水市",
    },
    {
      "value": 1230,
      "label": "六安市",
    },
    {
      "value": 1344,
      "label": "龙岩市",
    },
    {
      "value": 1601,
      "label": "莱芜市",
    },
    {
      "value": 1605,
      "label": "临沂市",
    },
    {
      "value": 1632,
      "label": "聊城市",
    },
    {
      "value": 1689,
      "label": "洛阳市",
    },
    {
      "value": 1778,
      "label": "漯河市",
    },
    {
      "value": 2121,
      "label": "娄底市",
    },
    {
      "value": 2314,
      "label": "柳州市",
    },
    {
      "value": 2420,
      "label": "来宾市",
    },
    {
      "value": 2545,
      "label": "泸州市",
    },
    {
      "value": 2596,
      "label": "乐山市",
    },
    {
      "value": 2711,
      "label": "凉山彝族自治州",
    },
    {
      "value": 2742,
      "label": "六盘水市",
    },
    {
      "value": 2888,
      "label": "丽江市",
    },
    {
      "value": 2907,
      "label": "临沧市",
    },
    {
      "value": 2984,
      "label": "拉萨市",
    },
    {
      "value": 3057,
      "label": "林芝地区",
    },
    {
      "value": 3194,
      "label": "兰州市",
    },
    {
      "value": 3277,
      "label": "陇南市",
    },
    {
      "value": 3288,
      "label": "临夏回族自治州",
    },
    {
      "value": 3657,
      "label": "洛杉矶",
    }
  ],
}
  , {
  value: 'M',
  label: 'M',
  children: [
    {
      "value": 824,
      "label": "牡丹江市",
    },
    {
      "value": 1161,
      "label": "马鞍山市",
    },
    {
      "value": 2213,
      "label": "茂名市",
    },
    {
      "value": 2238,
      "label": "梅州市",
    },
    {
      "value": 2562,
      "label": "绵阳市",
    },
    {
      "value": 2620,
      "label": "眉山市",
    }
  ],
}
  , {
  value: 'N',
  label: 'N',
  children: [
    {
      "value": 881,
      "label": "南京市",
    },
    {
      "value": 938,
      "label": "南通市",
    },
    {
      "value": 1025,
      "label": "宁波市",
    },
    {
      "value": 1332,
      "label": "南平市",
    },
    {
      "value": 1353,
      "label": "宁德市",
    },
    {
      "value": 1365,
      "label": "南昌市",
    },
    {
      "value": 1793,
      "label": "南阳市",
    },
    {
      "value": 2300,
      "label": "南宁市",
    },
    {
      "value": 2589,
      "label": "内江市",
    },
    {
      "value": 2609,
      "label": "南充市",
    },
    {
      "value": 2974,
      "label": "怒江傈僳族自治州",
    },
    {
      "value": 3038,
      "label": "那曲地区",
    },
    {
      "value": 3658,
      "label": "纽约",
    }
  ],
}
  , {
  value: 'P',
  label: 'P',
  children: [
    {
      "value": 596,
      "label": "盘锦市",
    },
    {
      "value": 1284,
      "label": "莆田市",
    },
    {
      "value": 1382,
      "label": "萍乡市",
    },
    {
      "value": 1706,
      "label": "平顶山市",
    },
    {
      "value": 1762,
      "label": "濮阳市",
    },
    {
      "value": 2538,
      "label": "攀枝花市",
    },
    {
      "value": 2895,
      "label": "普洱市",
    },
    {
      "value": 3240,
      "label": "平凉市",
    }
  ],
}
  , {
  value: 'Q',
  label: 'Q',
  children: [
    {
      "value": 81,
      "label": "秦皇岛市",
    },
    {
      "value": 727,
      "label": "齐齐哈尔市",
    },
    {
      "value": 818,
      "label": "七台河市",
    },
    {
      "value": 1086,
      "label": "衢州市",
    },
    {
      "value": 1305,
      "label": "泉州市",
    },
    {
      "value": 1500,
      "label": "青岛市",
    },
    {
      "value": 1984,
      "label": "潜江市",
    },
    {
      "value": 2268,
      "label": "清远市",
    },
    {
      "value": 2366,
      "label": "钦州市",
    },
    {
      "value": 2791,
      "label": "黔西南布依族苗族自治州",
    },
    {
      "value": 2800,
      "label": "黔东南苗族侗族自治州",
    },
    {
      "value": 2817,
      "label": "黔南布依族苗族自治州",
    },
    {
      "value": 2847,
      "label": "曲靖市",
    },
    {
      "value": 3258,
      "label": "庆阳市",
    }
  ],
}
  , {
  value: 'R',
  label: 'R',
  children: [
    {
      "value": 1595,
      "label": "日照市",
    },
    {
      "value": 3019,
      "label": "日喀则地区",
    }
  ],
}
  , {
  value: 'S',
  label: 'S',
  children: [
    {
      "value": 40,
      "label": "石家庄市",
    },
    {
      "value": 290,
      "label": "朔州市",
    },
    {
      "value": 500,
      "label": "沈阳市",
    },
    {
      "value": 652,
      "label": "四平市",
    },
    {
      "value": 683,
      "label": "松原市",
    },
    {
      "value": 766,
      "label": "双鸭山市",
    },
    {
      "value": 844,
      "label": "绥化市",
    },
    {
      "value": 861,
      "label": "上海市",
    },
    {
      "value": 927,
      "label": "苏州市",
    },
    {
      "value": 1002,
      "label": "宿迁市",
    },
    {
      "value": 1067,
      "label": "绍兴市",
    },
    {
      "value": 1223,
      "label": "宿州市",
    },
    {
      "value": 1276,
      "label": "厦门市",
    },
    {
      "value": 1291,
      "label": "三明市",
    },
    {
      "value": 1473,
      "label": "上饶市",
    },
    {
      "value": 1785,
      "label": "三门峡市",
    },
    {
      "value": 1808,
      "label": "商丘市",
    },
    {
      "value": 1881,
      "label": "十堰市",
    },
    {
      "value": 1968,
      "label": "随州市",
    },
    {
      "value": 1986,
      "label": "神农架林区",
    },
    {
      "value": 2031,
      "label": "邵阳市",
    },
    {
      "value": 2152,
      "label": "韶关市",
    },
    {
      "value": 2164,
      "label": "深圳市",
    },
    {
      "value": 2177,
      "label": "汕头市",
    },
    {
      "value": 2248,
      "label": "汕尾市",
    },
    {
      "value": 2444,
      "label": "三亚市",
    },
    {
      "value": 2446,
      "label": "三沙市",
    },
    {
      "value": 2582,
      "label": "遂宁市",
    },
    {
      "value": 3006,
      "label": "山南地区",
    },
    {
      "value": 3184,
      "label": "商洛市",
    },
    {
      "value": 3368,
      "label": "石嘴山市",
    },
    {
      "value": 3504,
      "label": "石河子市",
    }
  ],
}
  , {
  value: 'T',
  label: 'T',
  children: [
    {
      "value": 21,
      "label": "天津市",
    },
    {
      "value": 65,
      "label": "唐山市",
    },
    {
      "value": 235,
      "label": "太原市",
    },
    {
      "value": 418,
      "label": "通辽市",
    },
    {
      "value": 602,
      "label": "铁岭市",
    },
    {
      "value": 666,
      "label": "通化市",
    },
    {
      "value": 994,
      "label": "泰州市",
    },
    {
      "value": 1100,
      "label": "台州市",
    },
    {
      "value": 1175,
      "label": "铜陵市",
    },
    {
      "value": 1581,
      "label": "泰安市",
    },
    {
      "value": 1985,
      "label": "天门市",
    },
    {
      "value": 2780,
      "label": "铜仁市",
    },
    {
      "value": 3081,
      "label": "铜川市",
    },
    {
      "value": 3217,
      "label": "天水市",
    },
    {
      "value": 3409,
      "label": "吐鲁番地区",
    },
    {
      "value": 3487,
      "label": "塔城地区",
    },
    {
      "value": 3515,
      "label": "台湾市",
    }
  ],
}
  , {
  value: 'W',
  label: 'W',
  children: [
    {
      "value": 399,
      "label": "乌海市",
    },
    {
      "value": 462,
      "label": "乌兰察布市",
    },
    {
      "value": 896,
      "label": "无锡市",
    },
    {
      "value": 1038,
      "label": "温州市",
    },
    {
      "value": 1134,
      "label": "芜湖市",
    },
    {
      "value": 1553,
      "label": "潍坊市",
    },
    {
      "value": 1589,
      "label": "威海市",
    },
    {
      "value": 1858,
      "label": "武汉市",
    },
    {
      "value": 2345,
      "label": "梧州市",
    },
    {
      "value": 2942,
      "label": "文山壮族苗族自治州",
    },
    {
      "value": 3117,
      "label": "渭南市",
    },
    {
      "value": 3226,
      "label": "武威市",
    },
    {
      "value": 3373,
      "label": "吴忠市",
    },
    {
      "value": 3393,
      "label": "乌鲁木齐市",
    }
  ],
}
  , {
  value: 'X',
  label: 'X',
  children: [
    {
      "value": 111,
      "label": "邢台市",
    },
    {
      "value": 326,
      "label": "忻州市",
    },
    {
      "value": 475,
      "label": "兴安盟",
    },
    {
      "value": 482,
      "label": "锡林郭勒盟",
    },
    {
      "value": 906,
      "label": "徐州市",
    },
    {
      "value": 1251,
      "label": "宣城市",
    },
    {
      "value": 1404,
      "label": "新余市",
    },
    {
      "value": 1736,
      "label": "新乡市",
    },
    {
      "value": 1770,
      "label": "许昌市",
    },
    {
      "value": 1819,
      "label": "信阳市",
    },
    {
      "value": 1906,
      "label": "襄阳市",
    },
    {
      "value": 1929,
      "label": "孝感市",
    },
    {
      "value": 1960,
      "label": "咸宁市",
    },
    {
      "value": 1983,
      "label": "仙桃市",
    },
    {
      "value": 2010,
      "label": "湘潭市",
    },
    {
      "value": 2128,
      "label": "湘西土家族苗族自治州",
    },
    {
      "value": 2951,
      "label": "西双版纳傣族自治州",
    },
    {
      "value": 3066,
      "label": "西安市",
    },
    {
      "value": 3101,
      "label": "咸阳市",
    },
    {
      "value": 3307,
      "label": "西宁市",
    },
    {
      "value": 3516,
      "label": "香港市",
    },
    {
      "value": 3660,
      "label": "休仕敦",
    }
  ],
}
  , {
  value: 'Y',
  label: 'Y',
  children: [
    {
      "value": 260,
      "label": "阳泉市",
    },
    {
      "value": 311,
      "label": "运城市",
    },
    {
      "value": 570,
      "label": "营口市",
    },
    {
      "value": 697,
      "label": "延边朝鲜族自治州",
    },
    {
      "value": 787,
      "label": "伊春市",
    },
    {
      "value": 967,
      "label": "盐城市",
    },
    {
      "value": 978,
      "label": "扬州市",
    },
    {
      "value": 1408,
      "label": "鹰潭市",
    },
    {
      "value": 1448,
      "label": "宜春市",
    },
    {
      "value": 1539,
      "label": "烟台市",
    },
    {
      "value": 1891,
      "label": "宜昌市",
    },
    {
      "value": 2045,
      "label": "岳阳市",
    },
    {
      "value": 2073,
      "label": "益阳市",
    },
    {
      "value": 2094,
      "label": "永州市",
    },
    {
      "value": 2262,
      "label": "阳江市",
    },
    {
      "value": 2292,
      "label": "云浮市",
    },
    {
      "value": 2379,
      "label": "玉林市",
    },
    {
      "value": 2628,
      "label": "宜宾市",
    },
    {
      "value": 2656,
      "label": "雅安市",
    },
    {
      "value": 2858,
      "label": "玉溪市",
    },
    {
      "value": 3130,
      "label": "延安市",
    },
    {
      "value": 3158,
      "label": "榆林市",
    },
    {
      "value": 3346,
      "label": "玉树藏族自治州",
    },
    {
      "value": 3360,
      "label": "银川市",
    },
    {
      "value": 3476,
      "label": "伊犁哈萨克自治州",
    }
  ],
}
  , {
  value: 'Z',
  label: 'Z',
  children: [
    {
      "value": 159,
      "label": "张家口市",
    },
    {
      "value": 267,
      "label": "长治市",
    },
    {
      "value": 629,
      "label": "长春市",
    },
    {
      "value": 986,
      "label": "镇江市",
    },
    {
      "value": 1094,
      "label": "舟山市",
    },
    {
      "value": 1319,
      "label": "漳州市",
    },
    {
      "value": 1514,
      "label": "淄博市",
    },
    {
      "value": 1524,
      "label": "枣庄市",
    },
    {
      "value": 1663,
      "label": "郑州市",
    },
    {
      "value": 1831,
      "label": "周口市",
    },
    {
      "value": 1843,
      "label": "驻马店市",
    },
    {
      "value": 1988,
      "label": "长沙市",
    },
    {
      "value": 1999,
      "label": "株洲市",
    },
    {
      "value": 2067,
      "label": "张家界市",
    },
    {
      "value": 2172,
      "label": "珠海市",
    },
    {
      "value": 2202,
      "label": "湛江市",
    },
    {
      "value": 2221,
      "label": "肇庆市",
    },
    {
      "value": 2279,
      "label": "中山市",
    },
    {
      "value": 2468,
      "label": "重庆市",
    },
    {
      "value": 2530,
      "label": "自贡市",
    },
    {
      "value": 2672,
      "label": "资阳市",
    },
    {
      "value": 2747,
      "label": "遵义市",
    },
    {
      "value": 2875,
      "label": "昭通市",
    },
    {
      "value": 3232,
      "label": "张掖市",
    },
    {
      "value": 3387,
      "label": "中卫市",
    },
    {
      "value": 3503,
      "label": "自治区直辖县级行政区划",
    },
    {
      "value": 3659,
      "label": "芝加哥",
    }
  ],
}
];

export default class CitySwitcher extends React.Component {
    static defaultProps = {
      onChange: () => {},
      changeCityName: () => {}
    }
  displayRender = (label) => {
    return label[label.length - 1];
  }
  onChange = (value, label) => {
    /*console.log(label[1].value);//城市ID
    console.log(label[1].label);//城市名称*/

    this.props.changeCityName(label[1].label, label[1].value);
    this.props.onChange(label[1].value, label[1].label)
  }


  render() {
    return (
      <span className="CascaderCity">
        <Cascader options={options} size="small" displayRender={this.displayRender} onChange={this.onChange} placeholder={this.props.destination} />
      </span>

    )
  }
}








