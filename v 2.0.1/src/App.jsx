import './App.scss'
import ContactCard from './components/ContactCard/ContactCard'
import Content from './components/Content/Content'
import Count from './components/Count/Count'
import Gears from './components/Gears/Gears'
import Logo from './components/Logo/Logo'

function App() {  

  return (
    <main className="container">
      <div className="container__seccion">
        <Logo/>     
        <ContactCard/> 
      </div>           
      <div className="container__construction">
        <Gears/>
        <Content/>
        <Count/>
        <p className='copyrigth'>©Copyright 2023 erickfabiandev.com</p>
      </div>           
    </main>
  )
}

export default App
