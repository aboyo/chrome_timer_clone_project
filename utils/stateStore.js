import { atom, selector } from "recoil";

export const timeState = atom({
  key: "time", // 必須唯一，不可有相同的key
  default: 0, // 預設值
});

export const startTimeState = selector({
  key: "startTime",
  get: ({ get }) => {
    console.log(get(timeState));
    return get(timeState);
  },
  set: ({ set, get }, newValue) => {
    set(timeState, newValue);

    let m = Math.floor(get(timeState) / 60);
    let s = get(timeState) % 60;
    set(minState, m);
    set(secState, s);
  },
});

export const minState = atom({
  key: "min",
  default: 0,
});

export const secState = atom({
  key: "sec",
  default: 0,
});

export const startState = atom({
  key: "startState",
  default: false,
});

export const switchState = selector({
  key: "switch",
  get: ({ get }) => {
    return get(startState);
  },
  set: ({ set, get }, newValue) => {
    if (newValue) {
      console.log(get(minState), get(secState));
      set(timeState, Number(get(minState)) * 60 + Number(get(secState)));
    }
    set(startState, newValue);
  },
});

// export const splitTimeState = selector({
//   key: "splitTime",
//   get: ({ get }) => {
//     let m = Math.floor(get(timeState) / 60);
//     let s = get(timeState) % 60;
//     return {
//       minute: m,
//       second: s,
//     };
//   },
//   set: ({ set }, newValue) => {
//     console.log(newValue.m);
//     console.log(newValue.s);
//     // let num = Number(newValue.minute);
//     // console.log(num);

//     // let m = newValue.m * 60;
//     // let s = newValue.s;
//     // set(timeState, m + s);
//   },
// });
