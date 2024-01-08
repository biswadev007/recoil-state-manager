import { selector } from "recoil";
import { cardState } from "../atoms/card.atom";

export const cardColorState = selector({
  key: 'cardColorState',
  get: ({get}) => {
    const cardColor = get(cardState);

    return cardColor;
  },
});