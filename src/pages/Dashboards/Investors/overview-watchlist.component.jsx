import React, { useEffect, useState } from 'react'

import ProgressBar from '../../../components/ProgressBar/progressbar.component';

/*
	Images
*/
import investor from "../../../assets/images/dashboard/dashboard.png";
import { API } from '../../../helpers/api.helpers';

const WatchlistOverView = () => {
	const [data, setData] = useState(null);
	let fundProgress = 0;

	useEffect(() => {
		const fetchData = async () => {
			let result;

			result = await API.get(
				"/watchlist/v1/profile"
			);


			setData(result.data);
		};
		fetchData();
	}, [])

	return (
		<>

			{
				data && data.properties.map((port) => {
					fundProgress = fundProgress + ((port.raised / port.worth) * 100)
					console.log(fundProgress)
					return (
						<div className="investor-overview--investments-box">
							<div className="investment-overview__imgbox">
								<img src={investor} alt="investment" className="investment-overview--img" />
							</div>
							<div className="investor-overview__detailsbox">
								<h3>{port.name}</h3>
								<div className="investor-overview-progress">
									<div className="investor-overview-progressbar">
										<ProgressBar percentRange={fundProgress} />
									</div>
									<h3>{fundProgress}% Funded</h3>
								</div>
							</div>

							<div className="investor-overview__roi">
								<h2 className="investor-overview-roi">&#8358; {port.worth}</h2>
								<div>ROI: {port.roi}%</div>
							</div>
						</div>
					)

				})
			}

		</>

	)
}

export default WatchlistOverView;
