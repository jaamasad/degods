import React from "react"
import Card from "./Card"
const CARD_DATA = [
  {
    image: "/images/2.png",
    heading: "DeGods x MagnumAI 2",
    winningBid: "760 $DUST",
    winner: "89",
    ends: "02d:04h:2m:2s",
  },
  {
    image: "/images/3.gif",
    heading: "DeGods x MagnumAI 2",
    winningBid: "760 $DUST",
    winner: "89",
    ends: "02d:04h:2m:2s",
  },
  {
    image: "/images/3.gif",
    heading: "DeGods x MagnumAI 2",
    winningBid: "760 $DUST",
    winner: "89",
    ends: "02d:04h:2m:2s",
  },
  {
    image: "/images/3.gif",
    heading: "DeGods x MagnumAI 2",
    winningBid: "760 $DUST",
    winner: "89",
    ends: "02d:04h:2m:2s",
  }
]

const Auctions = () => {
  return (
    <div className="raffles-container">
      {CARD_DATA.map((item, key) => (
        <Card 
        key={key}
        image={item.image}
        heading={item.heading}
        sold={item.sold}
        winner={item.winner}
        ends={item.ends}
        winningBid={item.winningBid}
        auctions
        />
      ))}
    </div>
  )
}
export default Auctions
