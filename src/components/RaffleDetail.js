import React, { useEffect, useState } from "react"
import RaffleData from "../Data/RaffleData.json"
import TicketCounter from "./TicketCounter"

const RaffleDetail = (props) => {
  const [raffleCardData, setRaffleCardData] = useState({
    name: "",
    tData: [],
    image: "",
    raffleClosed: false,
    dustSpent: "",
    uniqueWallets: "",
    whitelistSpots: "",
    collectionSize: "",
    ticketPrice: "",
    sold: "",
    ends: "",
  })
  useEffect(() => {
    for (let i = 0; i < RaffleData.length; i++) {
      if (window.location.href.indexOf(`raffle/${RaffleData[i].id}`) > -1) {
        setRaffleCardData({
          name: RaffleData[i].heading,
          tData: RaffleData[i].tableData,
          image: RaffleData[i].image,
          raffleClosed: RaffleData[i].raffleClosed,
          dustSpent: RaffleData[i].dustSpent,
          uniqueWallets: RaffleData[i].uniqueWallets,
          whitelistSpots: RaffleData[i].whitelistSpots,
          collectionSize: RaffleData[i].collectionSize,
          ticketPrice: RaffleData[i].ticketPrice,
          sold: RaffleData[i].sold,
          ends: RaffleData[i].ends,
        })
      }
    }
  }, [])
  return (
    <div className="raffle-detail-container">
      <div className="hero-img">
        <img src="/images/main-img.svg" alt="" />
      </div>
      {raffleCardData.raffleClosed ? (
        <div>
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
      ) : (
        <div>
          <div className="raffle-detail-dashboard">
            <div className="rf">
              <span>🎟️</span>
              <p>Ticket sold: <b>{raffleCardData.sold}</b></p>
            </div>
            <div className="rf">
              <span>🔥</span>
              <p>$DUST spent: <b>{raffleCardData.dustSpent}</b></p>
            </div>
            <div className="rf">
              <span>👑</span>
              <p>Unique wallets: <b>{raffleCardData.uniqueWallets}</b></p>
            </div>
          </div>
          <div className="counter-container">
            <h1 className="detail-title">{raffleCardData.name} Winners</h1>
            <div className="social-icon">
              <a href="#">
                <img src="/images/discord.svg" />
              </a>
              <a href="#">
                <img src="/images/twitter.svg" />
              </a>
            </div>
            <div className="img-counter-container">
              <div className="counter-img">
                <img src={raffleCardData.image} />
              </div>
              <div className="raffle-data">
                <div className="main-raffle-data">
                  <div className="point-container">
                    <span>Whitelist Spots</span>
                    <p>{raffleCardData.whitelistSpots}</p>
                  </div>
                  <div className="point-container">
                    <span>Collection Size</span>
                    <p>{raffleCardData.collectionSize}</p>
                  </div>
                </div>
                <div className="main-raffle-data">
                  <div className="point-container">
                    <span>Price</span>
                    <p>{raffleCardData.ticketPrice} $DUST/ticket</p>
                  </div>
                  <div className="point-container">
                    <span>Raffle Ends</span>
                    <p>{raffleCardData.ends}</p>
                  </div>
                </div>
                    <TicketCounter />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default RaffleDetail
