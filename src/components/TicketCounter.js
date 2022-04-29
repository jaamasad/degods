import React, { useState } from "react"
const TicketCounter = () => {
  const [counter, setCounter] = useState(1)

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1)
  }

  //decrease counter
  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1)
    }
  }

  return (
    <div className="main-raffle-data counter">
      <div className="point-container btn-container">
        <button className="control__btn inc" onClick={decrease}>
          -
        </button>
        <input className="counter__output" value={counter} />
        <button className="control__btn dec" onClick={increase}>
          +
        </button>
      </div>
      <div className="point-container">
        <button className="buy-btn">Buy {counter} Ticket(s)</button>
      </div>
    </div>
  )
}
export default TicketCounter
