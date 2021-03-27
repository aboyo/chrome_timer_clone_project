import { atom, selector } from "recoil";
import { STATUS } from "./constants";

export const timeState = atom({
  key: "time", // 必須唯一，不可有相同的key
  default: 0, // 預設值
});

export const actionState = atom({
  key: "action",
  default: STATUS.PAUSE,
});

export const mState = atom({
  key: "min",
  default: 0,
});

export const secState = atom({
  key: "sec",
  default: 0,
});

export const sState = selector({
  key: "secState",
  get: ({ get }) => {
    return get(secState);
  },
  set: ({ set }, newValue) => {
    if (newValue > 59) {
      set(secState, 59);
    } else {
      // set(secState, Number(newValue));
      set(secState, newValue);
    }
  },
});

// export const startTimeState = selector({
//   key: "startTime",
//   get: ({ get }) => {
//     console.log(get(timeState));
//     return get(timeState);
//   },
//   set: ({ set, get }, newValue) => {
//     set(timeState, newValue);

//     let m = Math.floor(get(timeState) / 60);
//     let s = get(timeState) % 60;
//     set(minState, m);
//     set(secState, s);
//   },
// });

// export const minState = selector({
//   key: "mState",
//   get: ({ get }) => {
//     return get(mState);
//   },
//   set: ({ set, get }, newValue) => {
//     set(mState, Number(newValue));
//     if (newValue) {
//       set(timeState, Number(newValue) * 60 + Number(get(sState)));
//     }
//   },
// });

// export const secState = selector({
//   key: "sState",
//   get: ({ get }) => {
//     return get(sState);
//   },
//   set: ({ set, get }, newValue) => {
//     set(sState, Number(newValue));
//     if (newValue) {
//       set(timeState, Number(get(mState)) * 60 + Number(newValue));
//     }
//   },
// });
