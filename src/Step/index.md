---
nav:
  title: 组件
  path: /components
group:
  title: Step
  path: /components/base
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
                    height: '0.2rem', 
                    fontSize:' 0.16rem',
                    textAlign:'center',
                    lineHeight: '0.2rem',
                    cursor: 'pointer',
                    marginTop: '0.2rem'
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

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
