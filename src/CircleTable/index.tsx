import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-tiga-swiper/dist/index.css';
import { getAngleRange } from './utils';

type prize = {
  img?: string;
  name?: string;
  index?: number | string;
};
type Props = {
  /** 转盘图片链接 */
  tableSrc?: string;
  /** 指针图片链接 */
  pointerSrc?: string;
  /** 奖品列表 */
  prizeList?: prize[];
  /** 中奖奖品名称, 必须对应于prizeList的index */
  prizeIndex?: string;
  /** 中奖回调 */
  onFinish?: (prizeItem: prize) => {};
  /** 开始抽奖 */
  onStart?: () => {};
};

const StyledBanner = styled.div<{ tableSrc: string; pointerSrc: string }>`
  .wraper {
    position: relative;
    display: flex;
    width: 300px;
    height: 300px;
  }
  .turntable {
    width: 300px;
    height: 300px;
    margin-top: 0.05rem;
    background: url('${(props) => props.tableSrc}') no-repeat;
    background-size: 100%;
  }
  .pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 70px;
    height: 70px;
    background: url('${(props) => props.pointerSrc}') no-repeat;
    background-size: 100%;
    transform: translate(-50%, -50%);
  }
`;

const CircleTable: any = (props: Props) => {
  const {
    tableSrc = 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_cake.webp',
    pointerSrc = 'https://ctopmweb-cdn.iyoudui.com/myx_draw/hzreq-15/table_draw_btn.webp',
    prizeList = [],
    prizeIndex = 0,
    onFinish = () => {},
    onStart = () => {},
    ...rest
  } = props;
  const [startRotateDeg, setRotateDeg] = useState<any>(0);

  const handleClick = () => {
    onStart();
    // 取奖品列表每个奖品对应的角度
    const LOTTERY_AREA_DEG = getAngleRange(prizeList.length);
    // 取对应奖品角度
    const targetDegree = LOTTERY_AREA_DEG[Number(prizeIndex)];

    let rotateDeg = 0;
    // 递归计算下次要转到的度数
    let i = 0;
    const _fn = (n = 0) => {
      if (targetDegree + 360 * n > startRotateDeg) {
        rotateDeg = targetDegree + 360 * n;
      } else {
        i++;
        _fn(i);
      }
    };
    _fn();
    // 获取转盘实例
    const ele: any = document.getElementById('turntable');
    // 增加旋转动画
    ele.style.transition = 'all 3000ms';
    ele.style.transform = `rotate(${rotateDeg + 360 * 3}deg)`; // 乘以10是为了转盘转动的效果
    setRotateDeg(rotateDeg + 360 * 3); // 记录上一次旋转到的角度

    onFinish(prizeList[Number(prizeIndex)]);
  };
  return (
    <StyledBanner tableSrc={tableSrc} pointerSrc={pointerSrc}>
      <div className="wraper" {...rest}>
        {/* 转盘 */}
        <div className="turntable" id="turntable" />
        {/* 指针 */}
        <div className="pointer" onClick={handleClick} />
      </div>
    </StyledBanner>
  );
};

export default CircleTable;
