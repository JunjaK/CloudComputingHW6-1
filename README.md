# CloudComputingHW6-1 2015104193 컴퓨터공학과 윤준현
#### [Github Link](https://github.com/JunjaK/CloudComputingHW6-1) : https://github.com/JunjaK/CloudComputingHW6-1

## 프로그램 설명 및 결과 분석
- 개발환경 : WSL2
- Node.js와 Vue를 사용하여 구현.
- 아래의 파일 4개에 대하여, S3에 파일 업로드, 다운로드를 완료하는데 걸리는 시간을 측정.
- 파일 업로드는 multer가 s3에 파일을 업로드 한 후 프론트에 post 완료를 보내는 시간을 측정
- 파일 다운로드는 s3에 저장된 file url을 통해 다운로드에 걸리는 시간을 측정
- 백엔드, 프론트엔드 간의 통신시간 등의 Overhead가 다소 있으나, 10ms 내외로 시간 측정에는 지장 없음.
- 다운로드 속도 365Mbps, 업로드 속도 463Mbps 환경의 네트워크에서 측정
- 전반적으로 파일 업로드보다 파일 다운로드하는데 시간이 더 많이 소요
- 국내 Region인 seoul의 경우 모든 파일에 대하여 매우 빠른 속도를 보여줌.
- 비교적 가까운 아시아 국가들의 Region인 Tokyo, Singapore의 경우에도 준수한 속도를 보여줌.
- 거리가 멀어질수록 파일 업-다운로드에 걸리는 시간이 많이 저하되는 것이 보임.
- 또한, 거리가 멀어질수록 업-다운로드에 걸리는 시간의 편차가 큼
- 1mb 이상의 파일의 경우, Seoul Region과 그 이외의 Region의 속도가 심각한 정도로 차이남
- AWS를 사용하여 웹 서비스 등을 할 경우, AWS에서 서비스할 국가의 Region을 잘 설정하는 것이 서비스의 품질을 결정할 것으로 여겨짐.

### 입력 파일
- backlit-dark-dawn-532303.jpg, 990kb
- bicycle-7680x4320-vintage-old-house-8k-18730.jpg, 10,772kb
- underfloor-heating.jpg, 12.2kb
- web_hi_res_512.jpg, 1.46kb

### 1kb 파일에 대한 테스트 - web_hi_res_512.jpg, 1.46kb
#### 파일 업로드 평균 시간.
- seoul: 85.2ms
- london: 1314.6ms
- virginia: 1084.5ms
- tokyo: 225.9ms
- stockholm: 1452ms
- singapore: 492.9ms
- sydney: 624.9ms
- saopaulo: 1402.4ms
- paris: 1306.8ms
- oregon: 700ms
- ohio: 976.1ms
- mumbai: 1124.5ms
- frankfurt: 1309.2ms
- canada: 1030.4ms
- california: 665.4ms

#### 파일 다운로드 평균 시간
- seoul: 81.1ms
- london: 2557.6ms
- virginia: 2098.5ms
- tokyo: 352.7ms
- stockholm: 2739.1ms
- singapore: 986.2ms
- sydney: 1142ms
- saopaulo: 2643.4ms
- paris: 2504.3ms
- oregon: 1289.4ms
- ohio: 1921ms
- mumbai: 2132.4ms
- frankfurt: 2409.8ms
- canada: 1995.6ms
- california: 1220.2ms


### 10kb 파일에 대한 테스트 - underfloor-heating.jpg, 12.2kb
#### 파일 업로드 평균 시간 
- seoul: 99ms
- london: 1335.8ms
- virginia: 1058.3ms
- tokyo: 222.8ms
- stockholm: 1586.1ms
- singapore: 496.8ms
- sydney: 634.6ms
- saopaulo: 1386.6ms
- paris: 1334.5ms
- oregon: 699.4ms
- ohio: 1124.4ms
- mumbai: 1153.6ms
- frankfurt: 1337.3ms
- canada: 1151.4ms
- california: 623.4ms

#### 파일 다운로드 평균 시간
- seoul: 79.4ms
- london: 2593ms
- virginia: 2062.6ms
- tokyo: 350.5ms
- stockholm: 2908ms
- singapore: 878.5ms
- sydney: 1140.6ms
- saopaulo: 2676.8ms
- paris: 2617.5ms
- oregon: 1315.3ms
- ohio: 1893.2ms
- mumbai: 2141ms
- frankfurt: 2557.7ms
- canada: 2024.4ms
- california: 1144.3ms

### 1mb 파일에 대한 테스트 - backlit-dark-dawn-532303.jpg, 990kb
#### 파일 업로드 평균 시간
- seoul: 165.5ms
- london: 4986.4ms
- virginia: 3621.2ms
- tokyo: 517.5ms
- stockholm: 5471.7ms
- singapore: 1160.2ms
- sydney: 1496.3ms
- saopaulo: 3302.1ms
- paris: 4798.8ms
- oregon: 1646.1ms
- ohio: 3580.8ms
- mumbai: 2755.9ms
- frankfurt: 4477.6ms
- canada: 4140.8ms
- california: 1443.3ms

#### 파일 다운로드 평균 시간
- seoul: 124.1ms
- london: 8775.4ms
- virginia: 6008.4ms
- tokyo: 532.3ms
- stockholm: 7913.9ms
- singapore: 1431.3ms
- sydney: 1881.8ms
- saopaulo: 4647.7ms
- paris: 5867.7ms
- oregon: 2117ms
- ohio: 4055.8ms
- mumbai: 3726.5ms
- frankfurt: 4515.6ms
- canada: 5876.2ms
- california: 1785ms

### 10mb 파일에 대한 테스트 - bicycle-7680x4320-vintage-old-house-8k-18730.jpg, 10,772kb
#### 파일 업로드 평균 시간
- seoul: 546.3ms
- london: 13645ms
- virginia: 11775ms
- tokyo: 1428.4ms
- stockholm: 15138.5ms
- singapore: 2859.5ms
- sydney: 3779.8ms
- saopaulo: 8863.5ms
- paris: 13802.8ms
- oregon: 4269.4ms
- ohio: 10765.4ms
- mumbai: 6473.9ms
- frankfurt: 11858.6ms
- canada: 11144.3ms
- california: 5096ms


#### 파일 다운로드 평균 시간
- seoul: 322.9ms
- london: 55158.8ms
- virginia: 52001.7ms
- tokyo: 967.3ms
- stockholm: 50041.3ms
- singapore: 2478.4ms
- sydney: 3296.6ms
- saopaulo: 7944.4ms
- paris: 48918ms
- oregon: 3541.8ms
- ohio: 37335.2ms
- mumbai: 5766.4ms
- frankfurt: 20110.4ms
- canada: 27900.8ms
- california: 3168ms

## 소스코드
- 깃허브에 올려져 있습니다. 
- 백엔드의 주요 코드 및 프론트엔드의 주요 코드만을 서술하겠습니다.
### 백엔드(node.js)
```
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
```

### 프론트엔드(vue)
```
<script>
/* eslint-disable max-len */
import moment from 'moment';

export default {
  name: 'App',
  data: () => ({
    file: null,
    // 다운로드 url 정보를 담은 배열
    downloadUrl: [],
    // 업로드 시간 정보를 담은 배열
    uploadTime: [],
    // 프론트에서 업, 다운로드 시간 측정을 위한 변수
    uploadBefore: null,
    uploadAfter: null,
    downloadBefore: null,
    downloadAfter: null,
  }),
  methods: {
    // api 요청을 통한 파일 업로드 15개 리전에 대하여 진행
    uploadFile() {
      const formData = new FormData();
      console.log(this.file);
      formData.append('bin', this.file);
      this.uploadBefore = moment();
      // axios를 통해 api 요청
      this.$axios.post('/upload/seoul', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ seoul: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push(
            {
              url: r.data.location,
              region: 'seoul',
              name: this.file.name,
              size: this.file.size,
            },
          );
          this.uploadBefore = moment();
          return this.$axios.post('/upload/london', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ london: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'london', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/virginia', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ virginia: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'virginia', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/tokyo', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ tokyo: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'tokyo', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/stockholm', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ stockholm: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'stockholm', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/singapore', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ singapore: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'singapore', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/sydney', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ sydney: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'sydney', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/saopaulo', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ saopaulo: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'saopaulo', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/paris', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ paris: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'paris', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/oregon', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ oregon: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'oregon', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/ohio', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ ohio: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'ohio', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/mumbai', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ mumbai: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'mumbai', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/frankfurt', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ frankfurt: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'frankfurt', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/canada', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ canada: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'canada', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/california', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ california: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'california', name: this.file.name });
          this.uploadBefore = moment();
          console.log(this.uploadTime);
          console.log(this.downloadUrl);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // api 요청을 통한 파일 다운로드 15개 리전에 대하여 진행
    downloadFile() {
      this.$axios.post('/donwload/test', this.downloadUrl)
        .then((r) => {
          console.log(r.data.time);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 각 배열 초기화
    reset() {
      this.downloadUrl = [];
      this.uploadTime = [];
    },
  },
};
</script>
```