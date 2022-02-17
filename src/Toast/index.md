---
nav:
  title: 组件
  path: /components
group:
  title: Toast
#   path: /components/base
---

## Toast

Demo:

```tsx
import React, {useState} from 'react';
import { Toast, Button, Space } from 'wyf-design';

export default () => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <Space>
                <Button 
                    type="primary" 
                    onClick={() => Toast.showToast('hahaha', 2000)} 
                    loading={loading}>
                    持续2s
                </Button>

                <Button 
                    onClick={() => Toast.showToast('hahaha', 1000)}
                >
                    持续1s 
                </Button>
            </Space>
        </div>
    )
};
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
