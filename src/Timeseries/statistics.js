import isEqualType from '../General/types';

export const STAT_TYPE = {
  AVG: {
    type: 'avg',
    display: 'avg',
  },
  MIN: {
    type: 'min',
    stack: 'minmax',
    display: 'min',
  },
  MAX: {
    type: 'max',
    stack: 'minmax',
    display: 'max',
  },
  MAX_REAL: {
    type: 'maxReal',
  },
  SD: {
    type: 'sd',
    display: 'sd',
    BELOW: {
      type: 'sdBelow',
      stack: 'sd',
      display: 'sd below avg',
    },
    ABOVE: {
      type: 'sdAbove',
      stack: 'sd',
      display: 'sd above avg',
    },
  },
};

export const isStatType = {
  avg: (dt) => isEqualType(dt, STAT_TYPE.AVG),
  max: (dt) => isEqualType(dt, STAT_TYPE.MAX),
  maxReal: (dt) => isEqualType(dt, STAT_TYPE.MAX_REAL),
  min: (dt) => isEqualType(dt, STAT_TYPE.MIN),
  sd: (dt) => isEqualType(dt, STAT_TYPE.SD),
  sdAbove: (dt) => isEqualType(dt, STAT_TYPE.SD.ABOVE),
  sdBelow: (dt) => isEqualType(dt, STAT_TYPE.SD.BELOW),
};
