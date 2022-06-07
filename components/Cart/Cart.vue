<template>
  <div class="cart">
    <Case class="case_sm">
      <Breadcrumb class="cart__breadcrumb hidden-xs" v-if="step == 1" />
      <Return class="cart__return hidden show-xs-flex" v-if="step == 1" />
      <div class="cart__return" v-if="step == 2" @click="prevStep">
        <Icon name="chevron" class="f-red" />
        <span>Назад</span>
      </div>
      <div class="cart__wrap row">
        <div class="cart__left">
          <H1 class="cart__title">{{ title }}</H1>
          <div class="cart__list" v-if="products.length > 0">
            <Product 
              v-for="item in products"
              :key="item.title"
              :element="item"
              class="product_row cart__item"
              :incdec="true"
              :remove="true"
              :disabled="isProductDisabled"
              @click="calcTotalSum" />
          </div>
          <template v-else>
            <div class="cart__empty">
              <img src="~/assets/images/empty.png" alt="">
              <span>Ой, а тут пусто...</span>
            </div>
          </template>
        </div>
        <div class="cart__right">
          <div class="cart__info" v-if="step == 1">
            <div class="cart__delivery">
              <H3 class="cart__delivery-title">Условия доставки и оплаты</H3>
              <T2 class="cart__delivery-text">Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и полноту реализации выбранного вами уровня усовершенствования.Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и </T2>
            </div>
          </div>
          <div class="cart__order" v-else>
            <EField class="cart__field" mode="sm, b-gray" validation="email" placeholder="example@email.com" v-model:val="fields.email">
              <template #title>Email</template>
            </EField>
            <EField class="cart__field" mode="sm, b-gray" validation="phone" placeholder="+7 888 888 88 88" v-model:val="fields.phone">
              <template #title>Телефон</template>
            </EField>
            <EField class="cart__field" mode="sm, b-gray" placeholder="Москва, ул. Академика королева, 132 в, 343" v-model:val="fields.address">
              <template #title>Адрес доставки</template>
            </EField>
            <Select class="cart__select" mods="sm, b-gray" title="Способ доставки" placeholder="Выберите способ доставки" :options="delivery.list" v-model:val="delivery.current" :disabled="false" />
            <div class="cart__checks">
              <div class="cart__checks-title">Способ оплаты</div>
              <div class="cart__checks-list">
                <Check 
                  v-for="item in pay.list" 
                  :key="item.id" 
                  class="cart__checks-item check_md check_gray" 
                  :value="item.title" 
                  :group="pay.name" 
                  v-model:checked="item.checked" />
              </div>
            </div>
          </div>
          <div class="cart__price" v-if="products.length > 0">Итого: <var>{{ toPriceFormat(total) }}</var> ₽</div>
          <Button class="cart__button-order" mods="md, bg-red" @click="nextStep">{{ products.length == 0 ? 'Перейти в каталог' : 'Оформить заказ'}}</Button>
        </div>

        <Rec class="cart__rec hidden show-xs" v-if="products.length == 0" title="Может что-то такое?" :length="4" />
      </div>
    </Case>
  </div>
</template>
<script src="./Cart.js"></script>
<style src='./Cart.scss'></style>
