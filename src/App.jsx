import { Blog, Feature, Footer, Header, Possibility, WhatGpt3 } from './containers'
import {Cta, Brand, Navbar} from './components'
import './App.css'
function App() {
  return (
      <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header />
        </div>
        <Brand />
        <WhatGpt3 />
        <Feature />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
  )
}

export default App
