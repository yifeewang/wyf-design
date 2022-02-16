---
nav:
  title: 组件
  path: /components
group:
  title: Banner
#   path: /components/base
---

## Banner

Demo:

```tsx
import React, {useState, useRef} from 'react';
import { Divider, Banner, Switch, Button } from 'wyf-design';

export default () =>{
  const [autoPlay, setAutoPlay] = useState(true);
  const [loop, setLoop] = useState(true);
  const [dot, setDot] = useState(true);
  const [isH, setisH] = useState(true);
  const childRef = useRef();
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
    const imgConfig ={
        style: {height: '150px'}
    }
    const bannerConfig ={
        style: {height: '150px'}
    }
    return (
        <div>
            <Divider>
                <Switch checked={autoPlay} onChange={(checked) => setAutoPlay(checked)} />
                显示左右换页指示器
            </Divider>
            
            <Divider>
                <Switch checked={loop} onChange={(checked) => setLoop(checked)} />
                循环
            </Divider>
            <Divider>
                <Switch checked={dot} onChange={(checked) => setDot(checked)} />
                显示点分页指示器
            </Divider>
            <Divider>
                <Switch checked={isH} onChange={(checked) => setisH(checked)} />
                水平轮播
            </Divider>
            <Banner 
                loop={loop}
                autoPlay={2000}
                direction={isH ? 'horizontal' : 'vertical'}
                showDots={dot}
                showIndicators={autoPlay}
                bannerInfo={bannerInfo} 
                handleClick={handleClick}
                handleLoad={handleLoad}
                handleChange={handleChange}
                bannerConfig={bannerConfig}
                imgConfig={imgConfig}
                ref={childRef}
            ></Banner>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <Button onClick={() => childRef.current?.onPrev()}>上一页</Button>
                <Button onClick={() => childRef.current?.onNext()}>下一页</Button>
            </div>
        </div>
    )
};
```
## API

| attribute               | desc                       | type                                  | default     | others                                          |
| ------------------ | -------------------------- | ------------------------------------- | ---------- | ----------------------------------------------- |
| `bannerInfo`  | Animation duration(ms)       | `array`   | `[]`      |   |
| `duration`  | Animation duration(ms)       | `number`   | `300`      |   |
| `autoPlay`   | Autoplay interval(ms)       | `number`  | `3000`     |     |
| `selectedIndex` | index of initial swiper, start from 0 | `number` |  `0` | |
| `direction`   | scroll direction          | `string`  | `horizontal | 'vertical`     |     |
| `loop`   | whether to enable loop       | `bool`           | `true`     |  |
| `touchable`   | whether to enable touchable       | `bool`           | `true`     |  |
| `showIndicators`   | whether to enable show indicators  | `bool` | `true` |  |
| `showDots`    | whether to enable show dots           | `bool`     | `true` | |
| `dots`   | bottom dots  | `React.ReactNode`    | `null`    |   |
| `indicator`   | indicator   | `React.ReactNode`    | `null`    |   |
| `style`     | style   |  `React.CSSProperties` | `{}`    |        |
| `className`   | className  | `string`   | `''`       |    |
| `bannerConfig`   | {} className or style  | `object`   | `{className: 'banner'}`       |    |
| `imgConfig`   | {} className or style  | `object`   | `{className: 'imgItem'}`       |    |
| `onChange`  | emitted when currage swipe changed | `(current: number, prev: number): void` | `noop`   |   |


## bannerInfo imgConfig

| attribute  | desc               | type                       |
| ------- | ------------------ | ------ |
| `ideaId` | ideaId     | `string`  |
| `picUrl`    | picUrl |   `string`     |
| `ideaUrl`    | ideaUrl |  `any` |
| `sceneCode`    | sceneCode | `string`|
| `sceneGroupCode`    | sceneGroupCode | `string`|
| `isNotice`    | isNotice | `string`|
## Swipe Methods

| methods  | desc               | argument | desc                       |
| ------- | ------------------ | ------ | ------------------------------ |
| `swipeTo` | swipe to target index     | `index`  | start 0 |
| `prev`    | swipe to prev item |        |                                |
| `next`    | swipe to next item |        |                                |

More skills for writing demo: https://www.bookstack.cn/books/dumi-1.x
