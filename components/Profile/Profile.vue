<template>
  <div class="profile">
    <Case class="case_sm">
      <Breadcrumb class="profile__breadcrumb hidden-xs" />
      <Return class="profile__return hidden show-xs-flex" />
      <div class="profile__inner row">
        <div class="profile__left">
          <H1 class="profile__title">Профиль</H1>
          <T1 class="profile__desc">Тут вы можете посмотреть историю заказов и изменить контактную информацию</T1>
          <div class="profile__form">
            <EField class="profile__field" mode="sm, b-gray" validation="email" placeholder="example@email.com" v-model:val="fields.email">
              <template #title>Email</template>
            </EField>
            <EField class="profile__field" mode="sm, b-gray" validation="phone" placeholder="+7 888 888 88 88" v-model:val="fields.phone">
              <template #title>Телефон</template>
            </EField>
            <EField class="profile__field" mode="sm, b-gray" type="password" name="field" placeholder="Пароль" validation="password" v-model:val="fields.password">
              <template #title>Пароль</template>
            </EField>
            <Button class="profile__button" mods="md, bg-red, shadow-black">Сохранить</Button>
            <div class="profile__links">
              <div class="profile__links-title">Сохраненные товары</div>
              <div class="profile__links-list">
                <a class="profile__link" href="/profile/compare" @click.prevent="toLink('/profile/compare')">
                  <div class="profile__link-icon">
                    <Icon name="scale" class="f-red" />
                  </div>
                  <div class="profile__link-title">Сравнение</div>
                </a>
                <a class="profile__link" href="/profile/favorit" @click.prevent="toLink('/profile/favorit')">
                  <div class="profile__link-icon">
                    <Icon name="bookmark" class="f-red" />
                  </div>
                  <div class="profile__link-title">Избранное</div>
                </a>
              </div>
            </div>
            <Myauto 
              class="profile__myauto" 
              :add="true"
              :remove="true"
              title="Мой гараж"
              v-model:current="myauto" />
          </div>
        </div>
        <div class="profile__right">
          <div class="profile__orders row">
            <a href="/profile/order" class="profile__order" v-for="order in orders" :key="order.name" @click.prevent="toLink('/profile/order')">
              <div class="profile__order-name">{{ order.name }}</div>
              <div class="profile__order-date">{{ order.date }}</div>
              <div class="profile__order-data row">
                <div class="profile__order-price">{{ toPriceFormat(order.price) }} ₽</div>
                <div class="profile__order-status profile__order-status_successful" v-if="order.status == 0"><span>Доставлен</span><div><Icon name="check" /></div></div>
                <div class="profile__order-status profile__order-status_procces" v-else-if="order.status == 1"><span>В работе</span><div><Icon name="check" /></div></div>
                <div class="profile__order-status profile__order-status_error" v-else-if="order.status == 2"><span>Отказ</span><div><Icon name="check" /></div></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Case>
  </div>
  
</template>
<script src="./Profile.js"></script>
<style src='./Profile.scss'></style>
