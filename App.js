import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {

  const [fontLoaded] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf")
  })
  
  if (!fontLoaded) return <ActivityIndicator/>

  return (
    <TabNavigator/>
  )
}

