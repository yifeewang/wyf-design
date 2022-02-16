---
nav:
  title: 组件
  path: /components
group:
  title: Divider
#   path: /components/base
---

## Divider

Demo:

```tsx
import React from 'react';
import { Divider } from 'wyf-design';

export default () =>{
    return (
        <div style={{fontSize: '16px'}}>
            <div>基础分割线:</div>
            <Divider />
            <div>带内容的分割线:</div>
            <Divider>默认内容在中间</Divider>
            <Divider textPosition="left">左侧内容</Divider>
            <Divider textPosition="right">右侧内容</Divider>
            <div>自定义样式:</div>
            <Divider 
                dashed 
                color="#1677ff" 
                style={{ color: 'red', fontSize: 20 }}
            >
                自定义样式
            </Divider>
            <div>垂直分隔线:</div>
            Text
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" color="red" style={{ margin: '0 20px' }} />
            <a href="#">Link</a>
        </div>
    )
};
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
