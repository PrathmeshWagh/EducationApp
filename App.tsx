import MainNavigator from "./src/Navigator/MainNavigator"
import { PaperProvider } from 'react-native-paper';


const App = () => {
  return (
    <PaperProvider>
      <MainNavigator />
    </PaperProvider>
  )
}

export default App

