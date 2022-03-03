/// <reference types="react" />
export declare type Step = {
    /** 标题 */
    title?: React.ReactNode;
    /** 步骤的详情描述 */
    description?: React.ReactNode;
    /** 步骤图标的类型 */
    icon?: React.ReactNode;
    /** 步骤奖品 有两种状态 active notActive */
    giftType?: string | undefined;
    /** 未到达步骤 奖品 高亮状态 */
    giftActiveSrc?: string | undefined;
    /** 达成步骤并领取 奖品 非高亮状态 */
    giftNotActiveSrc?: string | undefined;
    /** 奖品 点击回调 */
    callBack: (item: any) => {};
};
export declare type Props = {
    /** 步骤数据 */
    steps: Step[];
    /** 类型 normal || special 表示普通进度条 和 动态进度条 */
    type?: string;
    /** 指定当前步骤，从 0 开始记数 */
    current?: number;
    className?: string;
    style?: React.CSSProperties;
    /** 指定步骤条方向 */
    direction?: 'horizontal' | 'vertical';
    /** 实心圈风格 */
    dotStyle?: boolean;
};
