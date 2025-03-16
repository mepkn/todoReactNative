import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, Text, View } from 'react-native';
import { CheckBox } from 'react-native-btr';
import { useTodoContext } from '../hooks/useTodoContext';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Todo'>;
type ProfileScreenNavigationProp = Props['navigation'];

export const TodoList = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { todos, toggleTodo } = useTodoContext();

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="flex items-center flex-row gap-2 my-2">
          <CheckBox
            checked={item.completed}
            color={'#0172AD'}
            disabled={false}
            borderRadius={4}
            onPress={() => { toggleTodo(item.id); }} />
          <View className="flex-1">
            <Text className="text-primary">{item.text}</Text>
          </View>
          <Pressable className="bg-[#00895A] flex h-12 items-center justify-center rounded-md px-5 py-3 active:opacity-70" onPress={() => navigation.navigate('TodoEdit', { todoId: item.id })}>
            <Text className="text-white">Edit</Text>
          </Pressable>
          <Pressable className="bg-[#D93526] flex h-12 items-center justify-center rounded-md px-5 py-3 active:opacity-70" onPress={() => navigation.navigate('TodoDelete', { todoId: item.id })}>
            <Text className="text-white">Delete</Text>
          </Pressable>
        </View>
      )}
    />
  );
};
