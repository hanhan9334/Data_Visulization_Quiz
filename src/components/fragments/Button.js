import React from "react"
import "./Button.css"

const Button = ({ textTop, textBack, loading }) => {
	return (
		<div className="ui vertical animated button button-container" style={{margin:"auto"}} tabIndex="0">
			<div>
				<div className="visible content">{textTop}</div>
				<div className="hidden content">{textBack}</div>
			</div>
		</div>
	)
}

export default Button
