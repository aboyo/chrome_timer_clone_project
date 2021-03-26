import { atom, selector } from "recoil";

export const timeState = atom({
  key: "counter", // 必須唯一，不可有相同的key
  default: 0, // 預設值
});

export const splitTimeState = selector({
  key: "splitTime",
  get: ({ get }) => {
    let m = Math.floor(get(timeState) / 60);
    let s = get(timeState) % 60;
    return {
      minute: m,
      second: s,
    };
  },
});
