<template>
  <div class="form" :class="'form_step-' + step">
    <div class="form__head" v-if="title">
      <div class="form__title" v-if="title">{{ title }}</div>
      <div class="form__close modal__close" v-if="close" @click="isShowModal = false"></div>
    </div>
    <div class="form__desc" v-if="desc">{{ desc }}</div>
    <div class="form__inner">
      <template v-if="type == 'callback'">
        <template v-if="step == 1">
          <EField class="form__field" mode="sm, b-gray" placeholder="Ваше имя" v-model:val="fields.name">
            <template #title>Имя</template>
          </EField>
          <EField class="form__field" mode="sm, b-gray" validation="email" placeholder="example@email.com" v-model:val="fields.email">
            <template #title>Email</template>
          </EField>
          <EField class="form__field" mode="sm, b-gray" validation="phone" placeholder="+7 888 888 88 88" v-model:val="fields.phone">
            <template #title>Телефон</template>
          </EField>
          <Button class="form__button" mods="md, bg-red, shadow-black" @click="step++">{{ btnText ? btnText : 'Заказать звонок' }}</Button>
        </template>
        <template v-else>
          <div class="form__successful">
            <div class="form__successful-title">Ваше сообщение <br>успешно отправлено.</div>
            <div class="form__successful-icon">
              <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.875 33.5C0.875 15.4817 15.4817 0.875 33.5 0.875C51.5096 0.895975 66.104 15.4904 66.125 33.5C66.125 51.5183 51.5183 66.125 33.5 66.125C15.4817 66.125 0.875 51.5183 0.875 33.5ZM33.7229 48.4232L52.3328 23.1688C52.9619 22.3901 53.1122 21.3286 52.724 20.4059C52.3358 19.4831 51.472 18.8484 50.4754 18.7536C49.4788 18.6588 48.5107 19.1194 47.9556 19.9525L31.0259 42.9286L19.9443 34.0628C18.7716 33.1243 17.0602 33.3142 16.1217 34.4869C15.1833 35.6596 15.3732 37.371 16.5459 38.3095L29.8351 48.9343C30.4161 49.3885 31.1551 49.5901 31.8862 49.494C32.6173 49.3979 33.2791 49.0121 33.7229 48.4232Z" fill="white"/>
              </svg>
            </div>
          </div>
        </template>
      </template>
      <template v-else-if="type == 'review'">
        <template v-if="step == 1">
          <EField class="form__field" mode="sm, b-gray" placeholder="Ваше имя" v-model:val="fields.name">
            <template #title>Имя</template>
          </EField>
          <EField class="form__field" mode="sm, b-gray" placeholder="Отзыв" type="textarea" v-model:val="fields.review">
            <template #title>Отзыв</template>
          </EField>
          <div class="form__files">
            <div class="form__files-item" v-for="(file, index) in fields.files" :key="file.id">
              <div class="form__files-name">{{ file.name }}</div>
              <div class="form__files-remove" @click="fields.files.splice(index, 1)"></div>
            </div>
          </div>
          <File class="form__file" v-model:file="fields.files" />
          <Button class="form__button" mods="md, bg-red, shadow-black" @click="step++">Подать заявку</Button>
        </template>
        <template v-else>
          <div class="form__successful">
            <div class="form__successful-title">Отзыв отправлен <br>на модерацию</div>
            <div class="form__successful-icon">
              <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.875 33.5C0.875 15.4817 15.4817 0.875 33.5 0.875C51.5096 0.895975 66.104 15.4904 66.125 33.5C66.125 51.5183 51.5183 66.125 33.5 66.125C15.4817 66.125 0.875 51.5183 0.875 33.5ZM33.7229 48.4232L52.3328 23.1688C52.9619 22.3901 53.1122 21.3286 52.724 20.4059C52.3358 19.4831 51.472 18.8484 50.4754 18.7536C49.4788 18.6588 48.5107 19.1194 47.9556 19.9525L31.0259 42.9286L19.9443 34.0628C18.7716 33.1243 17.0602 33.3142 16.1217 34.4869C15.1833 35.6596 15.3732 37.371 16.5459 38.3095L29.8351 48.9343C30.4161 49.3885 31.1551 49.5901 31.8862 49.494C32.6173 49.3979 33.2791 49.0121 33.7229 48.4232Z" fill="white"/>
              </svg>
            </div>
          </div>
        </template>
      </template>
      <template v-else-if="type == 'sets'">
        <div class="form__sets">

        </div>
      </template>
      <template v-else-if="type == 'custom'"><slot /> </template>
    </div>
  </div>
</template>
<script src="./Form.js"></script>
<style src='./Form.scss'></style>
