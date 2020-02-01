import React, { useEffect, useState } from 'react';
import SideBar from '../../../components/SiderBar/sidebar.component';
import ProfileNavigation from '../../../components/Navigation/profileNavigation.component';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Loader from '../../../components/Loader/loader.component';
import { API } from '../../../helpers/api.helpers';
import InvestorDashboardContext from '../../../context/investordashoard';

const OverView = React.lazy(() => import("./overview.page"));
const Insights = React.lazy(() => import("./insights.page"));
const Portfolio = React.lazy(() => import("./portfolio.page"));
const Watchlist = React.lazy(() => import("./watchlist.page"));




const routes = [
	{
		path: "/dashboard/investor",
		exact: true,
		goto: <OverView />
	},
	{
		path: "/dashboard/investor/insight",
		exact: true,
		goto: <Insights />
	},
	{
		path: "/dashboard/investor/insight/:id",
		goto: <Insights />
	},
	{
		path: "/dashboard/investor/portfolio",
		goto: <Portfolio />
	},
	{
		path: "/dashboard/investor/watchlist",
		goto: <Watchlist />
	},
	
];

const InvestorDashBoard = () => {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const result = await API.get(
			"/portfolio/v1/profile"
		);
		setData(result.data);
	};

	useEffect(() => {
		fetchData();
	}, []);


	console.log(data)

	return (
		<Router>
			<React.Suspense fallback={<Loader />}>
				<InvestorDashboardContext.Provider value={data} >
					<div className="dashboard">
						<ProfileNavigation />
						<div className="dashboard-box">
							<div className="dashboard-box__grid">
								<SideBar />
								<section className="main-view">
									<Switch>
										{routes.map((route, index) => (
											<Route
												key={index}
												path={route.path}
												exact={route.exact}
												children={route.goto}
											/>
										))}
									</Switch>

								</section>

							</div>

						</div>
					</div>
				</InvestorDashboardContext.Provider>
				

			</React.Suspense>
		</Router>

			
		

	)
}

export default InvestorDashBoard;