import * as React from 'react';
import { toArray } from '../utils';
import styled from 'styled-components';
import { detectFlexGapSupported } from '../dom';
import clsx from 'clsx';

const SpaceContext = React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false,
});

const flexDirectionMap = {
  horizontal: 'row',
  vertical: 'column',
};

type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';

type ItemProps = {
  className: string;
  children: React.ReactNode;
  index: number;
  direction?: 'horizontal' | 'vertical';
  marginDirection: 'marginLeft' | 'marginRight';
  split?: React.ReactNode;
  wrap?: boolean;
};

function SpaceItem({
  className = 'uc-space-item',
  direction,
  index,
  marginDirection,
  children,
  split,
  wrap,
}: ItemProps) {
  const { horizontalSize, verticalSize, latestIndex, supportFlexGap } =
    React.useContext(SpaceContext);

  let style: React.CSSProperties = {};

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = { marginBottom: horizontalSize / (split ? 2 : 1) };
      }
    } else {
      style = {
        ...(index < latestIndex && { [marginDirection]: horizontalSize / (split ? 2 : 1) }),
        ...(wrap && { paddingBottom: verticalSize }),
      };
    }
  }

  if (children === null || children === undefined) {
    return null;
  }

  return (
    <>
      <div className={className} style={style}>
        {children}
      </div>
      {index < latestIndex && split && (
        <span className={`${className}-split`} style={style}>
          {split}
        </span>
      )}
    </>
  );
}

type SpaceProps = {
  className?: string;
  style?: React.CSSProperties;
  /** 间距大小 */
  size?: number | [number, number];
  /** 间距方向 */
  direction?: 'horizontal' | 'vertical';
  /** 对齐方式 */
  align?: Align;
  /** 设置拆分 */
  split?: React.ReactNode;
  /** 是否自动换行，仅在 horizontal 时有效 */
  wrap?: boolean;
};

const StyledSpace = styled.div<{
  align: 'center' | 'flex-start' | 'flex-end' | 'baseline';
  direction: 'horizontal' | 'vertical';
}>`
  display: inline-flex;
  flex-direction: ${({ direction }) => flexDirectionMap[direction]};
  align-items: ${({ align }) => align};
  font-size: 14px;
`;

/** 间距 */
const Space: React.FC<SpaceProps> = (props) => {
  const {
    size = 8,
    align,
    className,
    children,
    direction = 'horizontal',
    split,
    style,
    wrap = false,
    ...otherProps
  } = props;

  const supportFlexGap = detectFlexGapSupported();

  const [horizontalSize, verticalSize] = React.useMemo(
    () => (Array.isArray(size) ? size : [size, size]),
    [size],
  );

  const childNodes = toArray(children as React.ReactElement[]);
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const marginDirection = 'marginRight';

  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child: any, i: any) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }

    /* eslint-disable react/no-array-index-key */
    return (
      <SpaceItem
        className={className as string}
        key={i}
        direction={direction}
        index={i}
        marginDirection={marginDirection}
        split={split}
        wrap={wrap}
      >
        {child}
      </SpaceItem>
    );
    /* eslint-enable */
  });

  const spaceContext = React.useMemo(
    () => ({ horizontalSize, verticalSize, latestIndex, supportFlexGap }),
    [horizontalSize, verticalSize, latestIndex, supportFlexGap],
  );

  if (childNodes.length === 0) {
    return null;
  }

  const gapStyle: React.CSSProperties = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap';

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }

  return (
    <StyledSpace
      direction={direction}
      align={mergedAlign as any}
      className={clsx(className)}
      style={{
        ...gapStyle,
        ...style,
      }}
      {...otherProps}
    >
      <SpaceContext.Provider value={spaceContext}>{nodes}</SpaceContext.Provider>
    </StyledSpace>
  );
};

export default Space;
