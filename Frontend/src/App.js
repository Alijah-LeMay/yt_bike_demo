import './App.css'
import DisplayScreen from './screens/DisplayScreen'
import FooterScreen from './screens/FooterScreen'
import LandingScreen from './screens/LandingScreen'
import OrderScreen from './screens/OrderScreen'
import SpecScreen from './screens/SpecScreen'

function App() {
  return (
    <div>
      <LandingScreen />
      <SpecScreen />
      <DisplayScreen />
      <OrderScreen />
      <FooterScreen />
    </div>
  )
}

export default App
