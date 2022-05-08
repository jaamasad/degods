import React, { useState } from "react"
import {ArrowUp} from '@styled-icons/bootstrap/ArrowUp'
import {ArrowDown} from '@styled-icons/bootstrap/ArrowDown'
const TicketCounter = (props) => {
  const {auction}=props
  const [counter, setCounter] = useState(auction?10:1)

  const increase = () => {
    setCounter((count) => count + (auction ?10:1))
  }

  const decrease = () => {
    if (counter > (auction ?10:1)) {
      setCounter((count) => count - (auction ?10:1))
    }
  }

  return (
    <div className="main-raffle-data counter">
      <div className={`point-container btn-container ${auction && "auction-counter"}`}>
        <button className="control__btn inc" onClick={decrease}>
         {auction ? <ArrowDown />:"-"} 
        </button>
        <input className="counter__output" value={counter} />
        <button className="control__btn dec" onClick={increase}>
        {auction ? <ArrowUp />:"-"} 
        </button>
      </div>
      <div className={`point-container ${auction && "aucbtn"}`} >
        <button className="buy-btn">{auction ? "Submit Bid" : "Buy" +counter +"Ticket(s)"}  </button>
      </div>
    </div>
  )
}
export default TicketCounter
