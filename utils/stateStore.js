import { atom } from "recoil";

export const counterState = atom({
  key: "counter", // 必須唯一，不可有相同的key
  default: 0, // 預設值
});
