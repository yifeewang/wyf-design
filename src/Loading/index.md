---
nav:
  title: 组件
  path: /components
group:
  title: Loading
---

## Loading

Demo:

```tsx
import React, {useState} from 'react';
import { Loading, Button, Space, Spin } from 'wyf-design';

export default () => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <Space>
                <Button type="primary" onClick={() => setLoading(true)} loading={loading}>
                    700ms后显示 loading
                </Button>

                <Button onClick={() => setLoading(false)}>隐藏loading </Button>
            </Space>
            <Loading wait="1000" visible={loading}>
                <Spin style={{ fontSize: 30, color: '#00bc8d' }} />
            </Loading>
        </div>
    )
};
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
