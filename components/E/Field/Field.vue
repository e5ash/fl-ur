<template>
  <div class="field" :class="[mods, errorValue > 0 ? 'field_error-type-' + errorValue : null]" @click="handleClick">
    <div v-if="$slots.title || $slots.headBefore || $slots.headAfter" class="field__head">
      <slot v-if="$slots.headBefore" name="headBefore"></slot>
      <div v-if="$slots.title" class="field__title"><slot name="title"></slot></div>
      <slot v-if="$slots.headAfter" name="headAfter"></slot>
    </div>
    <div class="field__body">
      <slot v-if="$slots.bodyBefore" name="bodyBefore"></slot>
      <div v-if="$slots.iconBefore" class="field__icon field__icon_left">
        <slot name="iconBefore"></slot>
      </div>
      <div class="field__inner">
        <div class="field__placeholder" v-if="placeholder">{{ placeholder }}</div>
        <input 
          v-if="type != 'textarea'"
          class="field__area" 
          ref="area"
          @focusin="handleFocusin"
          @focusout="handleFocusout"
          @input="handleInput"
          :type="typeArea"
          v-model="value"
          name="name"
        >
        <textarea 
          v-else
          class="field__area" 
          ref="area"
          @focusin="handleFocusin"
          @focusout="handleFocusout"
          @input="handleInput"
          :type="typeArea"
          v-model="value"
          name="name"
        ></textarea>
      </div>
      <div v-if="clear == true" class="field__clear field__icon field__icon_right" :class="isEmpty ? cls.iconHidden : null" @click="clearValue">
        <Icon name="cross-round" />
      </div>
      <div v-if="$slots.iconAfter" class="field__icon field__icon_right">
        <slot name="iconAfter"></slot>
      </div>
      <div v-if="validation" class="field__icon field__icon_right" :class="isFocus ? cls.iconHidden : null">
        <Icon v-if="isValid == 1" name="check-round" class="f-green" />
        <Icon v-else-if="isValid == 0" name="alert" class="f-red" />
      </div>
      <div v-if="type == 'password'" class="field__visible field__icon field__icon_right" :class="!isFocus ? cls.iconHidden : null" @click="toggleVisiblePassword">
        <Icon v-if="!isVisible" name="eye" />
        <Icon v-else name="eye-line" />
      </div>
      <slot v-if="$slots.bodyAfter" name="bodyAfter"></slot>
    </div>
    <div v-if="$slots.footBefore || $slots.footAfter || validation" class="field__foot">
      <slot v-if="$slots.footBefore" name="footBefore"></slot>
      <div class="field__valid" v-show="errorValue != 0">
        <div class="field__valid-title" v-if="errorValue != 0 || errorValue == 40">{{ getError(errorValue, placeholder ? placeholder : null) }}</div>
        <div class="field__valid-password" v-if="errorValue >= 40 && errorValue <= 49">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <slot v-if="$slots.footAfter" name="footAfter"></slot>
    </div>
  </div>
</template>
<script src="./Field.js"></script>
<style src='./Field.scss'></style>
