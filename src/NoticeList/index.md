---
nav:
  title: 组件
  path: /components
group:
  title: NoticeList
  path: /components/base
---

## NoticeList

Demo:

```tsx
import React from 'react';
import { NoticeList, Divider } from 'wyf-design';

const list: Notice[] = [
  { text: '消息通知1' },
  { text: '消息通知2' },
  { text: '消息通知3' },
  { text: '消息通知4' },
  { text: '消息通知5' },
];

export default function App() {
  return (
    <div style={{ padding: 0 }}>
      <Divider>默认</Divider>
      <NoticeList list={list} />

      <Divider>可关闭</Divider>
       <NoticeList closeable list={list} />

      <Divider>带icon</Divider>
      <NoticeList icon={<div>xx</div>} list={list} />

      <Divider>extra配置</Divider>
      <NoticeList list={list} extra={<div style={{ color: '#111' }}>x bingo</div>} />

      <Divider>自定义</Divider>
      <NoticeList
        style={{
          backgroundColor: '#00bc8d',
          color: '#fff',
        }}
        stayTime={1000}
        icon={<div>xx</div>}
        list={list}
      />

      <NoticeList
        speed={1000}
        closeable
        style={{ backgroundColor: '#eee', color: '#333', marginTop: 20 }}
        list={list}
      />
    </div>
  );
}
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
