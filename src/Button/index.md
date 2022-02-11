---
nav:
  title: 组件
  path: /components
group:
  title: Button
---

## Button

Demo:

```tsx
import React from 'react';
import { Button, Divider, Space } from 'wyf-design';

export default () => {
  return (
    <div>
      <Divider>不同类型的按钮</Divider>
      <Space wrap>
        <Button>Default</Button>
        <Button outlined>Outlined</Button>
        <Button type="primary">Primary</Button>
        <Button danger onClick={() => Toast.show('danger')}>
          Danger
        </Button>
      </Space>
      <Divider>块级按钮</Divider>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button block>Block default</Button>
        <Button block type="primary">
          Block primary
        </Button>
        <Button block danger dashed>
          Block danger
        </Button>
      </Space>
      <Divider>加载状态</Divider>
      <Space wrap>
        <Button loading>加载中</Button>
        <Button type="primary" loading>
          加载中
        </Button>
        <Button type="primary" danger loading>
          Loading
        </Button>
      </Space>
      <Divider>带图标的按钮</Divider>
      <Space wrap>
        <Button>
          <Space>
            <img  style={{ width: '15px', height: '15px' }} src="https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp" />
            <span>搜索</span>
          </Space>
        </Button>
        <Button circle style={{background: 'url(https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp)'}}>
        </Button>

        <Button circle type="primary">
          <img  style={{ width: '15px', height: '15px' }} src="https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp" />
        </Button>

        <Button>
          <img  style={{ width: '15px', height: '15px' }} src="https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp" />
        </Button>
      </Space>
      <Divider>按钮形状</Divider>
      <Space wrap>
        <Button>Default Button</Button>
        <Button block style={{ borderRadius: 20 }}>
          Rounded Button
        </Button>
        <Button block style={{ borderRadius: 0 }}>
          Rect Button
        </Button>
        <Button circle>
          <img  style={{ width: '15px', height: '15px' }} src="https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp" />
        </Button>
        <Button type="primary" >Default Button</Button>
        <Button type="primary" style={{ borderRadius: 20 }}>
          Rounded Button
        </Button>
      </Space>
      <Divider>幽灵按钮</Divider>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button block ghost>
          default
        </Button>

        <Button block ghost type="primary">
          primary
        </Button>

        <Button ghost block danger dashed>
          danger dashed
        </Button>
      </Space>
      <Divider>链接按钮</Divider>
      <Space wrap size={16}>
        <Button as="a">Anchor</Button>
        <Button as="a" style={{ color: '#333', textDecoration: 'underline' }}>
          Anchor
        </Button>
        <Button as="a" danger>
          Anchor danger
        </Button>
      </Space>
      <Divider>禁用状态</Divider>
      <Space wrap>
        <Button disabled>Disabled</Button>
        <Button disabled type="primary">
          Disabled
        </Button>

        <Button disabled danger>
          Disabled
        </Button>
      </Space>
      <Divider>"防止重复click</Divider>
      <Divider>禁用状态</Divider>
      <Space wrap>
        <Button
          wait
          onClick={() => {
            console.log(1);
          }}
        >
          1s内点一次
        </Button>

        <Button
          outlined
          wait={2000}
          onClick={() => {
            console.log(2);
          }}
        >
          2s内点一次
        </Button>
      </Space>
    </div>
  );
};
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
