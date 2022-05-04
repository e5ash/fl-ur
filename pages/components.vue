<template>
  <main class="main">
    <div class="components">
      <Case>
      <div class="components__line">
        <div class="components__title">Заголовки</div>
        <div class="components__inner">
          <H1>Первого <u>уровня</u></H1>
          <H2>Второго уровня</H2>
          <H3>Третьего уровня</h3>
        </div>
      </div>
      <div class="components__line">
        <div class="components__title">Поля</div>
        <div class="components__inner">
          <div class="components__desc">
            <p>Данный тип компонента объединяет в себе input и textarea</p>
          </div>

          <div class="components__subtitle">Модификатор b-gray</div>
          <EField 
            class="components__field"
            mode="b-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          ></EField>

          <div class="components__subtitle">Модификатор bg-gray</div>
          <EField 
            class="components__field"
            mode="bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          ></EField>

          <div class="components__subtitle">Модификатор md</div>
          <EField 
            class="components__field"
            mode="md"
            type="text"
            name="field"
            placeholder="Placeholder"
          ></EField>
          <EField 
            class="components__field"
            mode="md"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          ></EField>

          <div class="components__subtitle">Модификатор sm</div>
          <EField 
            class="components__field"
            mode="sm"
            type="text"
            name="field"
            placeholder="Placeholder"
          ></EField>
          <EField 
            class="components__field"
            mode="sm"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          ></EField>

          <div class="components__subtitle">Модификатор b-gray + md</div>
          <EField 
            class="components__field"
            mode="md, b-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          ></EField>
          <EField 
            class="components__field"
            mode="md, b-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          ></EField>

          <div class="components__subtitle">Модификатор b-gray + sm</div>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          ></EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          ></EField>

          <div class="components__subtitle">Иконка слево</div>
          <EField 
            class="components__field"
            mode="md, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconBefore>
              <Icon name="phone" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="md, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconBefore>
              <Icon name="phone" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconBefore>
              <Icon name="phone" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
            :clear="true"
          >
            <template #iconBefore>
              <Icon name="phone" />
            </template>
          </EField>

          <div class="components__subtitle">Иконка справа</div>
          <EField 
            class="components__field"
            mode="md, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconAfter>
              <Icon name="at" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="md, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconAfter>
              <Icon name="at" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconAfter>
              <Icon name="at" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconAfter>
              <Icon name="at" />
            </template>
          </EField>

          <div class="components__subtitle">Иконка слево и справа</div>
          <EField 
            class="components__field"
            mode="md, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconBefore>
              <Icon name="phone" />
            </template>
            <template #iconAfter>
              <Icon name="at" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="md, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconBefore>
              <Icon name="phone" />
            </template>
            <template #iconAfter>
              <Icon name="at" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconBefore>
              <Icon name="phone" />
            </template>
            <template #iconAfter>
              <Icon name="at" />
            </template>
          </EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
          >
            <template #iconBefore>
              <Icon name="phone" />
            </template>
            <template #iconAfter>
              <Icon name="at" />
            </template>
          </EField>

          <div class="components__subtitle">Наднастройка clear (очистка поля при введеном значении)</div>
          <EField 
            class="components__field"
            mode="md, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
            :clear="true"
          ></EField>
          <EField 
            class="components__field"
            mode="md, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
            :clear="true"
          ></EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="text"
            name="field"
            placeholder="Placeholder"
            :clear="true"
          ></EField>
          <EField 
            class="components__field"
            mode="sm, bg-gray"
            type="textarea"
            name="field"
            placeholder="Placeholder"
            :clear="true"
          ></EField>

          <div class="components__subtitle">Валидация</div>
          <EField 
            class="components__field"
            mode="sm, b-gray"
            type="text"
            name="field"
            placeholder="Имя"
            validation="name"
          ></EField>
          <EField 
            class="components__field"
            mode="sm, b-gray"
            type="email"
            name="field"
            placeholder="Email"
            validation="email"
          ></EField>
          <EField 
            class="components__field"
            mode="sm, b-gray"
            type="tel"
            name="field"
            placeholder="Телефон"
            validation="phone"
          ></EField>
          <EField 
            class="components__field"
            mode="sm, b-gray"
            type="password"
            name="field"
            placeholder="Пароль"
            validation="password"
          ></EField>
          <EField 
            class="components__field"
            mode="sm, b-gray"
            type="textarea"
            name="field"
            placeholder="Комментарий"
            validation="comment"
          ></EField>
        </div>
      </div>
      <div class="components__line">
        <div class="components__title"></div>
        <div class="components__inner"></div>
      </div>
      <div class="components__line">
        <div class="components__title"></div>
        <div class="components__inner"></div>
      </div>

      <EField 
        mode="md, bg-gray"
        type="text"
        name="field"
        placeholder="Поле bg-gray" 
      ></EField>

      <EField 
        mode="md, b-gray"
        type="text"
        name="field"
        placeholder="Поле md - высотой 48px"
      ></EField>

      <EField 
        mode="md, b-gray"
        type="textarea"
        name="field"
        placeholder="Поле (многострочное) md - высотой 100px"
      ></EField>

      <EField 
        mode="sm, b-gray"
        type="text"
        name="field"
        placeholder="Поле sm - высотой 42px"
      ></EField>

      <EField 
        mode="sm, b-gray"
        type="textarea"
        name="field"
        placeholder="Поле (многострочное) sm - высотой 80px"
      ></EField>

      <EField 
        class=""
        mode="sm, b-gray"
        type="text"
        name="field"
        placeholder="Name"
        :required="true"
        validation="name"
      ></EField>

      <EField 
        class=""
        mode="sm, b-gray"
        type="password"
        name="password"
        placeholder="Password"
        :required="true"
        validation="password"
      ></EField>
      <EField 
        class=""
        mode="sm, b-gray"
        type="textarea"
        name="field"
        placeholder="Placeholder"
        :required="true"
        :clear="true"
        validation="email"
      />
      <EField 
        class=""
        mode="md, bg-gray"
        type="text"
        name="field"
        placeholder="Placeholder"
        :required="true"
        :clear="true"
        validation="email"
      >
      </EField>
      <EField 
        class=""
        mode="sm, b-gray"
        type="textarea"
        name="field"
        placeholder="Placeholder"
        :required="true"
        :clear="true"
        validation="email"
      />
      <EField 
        class=""
        mode="sm, bg-gray"
        type="text"
        name="field"
        placeholder="Placeholder"
        :required="true"
        :clear="true"
        validation="email"
      />
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

<style lang="scss" scoped>
  .components {
    padding-top: 40px;
    &__line {
        display: flex;
        padding-bottom: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid #eee;
      }
    &__title {
        width: 25%;
        font-size: 30px;
      }
    &__inner {
        width: 75%;
      }
    &__desc {
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 35px;
        padding-top: 7px;
      }
    &__subtitle {
        font-size: 18px;
        font-weight: 700;
        margin-top: 30px;
        margin-bottom: 15px;
      }
    &__field {
        margin-bottom: 18px;
      }
  }
</style>
