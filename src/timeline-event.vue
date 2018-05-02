<template>
  <div
    class="timeline__event"
    :class="{
      'timeline__event-right': orientation === 'right',
      'timeline__event--left': orientation === 'left'}"
  >
    <div :style="mergeNotificationStyle(iconColor, bubbleStyle, orientation)">
      <span
        class="timeline__material-icons"
        :style="iconStyle">
        <slot name="icon"/>
      </span>
    </div>
    <div class="timeline__event__container">
      <div class="timeline__event__container--before"/>
      <div
        :class="{'timeline__card__title': container === 'card'}"
        :style="{[cardHeaderStyle]: container === 'card'}"
      >
        <slot
          name="createdAt"
          class="timeline__time"
          :style="container === 'card' ? {color: '#303e49'} : {}"
        />
        <div :style="titleStyle">
          <slot name="title"/>
        </div>
        <slot
          name="subtitle"
          class="timeline__subtitle"
          :style="subtitleStyle"
        />
        <slot
          name="buttons"
          class="timeline__action-buttons"
          :class="{
            'timeline__action-buttons--left': orientation === 'right',
            'timeline__action-buttons--right': orientation === 'left'}"
        />
      </div>
      <slot/>
      <div class="timeline__event--after"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: String,
      contentStyle: Object,
      iconStyle: String,
      iconColor: String,
      bubbleStyle: String,
      cardHeaderStyle: Object,
      style: Object,
      titleStyle: Object,
      subtitleStyle: Object,
      orientation: String,
      container: {
        type: String,
        default: 'simple',
        validator: value => ['simple', 'card'].includes(value),
      },
    },

    computed: {
      mergeNotificationStyle (iconColor, bubbleStyle, orientation) {
        const iconColorStyle = iconColor ? { ...s.eventType, ...{ color: iconColor, borderColor: iconColor } } : s.eventType
        const leftOrRight = (orientation === 'right') ? { ...s['eventType--right'] } : { ...s['eventType--left'] }
        return { ...iconColorStyle, ...bubbleStyle, ...leftOrRight }
      },
      hasIcon () {
        return !!this.$slots['icon']
      },
    },
  }
</script>

<style lang="scss" scoped>
  .timeline__event {
    position: relative;
    margin: 10px 0;
  }
  .timeline__event--left {
    padding-left: 45px;
    text-align: left;
  }
  .timeline__event--right {
    padding-right: 45px;
    text-align: right;
  }
  .timeline__event--after {
    content: '';
    display: table;
    clear: both;
  }
  .timeline__event-type {
    position: absolute;
    top: 0;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-left: 1px;
    background: #e9f0f5;
    border: 2px solid #6fba1c;
    display: flex;
  }
  .timeline__event-type--left {
    left: 0;
  }
  .timeline__event-type--right {
    right: 0;
  }
  .timeline__material-icons {
    display: flex;
    width: 32px;
    height: 32px;
    position: relative;
    justify-content: center;
    align-self: center;
    align-items: center;
  }
  .timeline__event__container {
    position: relative;
  }
  .timeline__event__container--before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #fff;
  }
  .timeline__time {
    margin-bottom: 3px;
  }
  .timeline__subtitle {
    margin-top: 2px;
    font-size: 85%;
    color: #777;
  }
  .timeline__message {
    width: 98%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.6;
    padding: 0.5em 1em;
  }
  .timeline__message--after {
    clear: both;
    content: '';
    display: table;
  }
  .timeline__action-buttons {
    margin-top: -20px;
  }
  .timeline__action-buttons--left {
    float: left;
    text-align: left;
  }
  .timeline__action-buttons--right {
    float: right;
    text-align: right;
  }
  .timeline__card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 6px, rgba(0, 0, 0, 0.117647) 0 1px 4px;
    background-color: rgb(255, 255, 255);
  }
  .timeline__card__title {
    background-color: #7bb1ea;
    padding: 10px;
    color: #fff;
  }
  .timeline__card__body {
    background-color: #fff;
    margin-bottom: 1em;
    line-height: 1.6px;
    padding: 10px;
    min-height: 40px;
  }
  .timeline__blip-style {
    position: absolute;
    top: 50%;
    margin-top: 9px;
  }
</style>
