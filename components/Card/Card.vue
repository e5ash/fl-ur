<template>
  <div class="card">
    <Case class="case_sm">
      <Breadcrumb class="card__breadcrumb" />
      <Return class="card__return hidden" />
      <div class="card__inner row">
        <div class="card__data">
          <div class="card__gallery">
            <div class="card__images swiper" ref="images">
              <div class="card__images-list swiper-wrapper">
                <div class="card__images-item swiper-slide" v-for="item in images" :key="item">
                  <img :src="item" alt="">
                </div>
              </div>
            </div>
            <div class="card__pagination swiper" ref="pagination">
              <div class="card__pagination-list swiper-wrapper">
                <div class="card__pagination-item swiper-slide" v-for="item in images" :key="item">
                  <img :src="item" alt="">
                </div>
              </div>
              <div class="card__pagination-logo">
                <img src="~/assets/images/bbs.svg" alt="">
              </div>
            </div>
          </div>
          <H3 class="card__title card__name">{{ name }}</H3>
          <div class="card__controls row">
            <div class="card__price">Цена: <var>{{ toPriceFormat(price.current) }}</var> ₽</div>
            <div class="card__actions row">
              <div class="card__action"><Icon name="bookmark" /></div>
              <div class="card__action"><Icon name="scale" /></div>
            </div>
          </div>
          <Button class="card__button-add" mods="md, bg-red, shadow-black" @click="toggleProduct">{{ isAdded ? 'Убрать из корзины' : 'Добавить в корзину' }}</Button>
          <div class="card__sets">
            <div class="card__sets-title">Максимальное занижение</div>
            <div class="card__sets-list">
              <div v-for="set in sets" :key="set.title" class="card__sets-item" :class="set.checked ? 'card__sets-item_checked': null" @click="set.checked = !set.checked">{{ set.title }}</div>
            </div>
          </div>
          <div class="card__selection hidden-xs">
            <H3 class="card__selection-title">Подходит для</H3>
            <div class="card__selection-list" v-if="selects.step == 0">
              <div v-for="select in selects.marks" :key="select.id" class="card__selection-item" :class="!select.models ? 'card__selection-item_disabled' : null" @click="setCurrentMark(select)">
                <div class="card__selection-mark">
                  <img :src="select.icon" :alt="select.name">
                </div>
                <div class="card__selection-name">{{ select.name }}</div>
                <div class="card__selection-count">{{ getModelWord(select.models?.length) }}</div>
                <div class="card__selection-plus" v-if="select.models"></div>
              </div>
            </div>
            <div class="card__selection-sub" v-if="selects.step == 1 && selects.current.mark">
              <div v-for="model in selects.current.mark.models" :key="model.id" class="card__selection-item" @click="setCurrentModel(model)">
                <div class="card__selection-mark">
                  <img :src="selects.current.mark.icon" :alt="selects.current.mark.name">
                </div>
                <div class="card__selection-name">{{ model.name }}</div>
                <div class="card__selection-count">{{ getModelWord(model.mods?.length) }}</div>
                <div class="card__selection-icon">
                  <Icon name="arrow" />
                </div>
              </div>
            </div>
            <div class="card__selection-sub" v-if="selects.step == 2 && selects.current.model">
              <div v-for="mode in selects.current.model.mods" :key="mode.id" class="card__selection-item card__selection-item_disabled">
                <div class="card__selection-mark">
                  <img :src="selects.current.mark.icon" :alt="selects.current.mark.name">
                </div>
                <div class="card__selection-name">{{ mode.name }}</div>
              </div>
            </div>
            <div class="card__selection-item card__selection-return" v-if="selects.step > 0" @click="goBack">
              <div class="card__selection-count">Назад</div>
              <div class="card__selection-icon card__selection-icon_reverse">
                <Icon name="arrow" />
              </div>
              <span></span>
            </div>
          </div>
        </div>
        <div class="card__content">
          <H3 class="card__title">Описание</H3>
          <div class="card__text">{{ text }}</div>
          <div class="card__tabs">
            <div class="card__tabs-links">
              <div class="card__tabs-link" v-for="tab in tabs.list" :key="tab.id" :class="tab == tabs.current ? 'card__tabs-link_current' : null" @click="tabs.current = tab" :data-text="tab.title">{{ tab.title }}</div>
            </div>
            <div class="card__tabs-list">
              <div class="card__tabs-item" v-if="tabs.current == tabs.list[0]">
                <div class="card__block">
                  <h3>Характеристики</h3>
                  <ul>
                    <li v-for="char in chars" :key="char.id">{{ char.title }}: <b>{{ char.value }}</b></li>
                  </ul>
                </div>
                <a class="card__block card__block_button" href="" target="_blank">
                  <Icon name="doc" class="f-red" />
                  <span>Инструкция</span>
                </a>
                <div class="card__block">
                  <h3>Комплектация</h3>
                  <p v-html="complect"></p>
                </div>
              </div>
              <div class="card__tabs-item" v-if="tabs.current == tabs.list[1]">
                <div class="card__analogs">
                  <Product 
                    v-for="item in analogs"
                    :key="item.title"
                    class="product_row card__analog"
                    :UID="item.UID"
                    :img="item.img"
                    :title="item.title" 
                    :price="item.price" />
                </div>
              </div>
              <div class="card__tabs-item" v-if="tabs.current == tabs.list[2]">
                <div class="card__reviews">
                  <Review v-for="review in reviews" :key="review.id" class="card__review" :img="review.img" :title="review.title" :text="review.text" />
                </div>
                <Button class="card__button-review" mods="md, bg-white, c-red, shadow-black">Оставить отзыв</Button>
              </div>
            </div>
          </div>
          <div class="card__video">
            <H3 class="card__video-title">Видео обзор</H3>
            <Video class="card__video-wrap" poster="/assets/images/video-poster.jpg" video="LtAgXMsXOxk"></Video>
          </div>
          <div class="card__rec hidden show-xs">
            <H3 class="card__rec-title">Рекомендуем к установке</h3>
            <div class="card__rec-list">
              <Product 
                v-for="item in rec"
                :key="item.title"
                class="product_col card__rec-item"
                :UID="item.UID"
                :img="item.img"
                :title="item.title" 
                :price="item.price" />
            </div>
          </div>
          <div class="card__selection hidden show-xs">
            <H3 class="card__selection-title">Подходит для</H3>
            <div class="card__selection-list" v-if="selects.step == 0">
              <div v-for="select in selects.marks" :key="select.id" class="card__selection-item" :class="!select.models ? 'card__selection-item_disabled' : null" @click="setCurrentMark(select)">
                <div class="card__selection-mark">
                  <img :src="select.icon" :alt="select.name">
                </div>
                <div class="card__selection-name">{{ select.name }}</div>
                <div class="card__selection-count">{{ getModelWord(select.models?.length) }}</div>
                <div class="card__selection-plus" v-if="select.models"></div>
              </div>
            </div>
            <div class="card__selection-sub" v-if="selects.step == 1 && selects.current.mark">
              <div v-for="model in selects.current.mark.models" :key="model.id" class="card__selection-item" @click="setCurrentModel(model)">
                <div class="card__selection-mark">
                  <img :src="selects.current.mark.icon" :alt="selects.current.mark.name">
                </div>
                <div class="card__selection-name">{{ model.name }}</div>
                <div class="card__selection-count">{{ getModelWord(model.mods?.length) }}</div>
                <div class="card__selection-icon">
                  <Icon name="arrow" />
                </div>
              </div>
            </div>
            <div class="card__selection-sub" v-if="selects.step == 2 && selects.current.model">
              <div v-for="mode in selects.current.model.mods" :key="mode.id" class="card__selection-item card__selection-item_disabled">
                <div class="card__selection-mark">
                  <img :src="selects.current.mark.icon" :alt="selects.current.mark.name">
                </div>
                <div class="card__selection-name">{{ mode.name }}</div>
              </div>
            </div>
            <div class="card__selection-item card__selection-return" v-if="selects.step > 0" @click="goBack">
              <div class="card__selection-count">Назад</div>
              <div class="card__selection-icon card__selection-icon_reverse">
                <Icon name="arrow" />
              </div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Card.js"></script>
<style src='./Card.scss'></style>
