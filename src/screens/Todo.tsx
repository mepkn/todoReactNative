import { View } from 'react-native';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';

export const Todo = () => {
  return (
    <>
      <View className="px-5 flex-1 bg-background">
        <TodoInput />
        <TodoList />
      </View >
    </>
  );
};
