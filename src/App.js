import React from "react"
import * as d3 from "d3"
import "./App.css"
import ClientSection from "./components/ClientSection"
import ClientTypeSection from "./components/ClientTypeSection"
import ClientOriginationSection from "./components/ClientOrigintionSection"

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
				<ClientSection
					summary={loading ? null : data["Summary data"][0]}
					loading={loading}
				/>
			</div>

			<div className="column">
				<ClientTypeSection
					summary={loading ? null : data["Summary data"][0]}
					data={loading ? null : data["ClientType"]}
					loading={loading}
				/>
			</div>
			<div className="column">
				<ClientOriginationSection
					summary={loading ? null : data["Summary data"][0]}
					data={loading ? null : data["ClientOrigination"]}
					loading={loading}
				/>
			</div>
		</div>
	)
}

export default App
