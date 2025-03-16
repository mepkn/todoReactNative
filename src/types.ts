export type TodoContextType = {
  todos: TodoItem[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
  deleteTodo: (id: number) => void;
  input: string;
  setInput: (text: string) => void;
};

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
  date: string;
};

export type RootStackParamList = {
  Todo: undefined;
  TodoEdit: { todoId: number };
  TodoDelete: { todoId: number };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
