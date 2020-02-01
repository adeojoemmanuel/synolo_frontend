import React, { useContext } from 'react';

/*
	Images
*/
import investor from "../../../assets/images/dashboard/dashboard.png";

/**
 * Components
 */
import ProgressBar from '../../../components/ProgressBar/progressbar.component';
import InvestorDashboardContext from '../../../context/investordashoard';

const OverviewInvestment = () => {
    const portfolio = useContext(InvestorDashboardContext);

    let fundProgress = 0;

    return (
        <>
            { 
                portfolio.map((port) => {
                    fundProgress = fundProgress + ((port.properties[0].raised / port.properties[0].worth) * 100)
                    console.log(fundProgress)
                    return (
                        port &&
                        <div className="investor-overview--investments-box">
                            <div className="investment-overview__imgbox">
                                <img src={investor} alt="investment" className="investment-overview--img" />
                            </div>
                            <div className="investor-overview__detailsbox">
                                <h3>{port.properties[0].name}</h3>
                                <div className="investor-overview-progress">
                                    <div className="investor-overview-progressbar">
                                        <ProgressBar percentRange={fundProgress} />
                                    </div>
                                    <h3>{fundProgress}% Funded</h3>
                                </div>
                            </div>

                            <div className="investor-overview__roi">
                                <h2 className="investor-overview-roi">&#8358; {port.properties[0].worth}</h2>
                                <div>ROI: {port.properties[0].roi}%</div>
                            </div>
                        </div>
                    )
                   
                })
            }
        </>

    )
}

export default OverviewInvestment;
