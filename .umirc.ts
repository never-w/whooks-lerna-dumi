import { defineConfig } from 'dumi'
import type WebpackChain from 'webpack-chain'

export default defineConfig({
  chainWebpack(memo: WebpackChain) {
    memo.plugins.delete('copy')
  },
  title: 'whooks',
  favicon: 'https://avatars.githubusercontent.com/u/80503467?v=4',
  logo: 'https://avatars.githubusercontent.com/u/80503467?v=4',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@': './src',
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/never-w/w-hooks.git',
    },
    { title: '帮助', path: 'https://www.baidu.com' },
  ],
  styles: ['https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.3/antd.min.css'],
  locales: [['zh-CN', '中文']],
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
})
