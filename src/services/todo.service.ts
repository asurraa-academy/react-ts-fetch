import axios from "axios";
import { BASE_API } from "../constants/app.constants";
import { URI_PATH } from "../constants/uri.constants";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TodoArray = ITodo[];

export const fetchTodo = () => {
  return axios.get<TodoArray>(BASE_API + URI_PATH.GET_ALL_TODO);
};
