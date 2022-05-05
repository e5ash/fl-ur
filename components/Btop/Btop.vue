<template>
  <div class="btop">
    <H2 class="btop__title"><slot /></H2>
    <div class="btop__link" v-if="link">
      <a :href="link.href" @click.prevent="link.event ? link.event : toLink(link.href)">{{ link.title }}</a>
    </div>
  </div>
</template>
<script src="./Btop.js"></script>
<style src='./Btop.scss'></style>
