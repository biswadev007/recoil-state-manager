import { atom } from "recoil";

export const backgroundState = atom({
  key: 'backgroundState',
  default: {
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    }
  }
});