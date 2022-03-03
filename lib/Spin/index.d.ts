import React from 'react';
declare type Props = {
    style?: React.CSSProperties;
    className?: string;
    /** 是否显示,搭配wait使用，默认 true */
    loading?: boolean;
};
/** 加载中指示器,继承父容器颜色和字体大小 */
declare const Spin: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Spin;
