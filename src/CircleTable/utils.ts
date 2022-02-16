export const getAngleRange = (prizeListLength: number) => {
  let angleRangeList: number[] = [];
  switch (prizeListLength) {
    case 2:
      angleRangeList = [0, 180];
      break;
    case 3:
      angleRangeList = [0, 120, 240];
      break;
    case 4:
      angleRangeList = [0, 90, 180, 270];
      break;
    case 5:
      angleRangeList = [0, 72, 144, 216, 288];
      break;
    case 6:
      angleRangeList = [0, 60, 120, 180, 240, 300];
      break;
    default:
      angleRangeList = [0, 60, 120, 180, 240, 300];
      break;
  }
  return angleRangeList;
};
