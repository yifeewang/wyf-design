---
nav:
  title: 组件
  path: /components
group:
  title: Space
  path: /components/base
---

## Space

Demo:

```tsx
import React from 'react';
import { Space, Divider, Button } from 'wyf-design';

export default () =>{
    return (
        <div>
            <Divider>水平间距</Divider>
            <Space>
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
            </Space>
            <Divider>换行</Divider>
            <Space wrap>
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
                <Button>按钮4</Button>
                <Button>按钮5</Button>
                <Button>按钮6</Button>
                <Button>按钮7</Button>
                <Button>按钮8</Button>
                <Button>按钮9</Button>
                <Button>按钮10</Button>
                <Button>按钮11</Button>
            </Space>
            <Divider>垂直间距</Divider>
            <Space direction="vertical">
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
            </Space>
            <Divider>自定义间距大小</Divider>
            <Space size={24}>
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
            </Space>
            <Divider>设置拆分</Divider>
            <Space split={<Divider type="vertical" />}>
                Text
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Space>
        </div>
    )
};
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
