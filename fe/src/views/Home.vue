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
          <v-btn class="mr-3" @click="uploadFile">Upload</v-btn>
          <v-btn class="ml-3" @click="downloadFile">Download</v-btn>
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
    downloadUrl: [],
    uploadTime: [],
    uploadBefore: null,
    uploadAfter: null,
    downloadBefore: null,
    downloadAfter: null,
  }),
  methods: {
    uploadFile() {
      const formData = new FormData();
      console.log(this.file);
      formData.append('bin', this.file);
      this.uploadBefore = moment();

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
          return this.$axios.post('/upload/sidney', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ sidney: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'sidney', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/sangpaulu', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ sangpaulu: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'sangpaulu', name: this.file.name });
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
          return this.$axios.post('/upload/ohaio', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ ohaio: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'ohaio', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/mumbai', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ mumbai: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'mumbai', name: this.file.name });
          this.uploadBefore = moment();
          return this.$axios.post('/upload/german', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        })
        .then((r) => {
          this.uploadAfter = moment();
          this.uploadTime.push({ german: moment.duration(this.uploadAfter.diff(this.uploadBefore)).asMilliseconds() });
          this.downloadUrl.push({ url: r.data.location, region: 'german', name: this.file.name });
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
    downloadFile() {
      this.$axios.post('/donwload/test', this.downloadUrl)
        .then((r) => {
          console.log(r.data.time);
        })
        .catch((e) => {
          console.log(e);
        });
    },

  },
};
</script>
