import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTodoContext } from '../hooks/useTodoContext';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'TodoDelete'>;
type ProfileScreenNavigationProp = Props['navigation'];
type ProfileScreenRouteProp = Props['route'];

export const TodoDelete = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { params: { todoId } } = useRoute<ProfileScreenRouteProp>();
  const { todos, deleteTodo } = useTodoContext();

  const currentTodo = todos.find(todo => todo.id === todoId);

  useEffect(() => {
    if (!currentTodo) {
      navigation.navigate('Todo');
    }
  }, [currentTodo, navigation]);

  const handleDelete = () => {
    if (currentTodo) {
      deleteTodo(todoId);
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
      <View className="px-5 flex-1 bg-background">
        <Text className="text-base text-primary text-center">Are you sure you want to delete the following todo?
        </Text>
        <Text className="mt-4 text-center text-xl font-semibold text-primary">
          {currentTodo?.text}
        </Text>
        <View className="mt-4 flex-row items-center justify-center gap-2">
          <Pressable className="bg-[#D93526] flex h-12 items-center justify-center rounded-md px-5 py-3 active:opacity-70" onPress={handleDelete}>
            <Text className="text-white">Delete</Text>
          </Pressable>
          <Pressable className="bg-[#0172ad] flex h-12 items-center justify-center rounded-md px-5 py-3 active:opacity-70" onPress={() => navigation.goBack()}>
            <Text className="text-white">Cancel</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
