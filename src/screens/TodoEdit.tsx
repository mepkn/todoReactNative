import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useTodoContext } from '../hooks/useTodoContext';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'TodoEdit'>;
type ProfileScreenNavigationProp = Props['navigation'];
type ProfileScreenRouteProp = Props['route'];

export const TodoEdit = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { params: { todoId } } = useRoute<ProfileScreenRouteProp>();
  const { todos, editTodo } = useTodoContext();

  const currentTodo = todos.find(todo => todo.id === todoId);

  const [editText, setEditText] = useState(currentTodo ? currentTodo.text : '');

  useEffect(() => {
    if (!currentTodo) {
      navigation.navigate('Todo');
    }
  }, [currentTodo, navigation]);

  const handleEdit = () => {
    if (currentTodo && editText.trim() !== '') {
      editTodo(todoId, editText);
      navigation.goBack();
    }
  };

  if (!currentTodo) {
    return (
      <View className="px-5 flex-1 bg-background">
        <Text className="text-center text-xl font-semibold text-primary">
          Todo not found
        </Text>
      </View>
    );
  }

  return (
    <>
      <View className="px-5 flex-1 bg-background" >
        <View className="flex items-center flex-row gap-2 my-2">
          <TextInput
            value={editText}
            onChangeText={setEditText}
            placeholder="Edit todo"
            className="flex-1 border-input placeholder:text-muted-foreground h-12  rounded-md border-hairline bg-background px-3 text-lg leading-[1.25] text-primary lg:text-sm"
          />
          <Pressable className="bg-[#00895A] flex h-12 items-center justify-center rounded-md px-5 py-3 active:opacity-70" onPress={handleEdit}>
            <Text className="text-white">Save</Text>
          </Pressable>
          <Pressable className="bg-[#0172ad] flex h-12 items-center justify-center rounded-md px-5 py-3 active:opacity-70" onPress={() => navigation.goBack()}>
            <Text className="text-white">Cancel</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
