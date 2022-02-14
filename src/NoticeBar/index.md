---
nav:
  title: 组件
  path: /components
group:
  title: NoticeBar
  path: /components/base
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

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
