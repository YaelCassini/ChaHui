/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/title/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/container/index?hash=0d7632df0f27097a47744e0a9dbf35728c63f710');
require('../../node_modules/mini-ali-ui/es/steps/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/card/index?hash=8c77e86e89c40c5b2ab9f0f22cf86a6245babc59');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Title/Title?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Search/Search?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/category-nav/category-nav?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/input-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/multi-liner/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/auto-size-img/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/list-item/index?hash=a5465b8c889360e3f854461d3ac41cf414aec633');
require('../../node_modules/mini-ali-ui/es/filter/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/filter/filter-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/my-ticket/components/tab/tab?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/my-ticket/components/ticket/ticket?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/tabs/index?hash=4a98b35daa3eee1b62960d4d5bbcbf254cbf11e3');
require('../../node_modules/mini-ali-ui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/home/components/location/location?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/home/components/Masonry/Masonry?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Drawer/Drawer?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/select-button/select-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/purchase-number/purchase-number?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/home/components/commodity-drawer/commodity-drawer?hash=8478053939abd129e3d278635f27a90d080c5fd1');
require('../../components/Empty/Empty?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/Tab/Tab?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/tag/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/am-switch/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/my-comment/components/Comment/Comment?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/list-secondary/index?hash=f75be69226a587e5ccc990c4b63309fd714f1354');
require('../../node_modules/mini-ali-ui/es/button/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/am-radio/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/picker-item/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../pages/my-follow/components/User/User?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/community/community?hash=fadb02f92b9940602f0b2594946e244094bb7d90');
require('../../pages/shopping-cart/shopping-cart?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/category/category?hash=132dec136945b3b0a66fc76febf44a6e21f01fee');
require('../../pages/search/search?hash=ef4fb84887010afe7b7bb71b7080a3b22dd7a410');
require('../../pages/order/order?hash=a2528adc7fb10265c840f8e051b5adb5432bd218');
require('../../pages/my-ticket/my-ticket?hash=d6b8fa15a17672571e95a1bb0f53f7d98c60308b');
require('../../pages/home/home?hash=7ce3d2799c65128e52db7a63e9cccc4c7c4b031a');
require('../../pages/card/card?hash=76c95e9e29395b1937f5377f76b95e79a913815d');
require('../../pages/my-setting/my-setting?hash=e8d9165148084b5197ce4ba4fb3222f7e3756919');
require('../../pages/my-comment/my-comment?hash=2d07ca871cd851f39d56985d64b7fe24a682606a');
require('../../pages/my-collection/my-collection?hash=2d07ca871cd851f39d56985d64b7fe24a682606a');
require('../../pages/my-follow/my-follow?hash=fc7fa7c57352ef3ff627e27882f3efcc5405582f');
require('../../pages/my-fans/my-fans?hash=fc7fa7c57352ef3ff627e27882f3efcc5405582f');
require('../../pages/my-achievement/my-achievement?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/business/business?hash=b4727e429e9c4489167e4c5ce8cfe12142d0e05b');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}