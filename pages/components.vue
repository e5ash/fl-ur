<template>
  <main class="main">
    <div class="components">
      <Case>
        <div class="components__title">Иконки</div>
        <div class="components__inner">
          <div class="components__icons">
            <Icon name="phone" />
            <Icon name="user" />
            <Icon name="chevron" />
            <Icon name="check-round" />
            <Icon name="check" />
            <Icon name="cross" />
            <Icon name="alert" />
            <Icon name="arrow" />
            <Icon name="union" />
            <Icon name="cart-add" />
            <Icon name="filter" />
            <Icon name="bookmark" />
            <Icon name="scale" />
            <Icon name="doc" />
            <Icon name="play" />
            <Icon name="trash" />
            <Icon name="eye" />
            <Icon name="car" />
            <Icon name="at" />
            <Icon name="map" />
            <Icon name="instagram" />
            <Icon name="youtube" />
            <Icon name="telegram" />
            <Icon name="whatsapp" />
            
          </div>
        </div>
      </Case>
    </div>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Компоненты'
    },
    setup() {
      definePageMeta({
        title: 'Компоненты'
      });
    }
  }
</script>

