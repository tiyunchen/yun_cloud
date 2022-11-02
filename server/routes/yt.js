const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const ytRouter = express.Router();
const Mock = require('mockjs');
const fs = require("fs");

const { Random } = Mock;

/* GET users listing. */
ytRouter.post('/hos_list', upload.single('file_name'), (req, res, next) => {
  // hosName, logo, nature, isSupportMedIns, addr, distanceLabel
  console.log('req1111111111111', req.file)
  const reader = fs.createReadStream(req.file.path);
  const writer = fs.createWriteStream(`./temp/${req.file.originalname}`);
  reader.pipe(writer)
  reader.on('end', (res) => {
    console.log(222222, res)
  });

  reader.on('error', err => {
    console.log(3333, err)
  })
  writer.on('close', ()=>{
    console.log('读入通道关闭')
  })
  writer.on('error', (err)=>{
    console.log('读入通道错误', err)

  })
  const mockData = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      hosName: Random.cname(),
      logo: Random.url('http'),
      nature: Random.cparagraph(),
    }],
  });
  const resData = {
    result: true,
    data: mockData,
  };
  res.send(resData);
});

ytRouter.post('/hos_list2', upload.single('file_name2'),(req, res, next) => {
  // hosName, logo, nature, isSupportMedIns, addr, distanceLabel
  console.log('req1111111111111', req.file)
  const reader = fs.createReadStream(req.file.path);
  const writer = fs.createWriteStream(`./temp/${req.file.originalname}`);
  reader.pipe(writer)

  reader.on('end', (res) => {
    console.log(222222, res)
  });

  reader.on('error', err => {
    console.log(3333, err)
  })
  writer.on('close', ()=>{
    console.log('读入通道关闭')
  })
  writer.on('error', (err)=>{
    console.log('读入通道错误', err)

  })

  const mockData = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      hosName: Random.cname(),
      logo: Random.url('http'),
      nature: Random.cparagraph(),
    }],
  });
  const resData = {
    result: true,
    data: mockData,
  };
  res.send(resData);
});


ytRouter.get('/hos_list', (req, res)=>{
  // hosName, logo, nature, isSupportMedIns, addr, distanceLabel
  const mockData = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      hosName: Random.cname(),
      logo: Random.url('http'),
      nature: Random.cparagraph(),
    }],
  });
  const resData = {
    result: true,
    data: mockData,
  };
  res.send(resData);
})

module.exports = ytRouter;
