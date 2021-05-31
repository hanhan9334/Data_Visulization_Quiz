import React from "react"
import Button from "./fragments/Button"

const ClientSection = ({ summary, loading }) => {
	const [hide, setHide] = React.useState(true)
	const title = "Client"

	return (
		<div style={{ textAlign: "center" }} onClick={() => setHide(false)}>
			<Button
				textTop={title}
				textBack={loading ? "loading" : summary["Client"]}
			/>
			{hide ? (
				<div></div>
			) : (
				<div style={{ textAlign: "center" }}>Data is not available</div>
			)}
		</div>
	)
}

export default ClientSection
