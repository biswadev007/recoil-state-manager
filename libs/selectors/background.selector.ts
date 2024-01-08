import { selector } from "recoil";
import { backgroundState } from "../atoms/backgroud.atom";

export const backgroundColorState = selector({
  key: 'backgroundColorState',
  get: ({get}) => {
    const color = get(backgroundState);

    return color;
  },
});