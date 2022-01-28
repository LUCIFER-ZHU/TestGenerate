import Router from '@/router';
import Antd from 'ant-design-vue';
import { Interceptors } from '@core';
import 'font-awesome/css/font-awesome.min.css';
import 'ant-design-vue/dist/antd.css';
import '@/style/index.scss';
import App from './App.vue';
import directives from '@/directives/directives';

// 挂载拦截器
Interceptors.getInstance();
createApp(App).use(Router).use(Antd).use(directives).mount('#app')
