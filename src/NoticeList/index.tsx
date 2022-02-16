import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Space from '../Space';

const StyledNoticeList = styled.div`
  font-size: 14px;
  padding: 0px 12px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(236, 146, 49, 0.1);
  color: rgb(236, 146, 49);

  &.hide {
    display: none;
  }

  .icon-part {
    flex-shrink: 0;
    margin-right: 8px;
  }

  .content-wrap {
    flex: 1 1;
    height: 100%;
    overflow: hidden;

    .list {
      height: 100%;
      transition-timing-function: ease-in-out;
      transition-duration: 0.8s;
      transition-property: transform;
      .item {
        display: flex;
        align-items: center;
        height: 100%;
      }
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

export type Notice = {
  /** 公告内容 */
  text: React.ReactNode;
  /** 链接 */
  link?: string;
};

type Props = {
  /** 公告内容 */
  list: Notice[];
  /** 一条公告展示时间，默认3000ms */
  stayTime?: number;
  /** 广播图标, 可以使用 SoundOutlined @ant-design/icons */
  icon?: React.ReactNode;
  /** 是否可关闭 ，默认false*/
  closeable?: boolean;
  /**额外操作区域，显示在关闭按钮左侧 */
  extra?: React.ReactNode;
  /** 关闭时的回调 */
  onClose?: () => void;
} & HTMLAttributes<HTMLDivElement>;

/** 多条信息垂直滚动通知栏  */
const NoticeList = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const {
    list = [],
    stayTime = 3000,
    icon,
    closeable = false,
    className,
    onClose,
    extra,
    ...rest
  } = props;
  const listRef: any = useRef<HTMLDivElement>();
  const wrapRef = useRef<HTMLDivElement>();
  const timerRef = useRef<number>();
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState(list);

  useEffect(() => {
    setData(list);
  }, [list]);

  useEffect(() => {
    const wrap: any = wrapRef.current;
    const lists: any = listRef.current;

    if (data.length > 1 && visible) {
      timerRef.current = window.setTimeout(() => {
        lists.style.transitionProperty = 'transform';
        lists.style.transform = `translateY(-${wrap.offsetHeight}px)`;
      }, stayTime);
      return () => {
        window.clearTimeout(timerRef.current);
      };
    }
  }, [stayTime, data, visible]);

  return (
    <StyledNoticeList
      {...rest}
      ref={ref}
      className={clsx(className, 'uc-noticelist', { hide: !visible })}
    >
      {icon && <div className="icon-part">{icon}</div>}
      <div className="content-wrap" ref={wrapRef as any}>
        <div
          className="list"
          ref={listRef}
          onTransitionEnd={() => {
            // move
            listRef.current.style.transitionProperty = 'none';
            listRef.current.style.transform = 'none';
            const lIndex = data.length - 1;
            if (lIndex > 0) {
              data.push(data[0]);
              data.shift();
              setData([...data]);
            }
          }}
        >
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  if (item.link) {
                    location.href = item.link;
                  }
                }}
                className={clsx('item')}
              >
                <div>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      {(closeable || extra) && (
        <div className={clsx('content-extra')}>
          <Space>
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
          </Space>
        </div>
      )}
    </StyledNoticeList>
  );
});

NoticeList.displayName = 'UC-NoticeList';

export default NoticeList;
