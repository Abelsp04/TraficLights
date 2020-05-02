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
		return (
			<div className="content">
				<div className="trafic-top" />
				<div className="container">
					<div
						className="red-light "
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className="yellow-light"
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className="green-light"
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
export default TraficLights;
