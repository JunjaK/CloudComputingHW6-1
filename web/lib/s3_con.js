var s3_info = require('./s3_info');
var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: s3_info.accessKeyId,
    secretAccessKey: s3_info.secretAccessKey,
    region : s3_info.region
});

module.exports = AWS;