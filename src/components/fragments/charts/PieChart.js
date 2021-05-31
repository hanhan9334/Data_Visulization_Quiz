import React from "react"
import { Doughnut } from "react-chartjs-2"

const PieChart = ({ labels, values, title, loading }) => {
	const data_ready = {
		labels: [],
		datasets: [
			{
				label: "title",
				data: [],
				backgroundColor: [
					"rgba(230, 25, 75,0.6)",
					"rgba(60, 180, 75,0.6)",
					"rgba(255, 225, 25,0.6)",
					"rgba(0, 130, 200,0.6)",
					"rgba(245, 130, 48,0.6)",
					"rgba(70, 240, 240,0.6)",
					"rgba(240, 50, 230,0.6)",
					"rgba(250, 190, 212,0.6)",
					"rgba(0, 128, 128,0.6)",
					"rgba(220, 190, 255,0.6)",
					"rgba(170, 110, 40,0.6)",
					"rgba(255, 250, 200,0.6)",
					"rgba(128, 0, 0,0.6)",
					"rgba(170, 255, 195,0.6)",
					"rgba(0, 0, 128,0.6)",
					"rgba(128, 128, 128,0.6)"
				],
				hoverBackgroundColor: [
					"rgba(230, 25, 75,1)",
					"rgba(60, 180, 75,1)",
					"rgba(255, 225, 25,1)",
					"rgba(0, 130, 200,1)",
					"rgba(245, 130, 48,1)",
					"rgba(70, 240, 240,1)",
					"rgba(240, 50, 230,1)",
					"rgba(250, 190, 212,1)",
					"rgba(0, 128, 128,1)",
					"rgba(220, 190, 255,1)",
					"rgba(170, 110, 40,1)",
					"rgba(255, 250, 200,1)",
					"rgba(128, 0, 0,1)",
					"rgba(170, 255, 195,1)",
					"rgba(0, 0, 128,1)",
					"rgba(128, 128, 128,1)"
				],
				borderWidth: 1,
				hoverOffset: 4
			}
		]
	}

	let options
	if (!loading)
	{
		data_ready.datasets[0].label = title
		data_ready.labels = labels
		data_ready.datasets[0].data = values
		options = {
			plugins: {
				legend: { position: "bottom" },
				title: {
					display: true,
					align: "center",
					fullSize: true,
					text: data_ready.datasets[0].label,
					font: { weight: "bold" }
				},
				tooltip: {
					callbacks: {
						label: function (tooltipItem) {
							console.log(tooltipItem)
							let sum = tooltipItem.dataset.data.reduce((pv, cv) => pv + cv, 0)
							const percentage =
								+((+tooltipItem.parsed / sum) * 100).toFixed(2) + "%"
							return [tooltipItem.label + ": " + tooltipItem.parsed, percentage]
						}
					}
				}
			}
		}
	}

	return (
		<div className="">
			{/* <div className="header">
				<h1 className="title">Client Type</h1>
			</div> */}
			<Doughnut data={data_ready} options={options} />
		</div>
	)
}

export default PieChart
