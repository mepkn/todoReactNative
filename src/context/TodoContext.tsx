import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { TodoContext } from '.';
import { TodoItem } from '../types';

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error loading todos from AsyncStorage:', error);
      }
    };
    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (error) {
        console.error('Error saving todos to AsyncStorage:', error);
      }
    };
    saveTodos();
  }, [todos]);

  const addTodo = (text: string) => {
    if (text.trim() === '') { return; }
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toISOString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number, text: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        editTodo,
        deleteTodo,
        input,
        setInput,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
