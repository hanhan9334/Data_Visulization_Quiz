import React from "react"
import PieChart from "./fragments/charts/PieChart"
import Button from "./fragments/Button"

const ClientTypeSection = ({ summary, data, loading }) => {
	const [hide, setHide] = React.useState(true)
	let labels = []
	let values = []
	let title = "Client Type"
	// let percentages = []
	if (!loading) {
		//Filter in entries that contribute more than 10%
		labels = data
			.filter((element) => {
				return +element.Percentage > 5
			})
			.map((element) => element.ClientType)
		labels.push("Others")

		values = data
			.filter((element) => +element.Percentage > 5)
			.map((element) => element.Count)
		let sumCount = 0
		const otherValues = data
			.filter((element) => +element.Percentage <= 5)
			.map((element) => element.Count)
		sumCount = otherValues.reduce((pv, cv) => pv + cv, 0)
		values.push(sumCount)
	}

	return (
		<div style={{ textAlign: "center" }} onClick={() => setHide(false)}>
			<Button
				textTop={title}
				textBack={loading ? "loading" : summary["ClientType"]}
			/>
			{hide ? (
				<div></div>
			) : (
				<PieChart labels={labels} values={values} title={title} />
			)}
		</div>
	)
}

export default ClientTypeSection
