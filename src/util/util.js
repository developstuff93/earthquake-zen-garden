import { DATA_TYPES } from "./constants";

export const customSort = (a, b, type, dir) => {
  switch (type) {
    case DATA_TYPES.STRING:
      if (a > b) {
        return dir ? -1 : 1;
      }
      if (a < b) {
        return dir ? 1 : -1;
      }
      return 0;
    case DATA_TYPES.NUMBER:
      return dir ? b - a : a - b;
    case DATA_TYPES.DATE:
      const timeA = new Date(a);
      const timeB = new Date(b);
      return dir ? timeB - timeA : timeA - timeB;
  }
};

export const formatTime = (time) => {
  const format = new Intl.DateTimeFormat([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return format.format(time);
};
