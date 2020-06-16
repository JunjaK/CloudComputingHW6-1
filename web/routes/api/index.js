var express = require('express');
var router = express.Router();
const moment = require('moment')
const fs = require('fs')
const request = require('request')

const download = (data, path, callback) => {
  const beforeDownload = moment()
  let takeTime = 0
  request.head(data.url, (err, res, body) => {
    request(data.url)
      .pipe(fs.createWriteStream(path+data.name))
      .on('close', callback)
    const afterDownload = moment()
    takeTime = moment.duration(afterDownload.diff(beforeDownload)).asMilliseconds()
    console.log(`${data.region} : ${takeTime}ms`)
  })
  return takeTime
}

function getfileSize(data) {
  const s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
  const e = Math.floor(Math.log(data) / Math.log(1024));
  return `${(data / 1024 ** e).toFixed(2)}${s[e]}`;
}

const california = require('./upload/cccaliforniabucket')
const canada = require('./upload/cccanadabucekt')
const german = require('./upload/ccgermanbucket')
const mumbai = require('./upload/ccmumbaibucket')
const ohaio = require('./upload/ccohaiobucket')
const oregon = require('./upload/ccoregonbucekt')
const paris = require('./upload/ccparisbucket')
const sangpaulu = require('./upload/ccsangpaulubucekt')
const sidney = require('./upload/ccsidneybucket')
const singapore = require('./upload/ccsingaporebucekt')
const stockholm = require('./upload/ccstockholmbucket')
const tokyo = require('./upload/cctokyobucket')
const virginia = require('./upload/ccverginiabucket')
const london = require('./upload/londonbucket222')
const seoul = require('./upload/seoulbucket')

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
router.post('/upload/sidney', sidney.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'sidney', location: req.file.location })
});
router.post('/upload/sangpaulu', sangpaulu.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'sangpaulu', location: req.file.location })
});
router.post('/upload/paris', paris.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'paris', location: req.file.location })
});
router.post('/upload/oregon', oregon.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'oregon', location: req.file.location })
});
router.post('/upload/ohaio', ohaio.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'ohaio', location: req.file.location })
});
router.post('/upload/mumbai', mumbai.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'mumbai', location: req.file.location })
});
router.post('/upload/german', german.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'german', location: req.file.location })
});
router.post('/upload/canada', canada.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'canada', location: req.file.location })
});
router.post('/upload/california', california.single('bin'), function(req, res, next) {
  res.status(200).send({success: true, region: 'california', location: req.file.location })
});

router.post('/donwload/test', async (req,res) => {
  const urls = req.body
  let takeTime = 0
  console.log(`파일 다운로드 시간 체크. 파일 사이즈 : ${getfileSize(urls[0].size)}`)
  await urls.forEach((element,index)=>{
    download(element, `/home/jun/documents/univ/CloudComputingHW6-1/web/routes/api/download/${index}`, (r) => {
      takeTime += r
    })
  })
  res.send({success: true, time: takeTime})
})

module.exports = router;
