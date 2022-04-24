import React from "react"

const Card = (props) => {
  const { image, heading, sold, winner, ends, auctions, winningBid } = props
  return (
    <div>
      {auctions ? (
        <div className="card auction">
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
        <div className="card">
          <div className="card-img">
            <img src={image} alt="" />
          </div>
          <h2>{heading}</h2>
          <div className="sold-winner">
            <span>🎟️ {sold} sold</span> <p>{winner} winners</p>
          </div>
          <div className="end-date">
            <span className="circle" />
            <p>Ends in : {ends}</p>
          </div>
          <button className="card-btn">Join Raffle</button>
        </div>
      )}
    </div>
  )
}
export default Card
