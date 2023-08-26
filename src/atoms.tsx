import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface ITodo {
  id: number;
  text: string;
}
interface IToDoState {
  [key: string]: ITodo[];
}

const { persistAtom } = recoilPersist({
  key: "toDoList",
});

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    ToDo: [],
    Doing: [],
    Done: [],
  },
  effects_UNSTABLE: [persistAtom],
});
