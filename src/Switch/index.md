---
nav:
  title: 组件
  path: /components
group:
  title: Switch
#   path: /components/base
---

## Switch

Demo:

```tsx
import React, { useState } from 'react';
import { Space, Switch } from 'wyf-design';

export default function App() {
  const [c, setC] = useState(false);

  return (
    <div>
        <Space size={16} wrap>
          <Space>
            <Switch checked={c} onChange={(c) => setC(c)} />
            {c ? 'checked' : 'unchecked'}
          </Space>

          <Switch checked />

          <Space>
            <Switch defaultChecked /> 默认打开
          </Space>

          <Space>
            <Switch disabled defaultChecked /> 禁用
          </Space>

          <Space>
            <Switch disabled /> 禁用
          </Space>
        </Space>
    </div>
  );
}
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x