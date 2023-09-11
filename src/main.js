import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "./scss/main.scss";
import "@popperjs/core";
import axios from 'axios'

const alldata = ref([]);  // 個股完整資訊
const date = ref([]);  //日期
const allstock = ref([]); //成交股數
const allpice = ref([]);  //成交價
const openpice = ref([]); //開盤價
const heighpice = ref([]); //最高價
const lowpice = ref([]); //最低價
const endpice = ref([]);  //收盤價
const symbol = ref('');

const dataPlugin = {
    install(app) {
      app.provide('alldata', alldata);
      app.provide('date', date);
      app.provide('allstock', allstock);
      app.provide('allpice', allpice);
      app.provide('openpice', openpice);
      app.provide('heighpice', heighpice);
      app.provide('lowpice', lowpice);
      app.provide('endpice', endpice);
      app.provide('symbol', symbol);
    }
  };

createApp(App).use(store).use(dataPlugin).use(router).mount('#app')
axios.defaults.baseURL = '/api'