import React, { useState, useEffect } from 'react'
import Cards from '../../../components/Cards/cards.component'

/*
	Images
*/
import investor from "../../../assets/images/dashboard/dashboard.png";
import { API } from '../../../helpers/api.helpers';


const Portfolio = () => {

	const [data, setData] = useState(null);

	let fundProgress = 0;

	useEffect(() => {
		const fetchData = async () => {
			let result;

			result = await API.get(
				"/portfolio/v1/profile"
			);


			setData(result.data);
		};
		fetchData();
	}, [])

	return (
		<div className="investor-insight">
			{data && data.map((port, index) => {
				console.log(port.properties[0].worth);
				fundProgress = fundProgress + ((port.properties[0].raised / port.properties[0].worth) * 100)
				return <Cards image={investor} header={port.properties[0].name} description={port.properties[0].description} pecnt={fundProgress} returns={port.returns} raised={port.properties[0].raised} roi={port.properties[0].roi} tenure={port.years} />
})}
		</div>
	)
}

export default Portfolio;
