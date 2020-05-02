import React, { Component } from "react";

class TraficLights extends Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}
	render() {
		console.log(this.state);
		var redExtraClass = "";
		if (this.state.clickedLight == "red") redExtraClass = "selected";

		var yellowExtraClass = "";
		if (this.state.clickedLight == "yellow") yellowExtraClass = "selected";

		var greenExtraClass = "";
		if (this.state.clickedLight == "green") greenExtraClass = "selected";

		return (
			<div className="content ">
				<div className="trafic-top" />
				<div className="container">
					<div
						className={"red light " + redExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
export default TraficLights;
