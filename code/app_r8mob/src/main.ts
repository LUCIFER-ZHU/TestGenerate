import 'font-awesome/css/font-awesome.min.css'
import Router from '@/router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/style/index.scss'
import App from './App.vue'

createApp(App).use(Router).use(Antd).mount('#app')
