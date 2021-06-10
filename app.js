// 1. 引入必要的 sdk
import MPServerless from '@alicloud/mpserverless-sdk';

// 2. 在 app.js 中对 sdk 进行初始化
// 2.1 初始化 MPServerless
my.serverless = my.serverless || new MPServerless({
  uploadFile: my.uploadFile,
  request: my.request,
  getAuthCode: my.getAuthCode,
}, {
  // 2.2 参数能在小程序云服务空间详情中获取
  appId: '2021002147634708',
  spaceId: '114b0586-8bd9-4a01-ab8f-0e13434c521a',
  clientSecret: '8nuYISXxwtvrK23M/V2qlg==',
  endpoint: 'https://api.bspapp.com'
})

App({
  async onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');

    // 授权登录方法
    await my.serverless.user.authorize({
      authProvider: 'alipay_openapi',
    });
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});