import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Routing from './Routing'
import ComingSoon from './ComingSoon'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Routing />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  )
}

export default App