---
nav:
  title: 组件
  path: /components
group:
  title: Slide
#   path: /components/base
---

## Slide

Demo:

```tsx
import React, { useState, useRef } from 'react';
import { Slide, Switch, Button, Divider } from 'wyf-design';

export default function App() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [loop, setLoop] = useState(true);
  const [dot, setDot] = useState(true);
  const [isH, setisH] = useState(true);
  const ref = useRef();
  const images = [
    'https://t7.baidu.com/it/u=1811223786,2017754440&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2466425392,342874463&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2488490742,1686455852&fm=193&f=GIF',
  ];
  
  return (
    <div style={{ padding: 0 }}>
        <Divider>自动轮播</Divider>
        <Switch checked={autoPlay} onChange={(checked) => setAutoPlay(checked)} />
        <Divider>循环</Divider>
        <Switch checked={loop} onChange={(checked) => setLoop(checked)} />
        <Divider>显示分页指示器</Divider>
        <Switch checked={dot} onChange={(checked) => setDot(checked)} />
        <Divider>水平轮播</Divider>
        <Switch checked={isH} onChange={(checked) => setisH(checked)} />
        <Slide
          ref={ref}
          loop={loop}
          autoPlay={autoPlay}
          direction={isH ? 'horizontal' : 'vertical'}
          showPageIndicator={dot}
          onPageChange={(pageIndex) => console.log('pageindex:' + pageIndex)}
          interval={2000}
        >
          {images.map((item) => (
            <img src={item} key={item} />
          ))}
        </Slide>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          <Button onClick={() => ref.current.prev()}>上一页</Button>
          <Button onClick={() => ref.current.next()}>下一页</Button>
        </div>
        <Divider>垂直</Divider>
        <Slide style={{ marginTop: 30 }} interval={1000} autoPlay direction="vertical">
          {images.map((item) => (
            <img src={item} key={item} />
          ))}
        </Slide>
    </div>
  );
}
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
