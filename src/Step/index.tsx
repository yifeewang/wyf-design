import React, { useLayoutEffect, useRef, useImperativeHandle, useState } from 'react';
import StyledSteps from './less';
import clsx from 'clsx';
import type { Props } from './interface';
import { throttle } from '../utils';

/** 步骤条 */
const Steps = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    current = 0,
    dotStyle = false,
    className,
    direction = 'horizontal',
    steps = [],
    ...rest
  } = props;

  const domRef: any = useRef<HTMLDivElement>();
  useImperativeHandle(ref, () => domRef.current);
  const [space, setSpace] = useState(80);

  useLayoutEffect(() => {
    const isHorizontal = direction === 'horizontal';
    const resizeHandler = () => {
      if (steps.length > 1) {
        const domEl = domRef.current;
        setSpace(
          Math.max((isHorizontal ? domEl.offsetWidth : domEl.offsetHeight) / steps.length, 60),
        );
      }
    };

    const throttleResizeHandler = throttle(resizeHandler);

    if (isHorizontal) {
      window.addEventListener('resize', throttleResizeHandler);
    }
    resizeHandler();

    return () => {
      if (isHorizontal) {
        window.removeEventListener('resize', throttleResizeHandler);
      }
    };
  }, [steps, direction]);

  return (
    <StyledSteps {...rest} ref={domRef} className={clsx(className, direction)} space={space}>
      {steps.map((item, idx) => (
        <div
          key={idx}
          className={clsx('step', { finish: idx < current, current: idx === current })}
        >
          <div className="step-box">
            <div className={clsx(`step-circle`, { dot: dotStyle && !item.icon, icon: item.icon })}>
              {/* icon */}
              {item.icon ? item.icon : dotStyle ? null : idx + 1}
              {/* 步骤任务礼品 */}
              {item.giftType ? (
                <img
                  className="step-gift"
                  src={item.giftType === 'active' ? item.giftActiveSrc : item.giftNotActiveSrc}
                  onClick={() => {
                    item.callBack(item);
                  }}
                 />
              ) : (
                ''
              )}
            </div>
          </div>
          {/* 内容区 */}
          <div className="step-content">
            <div className="step-title">{item.title}</div>
            {!!item.description && <div className="step-description">{item.description}</div>}
          </div>
        </div>
      ))}
    </StyledSteps>
  );
});
// Steps.displayName = 'UC-Steps';

export default Steps;
