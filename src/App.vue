<template lang="pug">
  #app
    .container
      h1 {{ msg }}
      ticket-view
</template>

<script>
import TicketView from "./components/Ticket-view.vue";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Flight tickets parser'
    }
  },
  components: {
    TicketView
  }
}
</script>

<style>
</style>
