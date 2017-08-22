//logs.js
const MPage = require('../../page.js');
const util = require('../../utils/util.js');

new MPage({
    data: {
        logs: []
    },
    onLoad: function() {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function(log) {
                return util.formatTime(new Date(log))
            })
        })
    }
},"我是log")
