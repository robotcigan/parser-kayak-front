// import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    items: [],
    date: ''
  },
  created() {
    axios.get('http://localhost:3000/')
      .then(res => {
        console.log('response', res.data);
        this.items = '';
        this.items = res.data;
      })
      .catch(err => {
        this.errors.push(err);
      })
  },
  methods: {
    sendDate: function() {
      // console.log(this.date);
      axios.post('http://localhost:3000/date', {
          'date': this.date
        }
      )}
  }
})