---
nav:
  title: 组件
  path: /components
group:
  title: Loading
#   path: /components/base
---

## Loading

Demo:

```tsx
import React, {useState} from 'react';
import { Loading, Button, Space } from 'wyf-design';

export default () => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <Space>
                <Button 
                    type="primary" 
                    onClick={() => {
                        Loading.showLoading('hahaha')
                        setTimeout(() => {
                            Loading.hideLoading()
                        }, 2000)
                    }} 
                    loading={loading}>
                    2s 关闭
                </Button>

                <Button 
                    onClick={() => {
                        Loading.showLoading('hahaha')
                        setTimeout(() => {
                            Loading.hideLoading()
                        }, 1000)
                    }} 
                >
                    1s 关闭
                </Button>
            </Space>
        </div>
    )
};
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
