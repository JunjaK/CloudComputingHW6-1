var multer = require('multer');
var multerS3 = require('multer-s3');
var aws = require('../../../lib/s3_con');
var s3 = new aws.S3();
// 이미지 저장경로, 파일명 세팅
var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "ccsidneybucket", // 버킷 이름
        contentType: multerS3.AUTO_CONTENT_TYPE, // 자동을 콘텐츠 타입 세팅
        acl: 'public-read', // 클라이언트에서 자유롭게 가용하기 위함
        key: (req, file, cb) => {
            var fullPath = file.originalname;

            cb(null, fullPath);
        },
    }),
    limits: { fileSize: 100 * 1024 * 1024 }, // 용량 제한
});
module.exports = upload;