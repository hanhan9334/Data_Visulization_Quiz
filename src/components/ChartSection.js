import React from "react"
import Button from "./fragments/Button"
import PieChart from "./fragments/charts/PieChart"

const ChartSection = ({ title, summary, data, loading }) => {
	const [hide, setHide] = React.useState(true)
	let labels = []
	let values = []
	if (!loading && data != null) {
		//Filter in entries that contribute more than 5%
		labels = data
			.filter((element) => {
				return +element.Percentage > 5
			})
			.map((element) => element.ClientOrigination)
		labels.push("Others")

		values = data
			.filter((element) => +element.Percentage > 5)
			.map((element) => element.Count)
		let sum = 0
		const otherValues = data
			.filter((element) => +element.Percentage <= 5)
			.map((element) => element.Count)
		sum = otherValues.reduce((pv, cv) => pv + cv, 0)
		values.push(sum)
	}

	console.log(data)
	return (
		<div style={{ textAlign: "center" }} onClick={() => setHide(false)}>
			<Button textTop={title} textBack={loading ? "loading" : summary} />
			{hide ? (
				<div></div>
			) : data === null ? (
				<div style={{ textAlign: "center" }}>Data is not available</div>
			) : (
				<div style={{ width: "100%" }}>
					<PieChart labels={labels} values={values} title={title} />
				</div>
			)}
		</div>
	)
}

export default ChartSection
