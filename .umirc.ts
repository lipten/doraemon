import { defineConfig } from 'dumi';

const logo = 'https://github.com/juicecube/doraemon/blob/master/logo.svg';
export default defineConfig({
  title: 'Doraemon',
  description: '项目常用工具函数集合，释放你的 Ctrl C、Ctrl V',
  favicon: logo,
  logo: logo,
  publicPath: '/',
  outputPath: 'docs-dist',
  exportStatic: {}, // 会生成对应的静态html
  hash: true,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/juicecube/doraemon',
    },
  ],
  // more config: https://d.umijs.org/config
});
