import React from "react"

const Card = (props) => {
  const { image, heading, sold, winner, ends, auctions, winningBid, onCardClick, raffleClosed } = props
  return (
    <div>
      {auctions ? (
        <div className="card auction" onClick={onCardClick}>
          <div className="card-img">
            <img src={image} alt="" />
          </div>
          <h2>{heading}</h2>
          <div className="sold-winner">
            <span>Winning Bid:</span> <p>{winningBid}</p>
          </div>
          <div className="end-date">
            <span className="circle" />
            <p>Auction closed!</p>
          </div>
          <button className="card-btn">View winners</button>
        </div>
      ) : (
        <div className={`card ${raffleClosed ? "disabled" : ""}`} onClick={onCardClick}>
          <div className="card-img">
            <img src={image} alt="" />
          </div>
          <h2>{heading}</h2>
          <div className="sold-winner">
            <span>🎟️ {sold} sold</span> <p>{winner} winners</p>
          </div>
          <div className="end-date">
            <span className="circle" />
            <p>{raffleClosed ? "Raffle Closed" : `Ends in : ${ends}`}</p>
          </div>
          <button className="card-btn">{raffleClosed ? "View winners" : "Join Raffle"}</button>
        </div>
      )}
    </div>
  )
}
export default Card
