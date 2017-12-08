<template>
  <div class="timeline__item" :class="classNames" :style="styles">
    <div class="timeline__item__icon" v-if="hasIcon">
      <slot name="icon"></slot>
    </div>
    <div class="timeline__item__circle"></div>
    <div class="timeline__item__container" :class="{'timeline__item__card': container === 'card'}">
      <div class="timeline__item__date">{{ date }}</div>
      <div class="timeline__item__title">{{ title }}</div>
      <small class="timeline__item__subtitle">{{ subtitle }}</small>
      <div :class="{
        contentClassNames: true,
        'timeline__item__content': container !== 'card',
        'timeline__item__card__body': container === 'card'
      }" :style="contentStyles">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'timeline-item',

    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: String,
      date: String,
      classNames: String,
      styles: String,
      contentClassNames: String,
      contentStyles: String,
      container: {
        type: String,
        default: 'simple',
        validator: (value) => ['simple', 'card'].includes(value),
      },
    },

    computed: {
      hasIcon () {
        return !!this.$slots['icon']
      },
    },
  }
</script>

<style lang="scss" scoped>
  .timeline__item {
    position: relative;
    margin: 10px 0;
    padding-left: 45px;
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }

  .timeline__item__circle {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-left: 1px;
    background: #e9f0f5;
    border: 2px solid #6fba1c;
    display: flex;
  }

  .timeline__item__container {
    position: relative;
    &::before {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #ffffff;
    }
  }

  .timeline__item__card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    background-color: rgb(255, 255, 255);
  }

  .timeline__item__card__header {
    background-color: #7BB1EA;
    padding: 10px;
    color: #fff;
  }

  .timeline__item__date {
    margin-bottom: 3px;
  }

  .timeline__item__subtitle {
    margin-top: 2px;
    font-size: 85%;
    color: #777;
  }

  .timeline__item__content {
    width: 98%;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.6;
    padding: 0.5em 1em;
    &::after {
      clear: both;
      content: '';
      display: table;
    }
  }

  .timeline__item__card__body {
    background-color: #ffffff;
    margin-bottom: 1em;
    line-height: 1.6px;
    padding: 10px;
    min-height: 40px;
  }
</style>
