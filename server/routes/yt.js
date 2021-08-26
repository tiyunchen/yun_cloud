const express = require('express');
const ytRouter = express.Router();
const Mock = require('mockjs')
const Random = Mock.Random

/* GET users listing. */
ytRouter.post('/hos_list', function(req, res, next) {
    // hosName, logo, nature, isSupportMedIns, addr, distanceLabel
    let mockData = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'hosName': Random.cname(),
            'logo': Random.url('http'),
            'nature': Random.cparagraph()
        }]
    })
    let resData = {
        result: true,
        data: mockData
    }
    res.send(resData);
});

module.exports = ytRouter;
