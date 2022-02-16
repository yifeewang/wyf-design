---
nav:
  title: 组件
  path: /components
group:
  title: Step
#   path: /components/base
---

## Step

Demo:

```tsx
import React, {useState} from 'react';
import { Step, Divider } from 'wyf-design';


export default () => {
    const [index, setIndex] = useState(0);
    const [giftType, setType] = useState('active');

    let steps = [
        { title: '步骤1' },
        { 
            title: '步骤2', 
            giftType,  
            giftActiveSrc: 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp',
            giftNotActiveSrc: 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_gift_inActive.webp',
            callBack: (item) => {
                if(item.giftType === 'active') {
                    window.alert('恭喜您获取红包')
                    setType('notActive')
                }
                else {
                    window.alert('您已经获取红包')
                    setType('active')
                }
            }
        },
        { 
            title: '步骤3', 
            giftType: 'notActive',  
            giftActiveSrc: 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp',
            giftNotActiveSrc: 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_gift_inActive.webp',
            callBack: (item) => {
                if(item.giftType === 'active') {
                    window.alert('恭喜您获取红包')
                    setType('notActive')
                }
                else {
                    window.alert('您已经获取红包')
                    setType('active')
                }
            }
        },
        { title: '步骤4' },
    ];

    const steps1 = [
        { title: '步骤1' },
        { 
            title: '步骤2'
        },
        { title: '步骤3'},
        { title: '步骤4' },
    ];

    let steps3 = [
        { title: '1' },
        { 
            title: '2', 
            giftType,  
            giftActiveSrc: 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp',
            giftNotActiveSrc: 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_gift_inActive.webp',
            callBack: (item) => {
                if(item.giftType === 'active') {
                    window.alert('恭喜您获取红包')
                    setType('notActive')
                }
                else {
                    window.alert('您已经获取红包')
                    setType('active')
                }
            }
        },
        { 
            title: '3', 
            giftType: 'notActive',  
            giftActiveSrc: 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_redbag_active.webp',
            giftNotActiveSrc: 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_gift_inActive.webp',
            callBack: (item) => {
                if(item.giftType === 'active') {
                    window.alert('恭喜您获取红包')
                    setType('notActive')
                }
                else {
                    window.alert('您已经获取红包')
                    setType('active')
                }
            }
        },
        { title: '4' },
    ];
    return (
        <div>
            <Divider>横向进度条</Divider>
            <Step 
                direction="horizontal" 
                current={index} 
                steps={steps}
            ></Step>
            <Step
                direction="horizontal"
                dotStyle={true}
                current={index}
                steps={steps1}
                style={{ marginTop: 16 }}
            ></Step>
            <Divider>纵向进度条</Divider>
            <Step
                direction="vertical"
                current={index}
                steps={[
                { title: '步骤1', description: 'This is a description.' },
                { title: '步骤2' },
                {
                    title: '步骤3',
                    description: 'This is a description.'
                },
                { title: '步骤4' },
                ]}
            ></Step>
            <Divider>动态进度条</Divider>
            <Step 
                direction="horizontal" 
                current={index} 
                steps={steps3}
                type='special'
            ></Step>
            <div
                style={{
                    width: '100%', 
                    height: '20px', 
                    fontSize:' 16px',
                    textAlign:'center',
                    lineHeight: '20px',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}
                onClick={() => {
                    setIndex((i) => {
                        if (i + 1 <= 3) {
                        return i + 1;
                        } else {
                        return 0;
                        }
                    });
                }}
            >
                下一步
            </div>
        </div>
    )
};
```
## API

| attribute               | desc                       | type                                  | default     | others                                          |
| ------------------ | -------------------------- | ------------------------------------- | ---------- | ----------------------------------------------- |
| `steps`  | 步骤数据 | `Step[]`   | `[]`      |   |
| `type`  | 'normal' || 'special' 表示普通进度条 和 动态进度条 | `string`   | `normal`      |   |
| `current`   | 指定当前步骤，从 0 开始记数  | `number`  | `0`     |     |
| `className` |class | `string` |  `` | |
| `style` |style | `obj` |  `{}` | |
| `direction` |指定步骤条方向  'horizontal' | 'vertical' | `obj` |  `horizontal` | |
| `dotStyle` |实心圈风格 | `boolean` |  `false` | |


## Step

| attribute  | desc               | type                       |
| ------- | ------------------ | ------ |
| `title` | 标题     | `string`  |
| `description` | 步骤的详情描述 |   `string`     |
| `icon`    | 奖品下标 |  `React.ReactNode` |
| `giftType`| 步骤奖品 有两种状态 'active' 'notActive' |  `string` |
| `giftActiveSrc`    | 高亮状态图片链接 |  `string` |
| `giftNotActiveSrc`    | 非高亮状态图片链接 |  `string` |
| `callBack`    | 步骤奖品点击回调 |  `func` |


More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
