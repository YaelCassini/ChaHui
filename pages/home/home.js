import { getCommodity } from '../../services/commodity';
import * as log from '../../utils/log';
import { ALL, TREND, NEW, PRICE } from '../../asserts/CommodityType';

Page({
  data: {
    ALL,
    TREND,
    NEW,
    PRICE,
    searchValue: '',
    // SellerInfo:[],
    tabs: [
      {
        id: NEW,
        title: '附近的店',
      },
      {
        id: TREND,
        title: '人气店家',
      },
      {
        id: ALL,
        title: '猜你喜欢',
      },

    ],
    activeTabId: NEW,
    currentCommodities: [],
    selectedCommodityId: '',
    showCommodityDrawer: false,
  },
  onLoad(){
    // this.fetchCurrentCommodities();
    // seller info
    var temp=[];
    my.serverless.db.collection('seller').find()
      .then(res => {
        // console.log(res.result);
        
        // console.log(res.result);
        temp=res.result;
        console.log("temp",temp)
        for(var i=0;i<6;i++){
          
          my.serverless.db.collection('commodity').find({
            seller_id: { $eq: i }
          })
          .then(res => {
            var goods_pic=[];
            goods_pic.push(res.result[0])
            goods_pic.push(res.result[1])
            goods_pic.push(res.result[2])
            
            // this.setData({["commodities"]:res.result})
            // this.setData({["currentCommodities[i].test"]:goods_pic})
            temp[i-1].test=goods_pic
            console.log(temp)
          })
          .catch(console.error);
        }
        this.setData({["currentCommodities"]:temp})
      })
      .catch(console.error);  
    // console.log(temp)
    
    // commodity info
    // console.log(this.data.SellerInfo);
    
    // this.onAddSellerInfo()
  },
  onShow() {
    // const { searchValue = '' } = getApp();
    // this.setData({ searchValue });
    // this.fetchCurrentCommodities(this.data.activeTabId);
    //  console.log("test1",this.data.SellerInfo);
    // console.log("test",this.data.currentCommodities)
  },
  onActiveTabChange(id) {
    this.setData({ activeTabId: id });
    // this.fetchCurrentCommodities(id);
  },
  onTapCommodity(id) {
    const seller_id = this.data.currentCommodities[id].id
    console.log(seller_id)
    // this.setData({ selectedCommodityId: id, showCommodityDrawer: true });
    my.navigateTo({url:'../business/business?id='+seller_id});
    console.log("test2",this.data.currentCommodities)
  },
  onTapjumpGoods(m_id,s_id){
    my.navigateTo({url:'../card/card?id='+m_id+'&seller_id='+s_id});
  },
  onCloseCommodityDrawer() {
    this.setData({ showCommodityDrawer: false });
  },
  getCommodityDetailPagePath(id) {
    return `/pages/commodity/commodity?id=${id}`;
  },
  mapCommodityItemToViewList(commodities = []) {
    return commodities.map(item => ({
      ...item,
      url: this.getCommodityDetailPagePath(item.id),
    }));
  },
  fetchCurrentCommodities(commodityType) {
    this.setData({ currentCommodities: [] });
    getCommodity({ type: commodityType })
      .then(({ data = [] }) =>
        this.setData({
          currentCommodities: this.mapCommodityItemToViewList(data),
          
        })
        
      )
      .catch(err =>
        log.error('handbag.fetchCurrentCommodities.getAllCommodity', err)
      );
  },
  onConfirm() {
    this.onCloseCommodityDrawer();
    my.showToast({
      type: 'success',
      content: '添加成功，在购物车等亲',
      duration: 3000,
    });
  },

  
});
