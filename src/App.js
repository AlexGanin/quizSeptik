import React, {useState} from "react"
import { Steps } from "./components/Steps"
import { Step1 } from "./components/Step1"
import { Step2 } from "./components/Step2"
import { Banner } from "./components/Banner"

function App() {

  const [data, setData] = useState({
    steps: 2,
    stepNum: 1,
    value: null,
    message: ""
  })

  return (
    <div className="wrapper">
			<main className="page">
        <Steps data={data} setData={setData} />
        {data.stepNum == 1 ? <Step1 data={data} setData={setData}/> : null}
        {data.stepNum == 2 ? <Step2 data={data} setData={setData}/> : null}
        {data.stepNum == 2 && <Banner />}
			</main>
		</div>
  );
}

export default App;
