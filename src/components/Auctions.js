import React from "react"
import { useNavigate } from 'react-router-dom';
import Card from "./Card"
import AuctionData from "../Data/AuctionData.json"
const Auctions = () => {
  const navigate = useNavigate();

  const handleSelection=(id)=>{
   navigate(`/auction/${id}`); 
  }
  return (
    <div className="raffles-container">
      {AuctionData.map((item, key) => (
        <Card 
        onCardClick={() => handleSelection(item.id)}
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
