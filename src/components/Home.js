import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Auctions from "./Auctions"
import Raffles from "./Raffles"

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className="home-container">
      <div className="hero-img">
        <img src="/images/main-img.svg" alt="" />
      </div>
      <div className="tab-container">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Raffles</Tab>
            <Tab>Auctions</Tab>
          </TabList>
          <TabPanel>
            <Raffles />
           </TabPanel>
          <TabPanel>
            <Auctions />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
export default Home
