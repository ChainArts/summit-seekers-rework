import ReactLenis from 'lenis/react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'


const App = () => {

    return (
        <ReactLenis root>
            <CustomCursor />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/booking" element={<div>Booking</div>} />
            </Routes>
            <Footer />
      </ReactLenis>
  )
}

export default App
