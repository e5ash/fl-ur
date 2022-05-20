<template>
  <div class="auto">
    <Select ref="selectMarks" class="auto__select" :class="classSelect" mods="md, b-gray" classesDrop="select__drop_mt" :options="marks" v-model:val="currentMark" placeholder="Выберите марку автомобиля" :clear="true" :disabled="false" :bg="true" />
    <Select ref="selectModels" class="auto__select" :class="classSelect" mods="md, b-gray" classesDrop="select__drop_mt" :options="currentMark.models" v-model:val="currentModel" placeholder="Выберите модель автомобиля" :clear="true" :disabled="true" :bg="true" @click="clickToModels"/>
    <Select ref="selectMods" class="auto__select" :class="classSelect" mods="md, b-gray" classesDrop="select__drop_mt" :options="currentModel.mods" v-model:val="currentMode" placeholder="Выберите модификацию " :clear="true" :disabled="true" :bg="true"/>
    <Button v-if="showButton" class="auto__button" :class="classButton" mods="md, bg-red, shadow-black">Подобрать</Button>
  </div>
</template>
<script src="./Auto.js"></script>
<style src='./Auto.scss'></style>
