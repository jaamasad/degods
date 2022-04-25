import React, { useEffect, useState } from "react"
import RaffleData from "../Data/RaffleData.json"
const RaffleDetail = (props) => {
  const [raffleCardData, setRaffleCardData] = useState({
    name: "",
    tData: [],
    image: "",
  })
  useEffect(() => {
    for (let i = 0; i < RaffleData.length; i++) {
      if (window.location.href.indexOf(`raffle/${RaffleData[i].id}`) > -1) {
        setRaffleCardData({
          name: RaffleData[i].heading,
          tData: RaffleData[i].tableData,
          image: RaffleData[i].image,
        })
      }
    }
  }, [])
  return (
    <div className="raffle-detail-container">
      <div className="hero-img">
        <img src="/images/main-img.svg" alt="" />
      </div>
      <div className="profile-img">
        <img src={raffleCardData.image} alt="" />
      </div>
      <h1 className="detail-title">{raffleCardData.name} Winners</h1>
      <div className="social-icon">
        <a href="#">
          <img src="/images/discord.svg" />
        </a>
        <a href="#">
          <img src="/images/twitter.svg" />
        </a>
      </div>
      <table className="raffle-table">
        <thead>
          <tr>
            <th>Wallets</th>
            <th>Enteries</th>
            <th>Claim</th>
          </tr>
        </thead>
        <tbody>
          {raffleCardData.tData.map((td, key) => (
            <tr key={key}>
              <td>{td.wallet}</td>
              <td>{td.entries}</td>
              <td>{td.claim}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default RaffleDetail
