<template>
  <div class="auto">
    <Select ref="selectMarks" class="auto__select" :class="[classSelect, classSelectMarks]" mods="md, b-gray" :options="marks" v-model:val="currentMark" placeholder="Выберите марку автомобиля" :clear="true" :disabled="false" :bg="selectBg" />
    <Select ref="selectModels" class="auto__select" :class="[classSelect, classSelectModels]" mods="md, b-gray" :options="currentMark.models" v-model:val="currentModel" placeholder="Выберите модель автомобиля" :clear="true" :disabled="true" :bg="selectBg" @click="clickToModels"/>
    <Select ref="selectMods" class="auto__select" :class="[classSelect, classSelectMods]" mods="md, b-gray" :options="currentModel.mods" v-model:val="currentMode" placeholder="Выберите модификацию " :clear="true" :disabled="true" :bg="selectBg" @click="clickToMods"/>
    <Button v-if="showButton" class="auto__button" :class="classButton" mods="md, bg-red, shadow-black" @click="clickToButton">Подобрать</Button>
  </div>
</template>
<script src="./Auto.js"></script>
<style src='./Auto.scss'></style>
