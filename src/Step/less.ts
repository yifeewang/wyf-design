import { getThemeColorCss } from '../themeHelper';
import styled from 'styled-components';

const StyledSteps = styled.div<{ space: number }>`
  .step {
    .step-box {
      position: relative;
      &::after {
        position: absolute;
        background-color: #909ca4;
        content: '';
      }
      .step-circle {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        padding: 0;
        color: #909ca4;
        font-size: 13px;
        background-color: #fff;
        border: 1px solid #909ca4;
        border-radius: 50%;
        .step-gift {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 20px;
          height: 20px;
        }
        &.dot {
          width: 8px;
          height: 8px;
        }
        &.icon {
          border: none;
        }
      }
    }
    &.finish {
      .step-box {
        &::after {
          ${getThemeColorCss('background-color')}
        }
      }
      .step-circle {
        ${getThemeColorCss('color')}
        ${getThemeColorCss('border', '1px solid')}
      }
    }
    &.current {
      .step-circle {
        color: #fff;
        ${getThemeColorCss('background-color')}
        border:0;
      }
    }
    &.finish,
    &.current {
      .step-title {
        ${getThemeColorCss('color')}
      }
      .step-circle {
        &.dot {
          ${getThemeColorCss('background-color')}
        }
      }
    }
    &:last-child {
      .step-box::after {
        display: none;
      }
    }
  }
  &.horizontal {
    display: flex;
    .step {
      &:not(:last-child) {
        width: ${(props) => props.space}px;
      }
      position: relative;
      .step-box {
        width: 24px;
        height: 24px;
        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${(props) => props.space}px;
          height: 1px;
          transform: translateY(-50%);
        }
        .step-circle {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .step-content {
      padding-top: 12px;
      color: #999;
      font-size: 14px;
      .step-title {
      }
      .step-description {
        margin-top: 2px;
      }
    }
  }
  &.vertical {
    .step {
      display: flex;
      &:not(:last-child) {
        height: ${(props) => props.space}px;
      }
      .step-box {
        flex: none;
        width: 24px;
        margin-right: 8px;
        &::after {
          top: 13px;
          left: 50%;
          width: 1px;
          height: 100%;
          transform: translateX(-50%);
        }
        .step-circle {
          top: 13px;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      &:last-child {
        .step-content {
          padding-bottom: 0;
        }
      }
      .step-content {
        flex: auto;
        padding: 3px 0 14px;
        color: #999;
        font-size: 14px;
        .step-title {
        }
        .step-description {
          margin-top: 10px;
        }
      }
    }
  }
`;

export default StyledSteps;
