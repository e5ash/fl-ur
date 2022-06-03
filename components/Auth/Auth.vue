<template>
  <div class="auth">
    <Case class="case_sm">
      <Breadcrumb class="auth__breadcrumb hidden-xs" />
      <Return class="auth__return hidden show-xs-flex" />
      <div class="auth__inner row">
        <div class="auth__left">
          <H1 class="auth__title">{{ title }}</H1>
          <T1 class="auth__text">{{ text }}</T1>
          <form class="auth__form">
            <EField class="auth__field" mode="sm, b-gray" validation="email" placeholder="example@email.com" v-model:val="fields.email" v-if="reg">
              <template #title>Email</template>
            </EField>
            <EField class="auth__field" mode="sm, b-gray" validation="phone" placeholder="+7 888 888 88 88" v-model:val="fields.phone">
              <template #title>Телефон</template>
            </EField>
            <EField class="auth__field" mode="sm, b-gray" type="password" name="field" placeholder="Пароль" validation="password" v-model:val="fields.password">
              <template #title>Пароль</template>
            </EField>
            <Check 
              class="auth__check check_md check_round" 
              :value="policy.value" 
              :html="policy.value" 
              :group="policy.group" 
              v-if="reg"
              v-model:checked="policy.checked">
                <template #wrap>Согласен(а) с правила обработки <a href="/privacy-policy" @click.prevent="toLink('/privacy-policy')">персональных данных</a> и другими правилами</template>
              </Check>
            <div class="auth__or" v-if="reg"><span>или</span><p>Есть учетная запись? <a href="/login" @click.prevent="toLink('/login')">Войти</a></p></div>
            <div class="auth__or" v-else><span>или</span><p>Нет учетной записи? <a href="/reg" @click.prevent="toLink('/reg')">Зарегистрироваться</a></p></div>
            <Button class="auth__button" mods="md, bg-red, shadow-black">{{ reg ? 'Зарегистрироваться' : 'Войти' }}</Button>
          </form>
        </div>
        <div class="auth__right">
          <div class="auth__img">
            <img src="~/assets/images/auto-lg.png" alt="">
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Auth.js"></script>
<style src='./Auth.scss'></style>
