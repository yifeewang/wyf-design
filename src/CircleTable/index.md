---
nav:
  title: 组件
  path: /components
group:
  title: CircleTable(大转盘)
#   path: /components/base
---

## CircleTable

Demo:

```tsx
import React, {useState, useRef} from 'react';
import { CircleTable } from 'wyf-design';

export default () =>{
    const prizeList = [
        {
            name: '111111',
            img: 'https://t7.baidu.com/it/u=1811223786,2017754440&fm=193&f=GIF',
            index: 0
        },
        {
            name: '22222',
            img: 'https://t7.baidu.com/it/u=2488490742,1686455852&fm=193&f=GIF',
            index: 1,
        },
        {
            name: '33333',
            img: 'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
            index: 2,
        },
        {
            name: '44444',
            img: 'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
            index: 3,
        },
        {
            name: '55555',
            img: 'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
            index: 4,
        },
        {
            name: '66666',
            img: 'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
            index: 5,
        }
    ]
    return (
        <div>
            <CircleTable 
                prizeList={prizeList}
                prizeIndex={1}
                onFinish={(prize)=>{console.log('onFinish', prize)}}
            ></CircleTable>
        </div>
    )
};
```
## API

| attribute               | desc                       | type                                  | default     | others                                          |
| ------------------ | -------------------------- | ------------------------------------- | ---------- | ----------------------------------------------- |
| `tableSrc`  | 转盘图片链接 | `string`   | ``      |   |
| `pointerSrc`  | 指针图片链接| `string`   | ``      |   |
| `prizeList`   | 奖品列表 | `array`  | `[]`     |     |
| `prizeIndex` |中奖奖品下标, 必须对应于prizeList的index | `number` |  `0` | |
| `onFinish` |中奖回调 | `func` |  `(prizeItem)=>{}` | |


## prizeList item

| attribute  | desc               | type                       |
| ------- | ------------------ | ------ |
| `img` | 奖品图片链接     | `string`  |
| `name`    | 奖品名称 |   `string`     |
| `index`    | 奖品下标 |  `any` |



More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
