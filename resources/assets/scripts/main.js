// import external dependencies
import Vue from 'vue';
import 'jquery';
import 'axios';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());

Vue.component('example', require('./vue/Example.vue').default);

new Vue({
  el: '#app',
});
