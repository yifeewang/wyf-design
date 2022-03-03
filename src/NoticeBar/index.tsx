import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import React, { useRef, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';

const StyledNoticeBar = styled.div`
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(236, 146, 49, 0.1);
  color: rgb(236, 146, 49);
  overflow: hidden;

  &.hide {
    display: none;
  }

  .icon-part {
    display: flex;
    flex-shrink: 0;
    margin-right: 8px;
  }

  .content-wrap {
    display: flex;
    flex: 1 1;
    align-items: center;
    height: 100%;
    overflow: hidden;

    .content-text {
      flex: 1;
      white-space: nowrap;
      transition-timing-function: linear;
      transition-property: transform;
    }
  }
  .content-extra {
    display: inline-block;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
  }
  .uc-closeable {
    display: flex;
    align-items: center;
    justify-content: center;
    width: '100%';
    height: '100%';
  }
  .uc-icon {
    width: 20px;
    height: 20px;
  }
`;

type Props = {
  /** 公告内容 */
  content: string;
  /** 开始滚动的延迟，单位 ms, 默认2000 */
  delay?: number;
  /** 广播图标, 可以使用 SoundOutlined @ant-design/icons */
  icon?: React.ReactNode;
  /** 滚动速度，单位 px/s, 默认50 */
  speed?: number;
  /** 是否可关闭 ，默认false*/
  closeable?: boolean;
  /**额外操作区域，显示在关闭按钮左侧 */
  extra?: React.ReactNode;
  /** 关闭时的回调 */
  onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;

/** 通告栏  */
const NoticeBar = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const {
    content,
    delay = 2000,
    icon = (
      <img
        className="uc-icon"
        src="https://mdn.alipayobjects.com/merchant_appfe/afts/img/A*03Z4Q6GdvLcAAAAAAAAAAAAADiR2AQ/.png"
      />
    ),
    speed = 50,
    closeable = false,
    className,
    onClose,
    extra,
    ...rest
  } = props;
  const wrapRef = useRef<HTMLDivElement>();
  const contentRef = useRef<HTMLDivElement>();
  const [v, setV] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useLayoutEffect(() => {
    const container: any = wrapRef.current;
    const text: any = contentRef.current;

    if (container.offsetWidth >= text.offsetWidth) return;
    const timeout = window.setTimeout(() => {
      text.style.transitionDuration = `${Math.round(text.offsetWidth / speed)}s`;
      text.style.transform = `translateX(-${text.offsetWidth}px)`;
    }, delay);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [delay, speed]);

  useLayoutEffect(() => {
    const container: any = wrapRef.current;
    const text: any = contentRef.current;
    if (container.offsetWidth >= text.offsetWidth || v === 0) {
      return;
    }
    text.style.transform = `translateX(${container.offsetWidth}px)`;
    text.style.transitionDuration = `${Math.round(
      (container.offsetWidth + text.offsetWidth) / speed,
    )}s`;
    text.style.transform = `translateX(-${text.offsetWidth}px)`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v]);

  return (
    <StyledNoticeBar
      {...rest}
      ref={ref}
      className={clsx(className, 'uc-noticebar', { hide: !visible })}
    >
      {icon && <div className="icon-part">{icon}</div>}
      <div className="content-wrap" ref={wrapRef as any}>
        <div
          className="content-text"
          key={v}
          onTransitionEnd={() => {
            setV((v) => v + 1);
          }}
          ref={contentRef as any}
        >
          {content}
        </div>
      </div>
      {(closeable || extra) && (
        <div className={clsx('content-extra')}>
          <div>
            {props.extra}
            {props.closeable && (
              <div className="uc-closeable">
                <img
                  src="https://mdn.alipayobjects.com/merchant_appfe/afts/img/A*pHJpTpPIeWEAAAAAAAAAAAAADiR2AQ/.png"
                  className="uc-icon"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setVisible(false);
                    onClose?.();
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </StyledNoticeBar>
  );
});

NoticeBar.displayName = 'UC-NoticeBar';

export default NoticeBar;
