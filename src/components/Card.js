import React from "react"

const Card = (props) => {
  const { image, heading, sold, winner, ends, auctions, winningBid, onCardClick, raffleClosed, auctionClosed, currentBid, aucEnds } = props
  return (
    <div>
      {auctions ? (
        <div className={`card auction ${auctionClosed ? "disabled" : ""}`} onClick={onCardClick}>
          <div className="card-img">
            <img src={image} alt="" />
          </div>
          <h2>{heading}</h2>
          <div className="sold-winner">
            <span>{auctionClosed ? "Winning" : "Current"} Bid:</span> <p>{auctionClosed ? winningBid: currentBid+" $DUST" }</p>
          </div>
          <div className="end-date">
            <span className="circle" />
            <p>{auctionClosed ? "Auction closed!" :'Ends in:' + aucEnds}</p>
          </div>
          <button className="card-btn">{auctionClosed ? "View winners": "View Auction"} </button>
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
