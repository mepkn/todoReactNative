import { Pressable, Text, TextInput, View } from 'react-native';
import { useTodoContext } from '../hooks/useTodoContext';

export const TodoInput = () => {
  const { input, setInput, addTodo } = useTodoContext();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <View className="flex flex-row gap-2 mt-4">
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Add a new todo"
        className="flex-1 border-input placeholder:text-muted-foreground h-12  rounded-md border-hairline bg-background px-3 text-lg leading-[1.25] text-primary lg:text-sm"
      />
      <Pressable className="flex h-12 items-center justify-center rounded-md bg-[#0172ad] px-5 py-3 active:opacity-70" onPress={handleAddTodo}>
        <Text className="text-white">Add</Text>
      </Pressable>
    </View>
  );
};
