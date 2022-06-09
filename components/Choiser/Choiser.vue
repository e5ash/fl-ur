<template>
  <div class="choiser">
    <Case>
      <div class="choiser__wrap">
        <div class="choiser__area" @click="isShow = true">
          <EField 
            class="choiser__field"
            mode="md, b-gray"
            type="text"
            name="field"
            placeholder="Выбрать марку и модель"
            :readonly="true">
            <template #iconBefore>
              <Icon name="car" class="f-red" />
            </template>
          </EField>
        </div>
      </div>
    </Case>
    <div class="choiser__modal" :class="isShow ? cls.modalShow : null">
      <div class="choiser__back" @click="goBack">
        <Icon name="chevron" />
        <span>Назад</span>
      </div>
      <div class="choiser__inner">
        <div class="choiser__area">
          <EField 
            ref="area"
            class="choiser__field"
            mode="md, b-gray"
            type="text"
            name="field"
            placeholder="Поиск по списку авто"
            v-model:val="searchValue"
            :clear="true">
            <template #iconBefore>
              <Icon name="car" class="f-red" />
            </template>
          </EField>
        </div>
        <div class="choiser__list" v-if="filterList.length > 0">
          <div 
            v-for="mark in level == 0 ? filterList : marks" 
            :key="mark.name" 
            v-show="level == 0 || level == 1 && currentMark == mark"
            class="choiser__item" 
            :class="currentMark == mark ? cls.currentItem : null" 
            @click="setItem('currentMark', mark)">
            <div class="choiser__item-icon">
              <img :src="mark.icon" :alt="mark.name">
            </div>
            <div class="choiser__item-title">{{ mark.name }}</div>
            <div class="choiser__item-arrow">
              <Icon name="arrow" />
            </div>
          </div>
          <div class="choiser__sub" v-show="currentMark">
            <div 
              v-for="model in level == 1 ? filterList : currentMark.models" 
              :key="model.name"
              v-show="level == 1 || level == 2 && currentModel == model"
              class="choiser__item" 
              :class="currentModel == model ? cls.currentItem : null" 
              @click="setItem('currentModel', model)">
              <div class="choiser__item-icon">
                <img :src="currentMark.icon" :alt="model.name">
              </div>
              <div class="choiser__item-title">{{ model.name }}</div>
              <div class="choiser__item-arrow">
                <Icon name="arrow" />
              </div>
            </div>
          </div>
          <div class="choiser__sub" v-show="currentModel">
            <div 
              v-for="mode in level == 1 ? filterList : currentModel.mods" 
              :key="mode.name" 
              v-show="level == 2 || currentMode == mode"
              class="choiser__item choiser__item_sub" 
              :class="currentMode == mode ? cls.currentItem : null" 
              @click="setItem('currentMode', mode, false, '/catalog')">
              <div class="choiser__item-icon">
                <img :src="currentMark.icon" :alt="mode.name">
              </div>
              <div class="choiser__item-title">{{ mode.name }}</div>
              <div class="choiser__item-arrow">
                <Icon name="chevron" class="f-red" />
              </div>
            </div>
          </div>
        </div>
        <div class="choiser__empty" v-else>
          <div class="choiser__empty-icon">
            <img src="~/assets/images/empty.png" alt="">
          </div>
          <div class="choiser__empty-title">Ой, а тут пусто...</div>
        </div>
      </div>
      <Button class="choiser__button" mods="md, bg-red" @click="clickToButton">{{ filterList.length > 0 ? buttonTextCurrent : buttonTexts.reset }}</Button>
    </div>
  </div>
</template>
<script src="./Choiser.js"></script>
<style src='./Choiser.scss'></style>
