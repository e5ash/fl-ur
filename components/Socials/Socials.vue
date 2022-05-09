<template>
  <div class="socials">
    <div class="socials__list">
      <a class="socials__item" :class="classItem" v-for="item in list" :key="item.id" :href="item.href" target="_blank">
        <Icon :name="item.icon" />
      </a>
    </div>
  </div>
</template>
<script src="./Socials.js"></script>
<style src='./Socials.scss'></style>
