<template>
  <v-container fluid>
    <v-row justify="center">
      <div style="margin-top: 300px">
        <v-file-input
          v-model="file"
          id="bin"
          placeholder="Upload your documents"
          style="width: 300px;"
        />
      </div>
    </v-row>
    <v-layout justify-center>
      <div>
        <v-row justify="center">
          <v-btn @click="uploadFile">Upload</v-btn>
          <v-btn class="mx-4" @click="downloadFile">Download</v-btn>
          <v-btn @click="reset">Reset</v-btn>
        </v-row>
      </div>
    </v-layout>
  </v-container>
</template>

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
