import React from "react"
import { useNavigate } from "react-router-dom"
import Card from "./Card"
import RaffleData from "../Data/RaffleData.json"
const Raffles = () => {
  const navigate = useNavigate()

  const handleSelection = (id) => {
    navigate(`/raffle/${id}`)
  }
  return (
    <div className="raffles-container">
      {RaffleData.map((item, key) => (
        <Card
          onCardClick={() => handleSelection(item.id)}
          key={key}
          image={item.image}
          heading={item.heading}
          sold={item.sold}
          winner={item.winner}
          ends={item.ends}
          raffleClosed={item.raffleClosed}
        />
      ))}
    </div>
  )
}
export default Raffles
