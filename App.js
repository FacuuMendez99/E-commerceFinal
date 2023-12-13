import CategoriesScreen from './src/screens/CategoriesScreen';
import { useFonts} from "expo-font"
import { ActivityIndicator } from 'react-native';
import ProductsByCategory from './src/screens/ProductsByCategory';
import CategoryItem from './src/components/CategoryItem';
import { useState } from 'react';

export default function App() {
  const[categorySelected,setCategorySelected] = useState("")
  
  const [fontLoaded] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf")
  })
  
  if (!fontLoaded) return <ActivityIndicator/>

  const onSelectCategory = (category) => {
    setCategorySelected(category)
  }

  return (
    <>{
      categorySelected
      ?
      <ProductsByCategory category={categorySelected}/>
      :
      <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />    
    }
    </>
  )
}

