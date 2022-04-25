import React from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import RaffleDetail from "./components/RaffleDetail"
import AuctionDetail from "./components/AuctionDetail"
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom"

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/raffle/:id" element={<RaffleDetail />} />
          <Route exact path="/auction/:id" element={<AuctionDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
