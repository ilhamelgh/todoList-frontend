import { Routes, Route } from "react-router-dom"

import Home from "./routes/Home.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} ></Route>
    </Routes>
  )
}

export default App
