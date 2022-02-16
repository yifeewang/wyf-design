import { getThemeColorCss } from '../themeHelper';
import styled from 'styled-components';

const StyledSteps = styled.div<{ space: number }>`
  .step-wraper {
    width: 100%;
    .step-gift {
      position: absolute;
      top: -20px;
      right: -5px;
      width: 20px;
      height: 20px;
    }
    .step_item {
      position: absolute;
    }
    .page-steps-progress {
      position: relative;
      width: 100%;
      height: 10px;
      margin: 6px auto;
      border: 1px solid #999;
      border-radius: 5px;
    }

    .progress {
      position: absolute;
      left: 0;
      width: 0%;
      height: 10px;
      background: linear-gradient(#fe6209, #ff9b15);
      border-radius: 5px;
      transition: 0.4s ease;
    }

    .step_text {
      position: absolute;
      top: 10px;
      display: flex;
      width: 100%;
      margin-left: -5px;
      color: #8f4f35;
      font-size: 16px;
      dth: 106%;

      > view {
        position: relative;
        width: 100%/17;
        height: 0.3rem;
        // text-align: left;
      }

      .small_gift_common {
        position: relative;
        top: -1rem;
        right: 0.02rem;
        width: 0.4rem;
        height: 0.54rem;
      }

      .big_gift_common {
        position: relative;
        top: -1.05rem;
        right: 0.08rem;
        width: 0.64rem;
        height: 0.71rem;
      }
    }
  }
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

    .step-normal-wraper {
      display: flex;
    }
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
