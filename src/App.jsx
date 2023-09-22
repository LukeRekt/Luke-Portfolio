import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import GlobalContainer from './components/GlobalContainer/GlobalContainer'
import {ThemeContext} from './Theme.jsx'
import Footer from './components/Footer/Footer'

export default function App() {
    const [theme, setTheme] = React.useState(false)

  const changeTheme = () => {
    setTheme(!theme)
  }
  return (
     <ThemeContext.Provider value={{theme, changeTheme: changeTheme}}>
    <GlobalContainer>
      <Header/>
      <Home/>
      
      <Footer/>
    </GlobalContainer>
         </ThemeContext.Provider>
  )
}
