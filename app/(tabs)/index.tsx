import { Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className='w-full flex flex-col gap-2  items-start justify-center relative pb-2'>
        <Text className='text-red text-2xl w-full font-extrabold leading-none'>
          Azerty
        </Text>
      </View>
    </SafeAreaView >
  );
}