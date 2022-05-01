import React, { useEffect, useState } from "react"
import AuctionData from "../Data/AuctionData.json"
const AuctionDetail = (props) => {
  const [auctionCardData, setAuctionCardData] = useState({
    name: "",
    projectDetail: [],
    bidHistory: [],
    image: "",
    discription: "",
    winningBid: "",
  })
  useEffect(() => {
    for (let i = 0; i < AuctionData.length; i++) {
      if (window.location.href.indexOf(`auction/${AuctionData[i].id}`) > -1) {
        setAuctionCardData({
          name: AuctionData[i].heading,
          projectDetail: AuctionData[i].projectDetail,
          bidHistory: AuctionData[i].bidHistory,
          image: AuctionData[i].image,
          discription: AuctionData[i].discription,
          winningBid: AuctionData[i].winningBid,
        })
      }
    }
  }, [])
  return (
    <div className="raffle-detail-container auction">
      <div className="hero-img">
        <img src="/images/main-img.svg" alt="" />
      </div>
      <div className="main-container">
        <div className="left-detail">
          <div className="auction-hero-img profile-img">
            <img src={auctionCardData.image} alt="" />
          </div>
          <div className="desc-container">
            <h2>Description</h2>
            <p>{auctionCardData.discription}</p>
            <h2>How to cancel my bid?</h2>
            <p>
              Every non-winning bid will be refunded after the auction has
              ended. However, you can cancel your bid at any time but you will
              be charged 0.033 SOL (PHBT).
            </p>
          </div>
        </div>
        <div className="right-detail">
          <div className="aution-nav">
            <div className="name-socio">
              <h2>{auctionCardData.name}</h2>
              <div className="auc-social-icon">
                <a href="#">
                  <img src="/images/website.png" />
                </a>
                <a href="#">
                  <img src="/images/discord.svg" />
                </a>
                <a href="#">
                  <img src="/images/twitter.svg" />
                </a>
              </div>
            </div>
            <a className="view-token" href="#">
              View Token
            </a>
          </div>
          <div className="project-detail">
            <div className="box-container">
              <span>Project</span>
              <p>{auctionCardData.name}</p>
            </div>
            <div className="box-container">
              <span>Collection</span>
              <p>
                {auctionCardData.projectDetail[0] &&
                  auctionCardData.projectDetail[0].collection}
              </p>
            </div>
            <div className="box-container">
              <span>Winners</span>
              <p>
                {auctionCardData.projectDetail[0] &&
                  auctionCardData.projectDetail[0].winners}
              </p>
            </div>
            <div className="box-container">
              <span>NFTs</span>
              <p>
                {auctionCardData.projectDetail[0] &&
                  auctionCardData.projectDetail[0].nfts}
              </p>
            </div>
          </div>
          <div className="auction-message">
            <p>Auction closed!</p>
            <p>🎉 Congrats to the winner 🎉</p>
            <p>
              {auctionCardData.projectDetail[0] &&
                auctionCardData.bidHistory[0].userName}{" "}
              won for {auctionCardData.winningBid}
            </p>
          </div>
          <div className="auction-table">
            <p>Bid History</p>
            <table>
              {console.log(auctionCardData.bidHistory)}
              <tbody>
                {auctionCardData &&
                  auctionCardData.bidHistory.map((td, key) => (
                    <tr key={key}>
                      <td>{td.userName}</td>
                      <td>{td.time}</td>
                      <td>{td.dust}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuctionDetail
