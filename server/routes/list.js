var express = require('express');
var router = express.Router();

const getTotalList = require('../models/totalList')

// 获取所有列表数据
router.get('/', function(req, res, next) {
    getTotalList(req.query.page, req.query.pageSize).then(data => {
        res.json(data)
    })
});

module.exports = router;
