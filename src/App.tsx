import ReactLenis from 'lenis/react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Booking from './pages/Booking'
import Adventure from './pages/Adventure'


const App = () => {

    return (
        <ReactLenis root>
            <CustomCursor />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/booking/:slug" element={<Booking />} />
                <Route path="/adventure/:slug" element={<Adventure /> } />
            </Routes>
            <Footer />
      </ReactLenis>
  )
}

export default App
