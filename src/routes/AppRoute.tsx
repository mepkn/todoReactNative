import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { Todo } from '../screens/Todo';
import { TodoDelete } from '../screens/TodoDelete';
import { TodoEdit } from '../screens/TodoEdit';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppRoute = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackButtonDisplayMode: 'minimal', headerTitleStyle: { fontSize: 24, fontWeight: '800', color: colorScheme === 'dark' ? 'hsl(0 0% 98%)' : 'hsl(240 5.9% 10%)' }, headerStyle: { backgroundColor: colorScheme === 'dark' ? 'hsl(240 3.7% 15.9%)' : 'hsl(0 0% 100%)' }, headerShadowVisible: false }}>
        <Stack.Screen
          name="Todo"
          component={Todo}
          options={{
            headerTitle: 'Todo List',
          }}
        />
        <Stack.Screen name="TodoEdit" component={TodoEdit} options={{
          headerTitle: 'Todo Edit',
        }} />
        <Stack.Screen name="TodoDelete" component={TodoDelete} options={{
          headerTitle: 'Todo Delete',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
