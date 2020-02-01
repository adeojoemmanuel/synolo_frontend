import React from 'react';

import ProgressBar from '../ProgressBar/progressbar.component';
import { Link } from 'react-router-dom';

const Cards = ({ image, header, description, pecnt, returns, raised, roi, tenure }) => {
	return (
		<>
			<div className="profile-card">
				{image && <div className="profile-card__image">
					<img src={image} alt={image} />
				</div>}

				<h1 className="profile-card__header">
					{header}
				</h1>

				<p className="profile-card__description">
					{description}
				</p>

				<div className="profile-card__funds">
					<div className="profile-card-progress">
						<div className="profile-card-progressbar">
							<ProgressBar percentRange={pecnt} />
						</div>
						<h3>{`${pecnt}% Funded `}</h3>
					</div>

					<div className="profile-card-returns">
						<h3>Returns</h3>
						<h2>&#8358;{`${returns}`}</h2>
					</div>
				</div>

				<div className="profile-card__bottom">
					<div className="profile-card-raised">
						<h3>Raised</h3>
						<h2>&#8358;{`${raised}`}</h2>
					</div>

					<div className="profile-card-raised">
						<h3>roi</h3>
						<h2>{`${roi}%`}</h2>
					</div>

					<div className="profile-card-raised">
						<h3>investment tenure</h3>
						<h2>{tenure}</h2>
					</div>

				</div>
				<button className="profile-card__button">View</button>
			</div>


		</>
	)
}

const WatchlistCard = ({ image, header, description, pecnt, raised, roi, id }) => {
	console.log(id);
	return (
		<>
			<div className="profile-card">
				{image && <div className="profile-card__image">
					<img src={image} alt={image} />
				</div>}

				<h1 className="profile-card__header">
					{header}
				</h1>

				<p className="profile-card__description">
					{description}
				</p>

				<div className="profile-card__funds">
					<div className="profile-card-progress">
						<div className="profile-card-progressbar">
							<ProgressBar percentRange={pecnt} />
						</div>
						<h3>{`${pecnt}% Funded `}</h3>
					</div>

					<div className="profile-card-raised">
						<h3>Raised</h3>
						<h2>&#8358;{`${raised}`}</h2>
					</div>

					<div className="profile-card-raised">
						<h3>roi</h3>
						<h2>{`${roi}%`}</h2>
					</div>
				</div>
				<Link to={`/dashboard/investor/insight/${id}`}>
					<button className="profile-card__button" >View</button>
				</Link>
				
			</div>


		</>
	)
}

export default Cards;

export { WatchlistCard };
