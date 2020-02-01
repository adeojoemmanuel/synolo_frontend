import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const SideBar = () => {
	let location = useLocation().pathname;
	
	return (
		<aside className="sidebar">
			<div className="sidebar-box">
				<Link to='/dashboard/investor'>
					<div
						className={location === '/dashboard/investor' ? "sidebar-nav active" : "sidebar-nav"}>
						<h1>Overview</h1>
					</div>
				</Link>

				<Link to='/dashboard/investor/insight'>
					<div
						className={location.includes("insight") ? "sidebar-nav active" : "sidebar-nav"}
					>
						<h1>Insight</h1>
					</div>
				</Link>

				<Link to='/dashboard/investor/portfolio'>
					<div
						className={location.includes("portfolio") ? "sidebar-nav active" : "sidebar-nav"}
					>
						<h1>My Porfolio</h1>
					</div>

				</Link>

				<Link to='/dashboard/investor/watchlist'>
					<div
						className={location.includes("watchlist") ? "sidebar-nav active" : "sidebar-nav"}
					>
						<h1>Watchlist</h1>
					</div>
				</Link>

				<Link to="/dashboard/investor/settings">
					<div
						className={location.includes("settings") ? "sidebar-nav active" : "sidebar-nav"}
					>
						<h1>Settings</h1>
					</div>
				</Link>

			</div>

		</aside>
	)
}

export default SideBar;
