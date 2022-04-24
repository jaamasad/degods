import React from "react"
import Card from "./Card"
const CARD_DATA = [
  {
    image: "/images/1.jpg",
    heading: "Jikan WL",
    sold: "245",
    winner: "89",
    ends: "02d:04h:2m:2s",
  },
  {
    image: "/images/1.jpg",
    heading: "Jikan WL",
    sold: "245",
    winner: "89",
    ends: "02d:04h:2m:2s",
  },
  {
    image: "/images/1.jpg",
    heading: "Jikan WL",
    sold: "245",
    winner: "89",
    ends: "02d:04h:2m:2s",
  },
  {
    image: "/images/1.jpg",
    heading: "Jikan WL",
    sold: "245",
    winner: "89",
    ends: "02d:04h:2m:2s",
  },
  {
    image: "/images/1.jpg",
    heading: "Jikan WL",
    sold: "245",
    winner: "89",
    ends: "02d:04h:2m:2s",
  },
]

const Raffles = () => {
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
        />
      ))}
    </div>
  )
}
export default Raffles
