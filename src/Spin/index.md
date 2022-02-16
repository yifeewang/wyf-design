---
nav:
  title: 组件
  path: /components
group:
  title: Spin
#   path: /components/base
---

## Spin

Demo:

```tsx
import React, {useState} from 'react';
import { Spin, Divider, Space, Button } from 'wyf-design';

export default () =>{
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <Divider>默认</Divider>
            <Space wrap>
                <Spin 
                    style={{ 
                        color: 'red', fontSize: 30, margin: '0 20px' 
                    }}
                ></Spin>
                <Spin style={{ fontSize: 32 }}></Spin>
                <Spin />
                文本XXX
                <Spin style={{ color: 'red', fontSize: 48 }}></Spin>
                <Spin style={{ color: '#005cff' }}></Spin>
                <Spin style={{ color: '#005cff', fontSize: 48 }}></Spin>
            </Space>
            <Divider>延迟显示</Divider>
            <Space wrap>
                等700ms显示
                <Spin 
                    style={{ color: '#005cff', fontSize: 30 }} wait
                >
                </Spin>
                等1.5s显示
                <Spin 
                    style={{ color: '#005cff', fontSize: 30 }} 
                    wait={1500}
                >
                </Spin>
            </Space>
            <Divider>根据条件延迟显示 (防闪烁)</Divider>
            <Space>
                <Button 
                    type="primary" 
                    onClick={() => setLoading(true)} 
                    loading={loading}
                >
                    显示
                </Button>
                <Button onClick={() => setLoading(false)}>隐藏 </Button>
            </Space>

            <div style={{ marginTop: 24 }}>
                <Space wrap>
                    等700ms显示
                    <Spin 
                        wait 
                        loading={loading} 
                        style={{ color: '#005cff', fontSize: 30 }}
                    ></Spin>
                    等1.5s显示
                    <Spin 
                        wait={1500} 
                        loading={loading} 
                        style={{ color: '#005cff', fontSize: 30 }}
                    ></Spin>
                </Space>
            </div>
        </div>
    )
};
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
