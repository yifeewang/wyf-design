---
nav:
  title: 组件
  path: /components
group:
  title: Banner
  path: /components/base
---

## Banner

Demo:

```tsx
import React from 'react';
import { Divider, Banner } from 'wyf-design';

export default () =>{
    const bannerInfo = [
        {
            ideaId: '111111',
            picUrl: 'https://t7.baidu.com/it/u=1811223786,2017754440&fm=193&f=GIF',
            ideaUrl: {viewUrl: 'www.baidu.com'},
            sceneCode: '111111',
            sceneGroupCode: '111111',
            isNotice: 0,
        },
        {
            ideaId: '22222',
            picUrl: 'https://t7.baidu.com/it/u=2488490742,1686455852&fm=193&f=GIF',
            ideaUrl: {viewUrl: 'www.baidu.com'},
            sceneCode: '22222',
            sceneGroupCode: '22222',
            isNotice: 0,
        },
        {
            ideaId: '33333',
            picUrl: 'https://t7.baidu.com/it/u=2783075563,3362558456&fm=193&f=GIF',
            ideaUrl: {viewUrl: 'www.baidu.com'},
            sceneCode: '33333',
            sceneGroupCode: '33333',
            isNotice: 0,
        }
    ]
    const handleClick = (e) => {
        const ideaId = e.currentTarget.getAttribute('data-ideaId');
        const sceneCode = e.currentTarget.getAttribute('data-sceneCode');
        console.log('handleClick', e.currentTarget, ideaId, sceneCode)
    }
    const handleLoad = (e) => {
        const ideaId = e.currentTarget.getAttribute('data-ideaId');
        const sceneCode = e.currentTarget.getAttribute('data-sceneCode');
        console.log('handleLoad', e.currentTarget, ideaId, sceneCode)
    }
    const handleChange = (selected, prevSelected) => {
        console.log('handleChange', selected,prevSelected)
    }
    return (
        <div>
            <Divider>默认</Divider>
            <Banner 
                bannerInfo={bannerInfo} 
                handleClick={handleClick}
                handleLoad={handleLoad}
                handleChange={handleChange}
            ></Banner>
        </div>
    )
};
```

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
