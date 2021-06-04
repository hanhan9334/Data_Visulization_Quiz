import React from "react"
import * as d3 from "d3"
import "./App.css"
import ChartSection from "./components/ChartSection"

//The json file is stored on gist. I assume that your data is on cloud , so this may better simulate a real scenario.
const dataUrl =
	"https://gist.githubusercontent.com/hanhan9334/449e6ae8f4dcf73100bdef8acaf40765/raw/8439d0ff1da9d3964464a3064fa09f0afc11d366/json"

const App = () => {
	//State to store data
	const [data, setData] = React.useState([])
	//State to indicate the data is loding or not
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		//Render data from json file and store it in a useState
		d3.json(dataUrl)
			.then((d) => {
				setData(d)
				setLoading(false)
			})
			.catch((err) => {
				console.log(err)
			})
		//return () => undefined
	}, [])
	console.log(data)

	return (
		<div className="ui three column doubling stackable grid container">
			<div className="column">
				<ChartSection
					title={"Client"}
					summary={loading ? null : data["Summary data"][0]["Client"]}
					data={null}
					loading={loading}
				/>
			</div>
			<div className="column">
				<ChartSection
					title={"Client Type"}
					summary={loading ? null : data["Summary data"][0]["ClientType"]}
					data={loading ? null : data["ClientType"]}
					loading={loading}
				/>
			</div>
			<div className="column">
				<ChartSection
					title={"Client Origination"}
					summary={
						loading ? null : data["Summary data"][0]["ClientOrigination"]
					}
					data={loading ? null : data["ClientOrigination"]}
					loading={loading}
				/>
			</div>
		</div>
	)
}

export default App
