// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/index.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(ElementUI);
  Vue.component('Layout', DefaultLayout)
}
