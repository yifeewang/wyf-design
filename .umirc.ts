import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'wyf-design',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  publicPath: '/wyf-design.github.io/',
  mode: 'site',
  menus: {
    '/components': [
        {
            title: '基础组件',
            path: 'base',
            children: [
              // 菜单子项（可选）
              'Alert/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
              'Button/index.md', 
              'Divider/index.md', 
              'Loading/index.md', 
              'Space/index.md', 
              'Spin/index.md', 
            ],
        },
        {
            title: '高级组件',
            path: 'difficult',
            children: [
              // 菜单子项（可选）
              'Step/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
            ],
        },
    ],
  }
  // more config: https://d.umijs.org/config
});
