<template>
  <main class="main">
    <Inf :rec="true">
      <template #title>Обмен и возврат</template>
      <template #desc-top>
        <p>Добро пожаловать в в интернет-магазин комплектующих для тюнинга «CARCAINE»</p>
      </template>
      <template #desc-bottom>
        <p>Для Вашего удобства мы всегда стараемся держать в наличии самые популярные товары или доставить их в кратчайшие сроки!</p>
        <p>Мы являемся официальными дилерами многих брендов: Revo, Milltek, Wagner Tuning, Burger Tuning, Sachs Performance и др.</p>
        <p>Так же мы предлагаем установку всех запчастей и грамотную настройку программного обеспечения с помощью наших друзей Urban Racers. </p>
        <p>Вы получаете возможность заказать интересующую запчасть, установить её и настроить автомобиль в одном месте и с гарантией!</p>
      </template>
    </Inf>
    <Questions class="hidden-xs"/>
  </main>
</template>
<script>
  export default {
    head: {
      title: 'Обмен и возврат'
    },
    setup() {
      definePageMeta({
        title: 'Обмен и возврат'
      });
    }
  }
</script>
