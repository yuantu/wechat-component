//index.js
//获取应用实例
const MPage = require('../../page.js');

// const UserInfo = require('../components/userinfo/index.js');

new MPage({
    // components: {
    //     userInfo: UserInfo,
    // },
    data: {
        motto: 'Hello World',
    },

    onLoad(){
        console.log("我是页面  ");
    }
},"我是index")

