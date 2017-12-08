<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'timeline',

    props: {},
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
</style>
