import { defineAppSetup } from '@slidev/types';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue';
import naive from 'naive-ui';

export default defineAppSetup(({ app, router }) => {
  app.use(naive);
  // app.use(Antd);
  app.provide('slidev', [1, 2, 3, 4]);
});
