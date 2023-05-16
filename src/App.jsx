
import './App.css'
import Blog from './blog'
import Footer from './footer'
import NavBar from './navbar'

import Sidebar from './sidebar'

function App() {

  return (
    <>
      <NavBar />
      <div className='wrapper'>
        <Blog />
        <Sidebar />
      </div>
        <Footer />
    
    </>
      

    
  )
}

export default App
