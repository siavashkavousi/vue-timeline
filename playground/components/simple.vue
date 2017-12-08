<template>
  <div class="hello">
    <timeline>
      <timeline-item
        title="John Doe sent a SMS"
        date="2016-09-12 10:06 PM"
        container="card"
      >
        I received the payment for $543. Should be shipping the item within a couple of hours. Thanks for the order!
      </timeline-item>
      <timeline-item
        title="John Doe sent a SMS"
        date="2016-09-12 10:06 PM"
        container="card"
      >
        I received the payment for $543. Should be shipping the item within a couple of hours. Thanks for the order!
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
  import Timeline from '@@/timeline'
  import TimelineItem from '@@/timeline-item'

  export default {
    components: {
      TimelineItem,
      Timeline,
    },
  }
</script>
