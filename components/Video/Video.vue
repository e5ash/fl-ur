<template>
  <div class="video" :class="isPlay ? classPlay : null">
    <div class="video__inner">
      <!-- <iframe ref="iframe" width="100%" height="100%" :src="'https://www.youtube.com/embed/' + video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    </div>
    <div class="video__poster" @click="togglePlay">
      <div class="video__icon"><Icon name="play" /></div>
      <div class="video__img">
        <img :src="poster" alt="">
      </div>
    </div>
  </div>
</template>
<script src="./Video.js"></script>
<style src='./Video.scss'></style>
