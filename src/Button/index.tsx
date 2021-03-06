import type { HTMLAttributes } from 'react';
import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from '../vars';
import { isMobile } from '../dom';
import { getThemeColorCss } from '../themeHelper';
import Spin from '../Spin';
import Space from '../Space';

type Props = {
  /** default 线框，primary 实色框 */
  type?: 'primary' | 'default';
  active?: boolean;
  /** 主题色线框风格 */
  outlined?: boolean;
  /** 禁用 */
  disabled?: boolean;
  style?: React.CSSProperties;
  /** 块级按钮 */
  block?: boolean;
  children?: React.ReactNode;
  className?: string;
  /** 圆形按钮 */
  circle?: boolean;
  /** 虚线边 */
  dashed?: boolean;
  /** 设置危险按钮 */
  danger?: boolean;
  /** 设置为展示的标签，比如div,a,button */
  as?: any;
  /** 设置按钮的图标组件 */
  icon?: React.ReactNode;
  /** 设置按钮加载状态 */
  loading?: boolean;
  /** 是否幽灵按钮 */
  ghost?: boolean;
  htmlType?: 'submit' | 'reset' | 'button' | undefined;
  /** 点击回调 */
  onClick?: (e: React.SyntheticEvent) => void;
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>;

const StyledButton = styled.button`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  appearance: none;
  -webkit-tap-highlight-color: transparent;

  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid transparent;
  height: 32px;

  &.default {
    background-color: #fff;
    border-color: ${vars.border};

    ${isMobile ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }
    &.pc:hover,
    &.outlined {
      ${getThemeColorCss('border-color')}
      ${getThemeColorCss('color')}
    }

    &.mobile:active {
      background-color: ${vars.activeBg};
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      color: ${vars.danger};
      border-color: ${vars.danger};
    }
  }
  &.primary {
    ${getThemeColorCss('background-color')}
    ${getThemeColorCss('border-color')}
    color: #fff;

    ${isMobile ? '&:active' : '&:hover'} {
      opacity: 0.8;
    }

    &.ghost,
    &.ghost:hover,
    &.ghost:active {
      background-color: transparent !important;
      ${getThemeColorCss('border-color')}
      ${getThemeColorCss('color')}

      &.danger {
        color: ${vars.danger};
      }
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      background-color: ${vars.danger};
      border-color: ${vars.danger};
    }
  }
  &.block {
    width: 100%;
  }
  &.circle {
    min-width: 32px;
    padding: 0;
    border-radius: 50%;
  }
  &.dashed {
    border-style: dashed;
  }

  &.anchor {
    margin: unset;
    padding: unset;
    background: unset;
    border: none;
    ${getThemeColorCss('color')}
    height: unset;
  }

  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }
  &.ghost,
  &.ghost:hover {
    color: ${vars.border};
    background-color: transparent;
    border-color: ${vars.border};
  }
`;

/** 按钮 */
const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    type = 'default',
    disabled,
    active,
    outlined,
    block,
    className,
    children,
    htmlType,
    circle,
    dashed,
    danger,
    loading,
    ghost,
    onClick,
    ...rest
  } = props;

  const [waiting] = useState(false);

  const icon = props.icon || (loading ? <Spin /> : null);

  return (
    <StyledButton
      {...rest}
      ref={ref}
      disabled={disabled}
      type={htmlType}
      onClick={(e: any) => {
        onClick?.(e);
      }}
      className={clsx(
        'uc-btn',
        'uc-button',
        type,
        {
          disabled: disabled || loading || waiting,
          block: block,
          circle: circle,
          dashed: dashed,
          ghost: ghost,
          danger: danger,
          mobile: isMobile,
          pc: !isMobile,
          anchor: rest.as === 'a',
          outlined: outlined || active,
        },
        className,
      )}
    >
      <Space>
        {icon}
        {children}
      </Space>
    </StyledButton>
  );
});

Button.displayName = 'UC-Button';

export default Button;
