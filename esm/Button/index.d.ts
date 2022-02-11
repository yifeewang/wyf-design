import type { HTMLAttributes } from 'react';
import React from 'react';
/** 按钮 */
declare const Button: React.ForwardRefExoticComponent<{
    /** default 线框，primary 实色框 */
    type?: "default" | "primary" | undefined;
    active?: boolean | undefined;
    /** 主题色线框风格 */
    outlined?: boolean | undefined;
    /** 禁用 */
    disabled?: boolean | undefined;
    style?: React.CSSProperties | undefined;
    /** 块级按钮 */
    block?: boolean | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    /** 圆形按钮 */
    circle?: boolean | undefined;
    /** 虚线边 */
    dashed?: boolean | undefined;
    /** 设置危险按钮 */
    danger?: boolean | undefined;
    /** 设置为展示的标签，比如div,a,button */
    as?: any;
    /** 设置按钮的图标组件 */
    icon?: React.ReactNode;
    /** 设置按钮加载状态 */
    loading?: boolean | undefined;
    /** 是否幽灵按钮 */
    ghost?: boolean | undefined;
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
    /** 点击回调 */
    onClick?: ((e: React.SyntheticEvent) => void) | undefined;
    /** 点击后，下次能点击的时间间隔，防止重复点击, 如果是true, 间隔默认是1s  */
    wait?: number | boolean | undefined;
} & HTMLAttributes<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
