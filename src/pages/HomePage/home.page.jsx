import React from 'react'

/**
 * 	Third party Packages
 */
import Carousel from 'nuka-carousel';

/*
	Components
*/
import Header from "../../components/StaticHeader/header.component";
import StaticFooter from "../../components/StaticFooter/staticfooter.component";

/*
	Images
*/
import signup from "../../assets/images/Homepage/signup.svg";
import dashboard from "../../assets/images/Homepage/dashboard.svg";
import explore from "../../assets/images/Homepage/explore.svg";
import payment from "../../assets/images/Homepage/payment.svg";
import reward from "../../assets/images/Homepage/reward.svg";

/*
	Icons
*/
import opp from "../../assets/icons/opportunity-small.svg";
import job from "../../assets/icons/job.svg";
import sub from "../../assets/icons/sub.svg";
import distributed from "../../assets/icons/distributed.svg";
import home from "../../assets/icons/home.svg";
import mortgage from "../../assets/icons/mortgage.svg";
import capital from "../../assets/icons/capital.svg";
import danger from "../../assets/icons/danger.svg";
import invest from "../../assets/icons/invest.svg";
import land from "../../assets/icons/land.svg";
import develop from "../../assets/icons/develop.svg";
import cancel from "../../assets/icons/cancel.svg";


export default function HomePage() {
  const headingText = "Unlock Real Estate Opportunities";
  const descText = "Synollo is a members only Real Estate Contributory Investment and Process Simplification Platform, used to aggregate resources via crowd funding and co-ownership";
  const headerImg = "header-home";

  return (
    <>
      <div className="homepage section">
        <Header headerImg={headerImg} heading={headingText} desc={descText} />

        <main className="section">
          <section className="section section-wrap section-record">
            <div className="u-uppercase-text">
              <h1 className="heading-small record-header">Our track record</h1>
            </div>

            <div className="col section-record__col">
              <div className="col-1-of-4 card section-record__card section-record__opp">
                <div className="u-center-text">
                  <div className=" section-record-content">
                    <img src={opp} alt="opportunity" className="section-record--img" />

                    <p>Opportunities</p>

                    <div className="section-record--amount">
                      10
										</div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-4 card section-record__card section-record__job">
                <div className="u-center-text">
                  <div className=" section-record-content">
                    <img src={job} alt="opportunites value" className="section-record--img" />

                    <p>Opportunities Value</p>

                    <div className="section-record--amount">
                      20M
										</div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-4 card section-record__card section-record__sub">
                <div className="u-center-text">
                  <div className=" section-record-content">
                    <img src={sub} alt="subscriptions" className="section-record--img" />

                    <p>Subscriptions</p>

                    <div className="section-record--amount">
                      1M
										</div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-4 card section-record__card section-record__dis">
                <div className="u-center-text">
                  <div className=" section-record-content">
                    <img src={distributed} alt="cashdistributed" className="section-record--img" />

                    <p>Cash Distributed</p>

                    <div className="section-record--amount">
                      -
										</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-invest">
            <div className="section-wrap">
              <h1 className="heading-small section-invest__heading">How to Access Investment  Opportunities on Synollo</h1>
              <div className="section-invest__box">
                <Carousel autoplay={true} wrapAround={true} speed={1000}>
                  <div className="col section-invest__grid">
                    <img src={signup} alt="signup" className="section-invest--img" />
                    <div className="section-invest--text">
                      <h1>Scope the market for opportunities</h1>
                      <p> Land, Asset or Property acquisitions, Property Development, JV Opportunities, Lease,  Property Optimization, Distressed Property Sales</p>
                    </div>

                  </div>
                  <div className="col section-invest__grid">
                    <img src={dashboard} alt="dashboard" className="section-invest--img" />
                    <div className="section-invest--text">
                      <h1>Get to the dashboard</h1>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                  </div>

                  <div className="col section-invest__grid">
                    <img src={explore} alt="explore" className="section-invest--img" />
                    <div className="section-invest--text">
                      <h1>Explore investments</h1>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                  </div>

                  <div className="col section-invest__grid">
                    <img src={payment} alt="payment" className="section-invest--img" />
                    <div className="section-invest--text">
                      <h1>Make payment</h1>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                  </div>

                  <div className="col section-invest__grid">
                    <img src={reward} alt="reward" className="section-invest--img" />
                    <div className="section-invest--text">
                      <h1>Get paid at maturity or rent due date</h1>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </section>

          <section className="section-wrap ">
          <h1 className="heading-small">Our Services</h1>
            <div className="col section-services__grid">
              <div className="col-1-of-2 section-services__property section-services__box">
                <img src={home} alt="home" className="section-services__icon" />
                <p>Property Lease/Rentals/ Sell</p>
              </div>
              <div className="col-1-of-2 section-services__perfection section-services__box">
                <img src={mortgage} alt="mortgage" className="section-services__icon" />
                <p>Title Perfection</p>
              </div>
            </div>
          </section>

          <section className="section section-wrap section-risk">
            <h1 className="heading-small section-risk__heading">Risks in Real Estate Investments and How Synollo makes best effort to Mitigate them</h1>

            <div className="col">
              <div className="col-1-of-3 card section-risk-box">
                <img src={capital} alt="capital" className="section-risk--img" />
                <h1>Capital</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
              </div>
              <div className="col-1-of-3 card section-risk-box">
                <img src={danger} alt="danger" className="section-risk--img" />
                <h1>Income Risks</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
              </div>
              <div className="col-1-of-3 card section-risk-box">
                <img src={invest} alt="invest" className="section-risk--img" />
                <h1>Investment Liquidity Risks</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
              </div>
              <div className="col-1-of-3 card section-risk-box">
                <img src={land} alt="land" className="section-risk--img" />
                <h1>Land Revocation Risk</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
              </div>
              <div className="col-1-of-3 card section-risk-box">
                <img src={develop} alt="develop" className="section-risk--img" />
                <h1>Developer Risks</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
              </div>
              <div className="col-1-of-3 card section-risk-box">
                <img src={cancel} alt="cancel" className="section-risk--img" />
                <h1>No Cancellation Rights</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore,
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labor
								</p>
              </div>
            </div>
          </section>
        </main>
        <StaticFooter />
      </div>
    </>
  )
}
