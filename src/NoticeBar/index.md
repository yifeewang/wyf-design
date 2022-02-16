---
nav:
  title: 组件
  path: /components
group:
  title: NoticeBar
#   path: /components/base
---

## NoticeBar

Demo:

```tsx
import React from 'react';
import { NoticeBar, Divider } from 'wyf-design';

const text = `各位请注意，当前文本超出了屏幕宽度，组件会自动开启滚动功能，前后停留时间和滚动速度可以自定义设置`;

export default function App() {
  return (
    <div style={{ padding: 0 }}>
      <Divider>默认</Divider>
      <NoticeBar content={text} />

      <Divider>可关闭</Divider>
      <NoticeBar content={text} closeable />

      <Divider>自定义延迟开始时间,默认2s</Divider>
      <NoticeBar content={text} delay={0} />

      <Divider>自定义icon</Divider>
      <NoticeBar content={text} icon={<div>xx</div>} />

      <Divider>extra配置</Divider>
      <NoticeBar content={text} extra={<div style={{ color: '#111' }}>x bingo</div>} />

      <Divider>自定义</Divider>
      <NoticeBar
        style={{
          backgroundColor: '#00bc8d',
          color: '#fff',
        }}
        delay={100}
        icon={<div>xx</div>}
        content={text}
      />

      <NoticeBar
        speed={100}
        closeable
        style={{ backgroundColor: '#eee', color: '#333', marginTop: 20 }}
        content={text}
      />
    </div>
  );
}
```

## API

| attribute               | desc                       | type                                  | default     | others                                          |
| ------------------ | -------------------------- | ------------------------------------- | ---------- | ----------------------------------------------- |
| `content`  | 公告内容 | `string`   | ``      |   |
| `delay`  | 开始滚动的延迟，单位 ms, 默认2000 | `number`   | `2000`      |   |
| `icon`   | 广播图标  | `ReactNode`  | ``     |     |
| `speed` |滚动速度，单位 px/s, 默认50 | `number` |  `50` | |
| `closeable` |是否可关闭 ，默认false | `boolean` |  `false` | |
| `extra` |额外操作区域，显示在关闭按钮左侧 | `ReactNode` |  `` | |
| `onClose` |关闭时的回调 | `func` |  `` | |


More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
