import { useState } from "react";



import Header from "~app/components/Header"
import InfoSection from "~app/components/Info"

import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")
  const [count, setCount] = useState(0)

  return (
    <div className="skimr-body">
      {/* <Wrapper> */}
      <Header />
      <InfoSection />
      {/* </Wrapper> */}
    </div>
  )
}

export default IndexPopup