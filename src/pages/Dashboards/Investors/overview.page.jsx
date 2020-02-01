import React, { useContext } from 'react';
import Loader from "../../../components/Loader/loader.component";
import InvestorDashboardContext from '../../../context/investordashoard';
import WatchlistOverView from './overview-watchlist.component';

/**
 * Components
 */
const OverviewInvestment = React.lazy(() => import("./overview-investment.component"));



const OverView = () => {
    const portfolio = useContext(InvestorDashboardContext);
    let totalReturns = 0;
    let totalProperty = 0;

    portfolio.map((ports) => {
       totalReturns = totalReturns + ports.returns;
       return totalProperty = totalProperty + ports.properties[0].worth;
    })

    // const totalPortfolioWorth = 

    return (
        <main className="investor-overview">
            <div className="investor-overview__top">
                <h1 className="investor-overview-heading">
                    OverView
                </h1>
                <div className="investor-overview__top-box">
                    <div className="investor-overview--portfolio">
                        <div className="investor-overview-details">
                            <h3>Total Property Invested Worth</h3>
                            <h1>&#8358; {totalProperty}</h1>
                        </div>
                        <div className="investor-overview-details">
                            <h3>Total Expected Returns</h3>
                            <h1>&#8358; {totalReturns}</h1>
                        </div>
                        <div className="investor-overview-details">
                            <h3>Average Portfolio returns</h3>
                            <h1>&#8358; {isNaN(totalReturns / portfolio.length) ? 0 : totalReturns / portfolio.length}</h1>
                        </div>
                        <div className="investor-overview-details">
                            <h3>No. Of Investments</h3>
                            <h1>{portfolio.length}</h1>
                        </div>

                    </div>

                    <div className="investor-overview--investments">
                        <h2>Your Investments</h2>
                        <React.Suspense fallback={<Loader />}>
                            <OverviewInvestment />
                        </React.Suspense>
                    
                    </div>
                    
                </div>
            </div> 

            <div className="investor-overview__bottom">
                <div className="card investor-overview__card">
                    <div className="investor-overview__card--header">
                        Your Watchlist
                    </div>
                    <div className="investor-overview__card--body">
                        <WatchlistOverView />
                    </div>
                </div>
                <div className="card investor-overview__card">
                    <div className="investor-overview__card--header">
                        Recent Investment
                    </div>
                    <div className="investor-overview__card--body">
                        <WatchlistOverView />
                        <WatchlistOverView />
                    </div>
                </div>
            </div> 
        </main>
    )
}

export default OverView;
