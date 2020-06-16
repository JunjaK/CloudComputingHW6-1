var express = require('express');
var router = express.Router();
const moment = require('moment')
const fs = require('fs')
const request = require('request')

// 파일 다운로드 http 요청
const download = (data, path) => {
  const beforeDownload = moment()
  let takeTime = 0
  return new Promise(resolve => {
    request.head(data.url, (err, res, body) => {
      request(data.url)
        .pipe(fs.createWriteStream(path+data.name))
        .on('close', ()=>{
          const afterDownload = moment()
          takeTime = moment.duration(afterDownload.diff(beforeDownload)).asMilliseconds()
          console.log(`${data.region}: ${takeTime} ms`)
          resolve()
        })
    })
  })
}

// 파일 사이즈 변환하는 함수
function getfileSize(data) {
  const s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
  const e = Math.floor(Math.log(data) / Math.log(1024));
  return `${(data / 1024 ** e).toFixed(2)}${s[e]}`;
}

// 버킷 multer 함수
const california = require('./upload/cccaliforniabucket')
const canada = require('./upload/cccanadabucekt')
const frankfurt = require('./upload/ccgermanbucket')
const mumbai = require('./upload/ccmumbaibucket')
const ohio = require('./upload/ccohaiobucket')
const oregon = require('./upload/ccoregonbucekt')
const paris = require('./upload/ccparisbucket')
const saopaulo = require('./upload/ccsangpaulubucekt')
const sydney = require('./upload/ccsidneybucket')
const singapore = require('./upload/ccsingaporebucekt')
const stockholm = require('./upload/ccstockholmbucket')
const tokyo = require('./upload/cctokyobucket')
const virginia = require('./upload/ccverginiabucket')
const london = require('./upload/londonbucket222')
const seoul = require('./upload/seoulbucket')

// 각 리전별 업로드 요청
router.post('/upload/seoul', seoul.single('bin'), function(req, res, next) {
  console.log(`파일 업로드 시간 체크. 파일 사이즈 : ${getfileSize(req.file.size)}`)
  res.status(200).send({success: true, region: 'seoul', location: req.file.location })
});
router.post('/upload/london', london.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'london', location: req.file.location })
});
router.post('/upload/virginia', virginia.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'virginia', location: req.file.location })
});
router.post('/upload/tokyo', tokyo.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'tokyo', location: req.file.location })
});
router.post('/upload/stockholm', stockholm.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'stockholm', location: req.file.location })
});
router.post('/upload/singapore', singapore.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'singapore', location: req.file.location })
});
router.post('/upload/sydney', sydney.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'sydney', location: req.file.location })
});
router.post('/upload/saopaulo', saopaulo.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'saopaulo', location: req.file.location })
});
router.post('/upload/paris', paris.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'paris', location: req.file.location })
});
router.post('/upload/oregon', oregon.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'oregon', location: req.file.location })
});
router.post('/upload/ohio', ohio.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'ohio', location: req.file.location })
});
router.post('/upload/mumbai', mumbai.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'mumbai', location: req.file.location })
});
router.post('/upload/frankfurt', frankfurt.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'frankfurt', location: req.file.location })
});
router.post('/upload/canada', canada.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'canada', location: req.file.location })
});
router.post('/upload/california', california.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'california', location: req.file.location })
});

// 각 리전별 파일 다운로드 요청
router.post('/donwload/test', async (req,res) => {
  const urls = req.body
  let takeTime = 0
  console.log(`파일 다운로드 시간 체크. 파일 사이즈 : ${getfileSize(urls[0].size)}`)
  for(const element of urls){
    await download(element, `/home/jun/documents/univ/CloudComputingHW6-1/web/routes/api/download/`)
  }
  res.send({success: true, time: takeTime})
})

module.exports = router;
