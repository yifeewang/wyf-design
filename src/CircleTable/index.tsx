import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import type { SwipeRef } from 'react-tiga-swiper';
import Swiper from 'react-tiga-swiper';
import 'react-tiga-swiper/dist/index.css';
// import '../rem'
type BannerItem = {
  ideaId?: string;
  picUrl?: string;
  ideaUrl?: any;
  sceneCode?: string;
  sceneGroupCode?: string;
  isNotice?: string;
};
type Props = {
  /** banner列表 */
  bannerInfo?: BannerItem[];
  /** 自动轮播间隔时间 */
  autoPlay?: number;
  /** index of initial swiper */
  selectedIndex?: number;
  /** whether to enable show indicators */
  showIndicators?: boolean;
  /** whether to enable show dots */
  showDots?: boolean;
  /** whether to enableloop */
  loop?: boolean;
  /** React.ReactNode */
  indicator?: React.ReactNode;
  /** whether to enable show dots */
  dots?: React.ReactNode;
  /**bannerConfig */
  bannerConfig?: any;
  /**imgConfig */
  imgConfig?: any;
  /** 图片切换回调 */
  handleChange?: (selected: number, prevSelected: number) => any;
  /** 点击回调 */
  handleClick?: (e: React.SyntheticEvent) => void;
  /** onload回调 */
  handleLoad?: (e: React.SyntheticEvent) => void;
};

const StyledBanner = styled.div`
  .middle_banner_swiper {
    width: 100%;
    height: 1.7rem;
    margin: 0 auto 0.2rem;
    .banner {
      position: relative;
      display: block;
      width: 100%;
      height: 1.7rem;
      // margin: 0 auto 0.2rem;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .tiga-dots-wrap {
      background: none;
    }
  }
`;

const CircleTable: any = (props: Props) => {
  const {
    handleClick = () => {},
    handleChange = () => {},
    handleLoad = () => {},
    selectedIndex = 0,
    showIndicators = false,
    autoPlay = 3000,
    loop = true,
    showDots = true,
    indicator = null,
    dots = null,
    bannerInfo = [],
    ...rest
  } = props;
  const swiperRef = useRef<SwipeRef>(null);
  return (
    <StyledBanner>
      <Swiper
        autoPlay={autoPlay}
        selectedIndex={selectedIndex}
        showIndicators={showIndicators}
        showDots={showDots}
        indicator={indicator}
        dots={dots}
        touchable={true}
        loop={loop}
        ref={swiperRef}
        className={`middle_banner_swiper ${rest?.bannerConfig?.className}`}
        onChange={handleChange}
        {...rest?.bannerConfig}
      >
        {bannerInfo.map((item: BannerItem, index: number) => {
          return (
            <img
              key={index.toString()}
              className={`banner ${rest?.imgConfig?.className}`}
              src={item.picUrl}
              data-url={item.ideaUrl && item.ideaUrl.viewUrl}
              data-index={index}
              data-ideaid={item.ideaId}
              data-code={item.sceneCode}
              data-viewurl={item.ideaUrl?.viewUrl}
              data-codes={item.sceneGroupCode}
              data-isnotice={item.isNotice}
              data-type="banner"
              onClick={handleClick}
              onLoad={handleLoad}
              {...rest?.imgConfig}
            />
          );
        })}
      </Swiper>
    </StyledBanner>
  );
};

export default CircleTable;
