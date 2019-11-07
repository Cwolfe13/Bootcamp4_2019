import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const data = this.props.data
			.filter(buildinglist => {
				return buildinglist.id === this.props.selectedBuilding
			})
			.map(buildinglist => {
				return(
					<tr key={buildinglist.id}>
						<li>Building code: {buildinglist.code} </li>
						<li>Building name: {buildinglist.name} </li>
						{buildinglist.address !== undefined ? <li>Building address: {buildinglist.address}</li> : null}
					</tr>
				)
			});

		return (
				<div>
					<p>
						<i>Click a listing for more information:</i>
						{data}
					</p>
				</div>
			);

	}
}

export default ViewBuilding;
