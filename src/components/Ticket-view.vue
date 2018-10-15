<template lang="pug">
  #ticket-view
    h4 ticket view
    ul
      li(v-for="item in items") {{ item.company }}
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'ticket-view',
    data() {
      return {
        items: []
      }
    },
    created() {
      axios.get('http://localhost:3000')
        .then(res => {
          this.items = res.data;
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
</script>