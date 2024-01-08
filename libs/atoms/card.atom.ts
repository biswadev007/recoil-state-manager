import { atom } from "recoil";

export const cardState = atom({
  key: 'cardState',
  default: {
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    }
  }
});