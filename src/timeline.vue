<template>
  <div
    class="timeline"
    :style="style">
    <div
      class="timeline--before"
      :class="{
        'timeline--before--right': orientation === 'right',
        'timeline--before--left': orientation === 'left'}"
    />
    <slot :orientation="orientation"/>
    <div class="timeline--after"/>
  </div>
</template>

<script>
  export default {
    props: {
      orientation: {
        type: String,
        default: 'left',
      },
      style: Object,
    },
  }
</script>

<style lang="scss" scoped>
  .timeline {
    position: relative;
    font-size: 80%;
    font-weight: 300;
    padding: 10px 0;
    width: 95%;
    margin: 0 auto;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 18px;
      height: 100%;
      width: 2px;
      background: #a0b2b8;
    }
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }
  .timeline--before--left {
    left: 16px;
  }
  .timeline--before--right {
    right: 14px;
  }
</style>
