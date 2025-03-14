import {Pressable, Text, TextInput, View} from 'react-native';
import './global.css';

function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
        H1 Hello World
      </Text>
      <Text className="text-3xl font-semibold tracking-tight text-primary">
        H2 Hello World
      </Text>
      <Text className="text-2xl font-semibold tracking-tight text-primary">
        H3 Hello World
      </Text>
      <Text className="text-xl font-semibold tracking-tight text-primary">
        H4 Hello World
      </Text>
      <Text className="text-base text-primary">P Hello World</Text>
      <Text className="text-xl text-secondary">Lead Hello World</Text>
      <Text className="text-sm font-medium leading-none text-primary ">
        Small Hello World
      </Text>
      <Text className="text-xl font-semibold text-primary">
        Large Hello World
      </Text>
      <Text className="text-sm text-secondary">Muted Hello World</Text>
      <TextInput
        placeholder="Enter text"
        className="border-input placeholder:text-muted-foreground h-12 w-full rounded-md border-hairline bg-background px-3 text-lg leading-[1.25] text-primary lg:text-sm"
      />
      <Pressable className="flex h-12 items-center justify-center rounded-md bg-foreground px-5 py-3 active:opacity-70">
        <Text className="text-primaryinv">Button</Text>
      </Pressable>
    </View>
  );
}

export default App;
