import React from "react"
import Button from "./fragments/Button"
import PieChart from "./fragments/charts/PieChart"

const ClientOriginationSection = ({ summary, data, loading }) => {
	const [hide, setHide] = React.useState(true)
	let labels = []
	let values = []
	const title = "Client Origination"
	if (!loading) {
		//Filter in entries that contribute more than 10%
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

	return (
		<div style={{ textAlign: "center" }}  onClick={() => setHide(false)}>
			<Button
				textTop={title}
				textBack={loading ? "loading" : summary["ClientOrigination"]}
			/>
			{hide ? (
				<div></div>
			) : (
				<div style={{width:"100%"}}>
					<PieChart labels={labels} values={values} title={title} />
				</div>
			)}
		</div>
	)
}

export default ClientOriginationSection
