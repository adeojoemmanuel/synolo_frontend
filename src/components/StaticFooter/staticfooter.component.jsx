import React from 'react'

/*
	Components
*/
import Footer from "../Footer/footer.component";

/*
	Images
*/
import Grow from "../../assets/images/grow.svg";

const StaticFooter = () => {
  return (
    <>
      <section className="section-staticfooter">

        {/* <section className="section section-wrap section-partners">
                <div className="u-center-text">
                    <h1 className="heading-primary section-partners__heading">
                        Patners
                    </h1>
                </div>
            </section> */}

        <section className="section section-grow">
          <div className="col section-wrap section-grow__grid">
            <div className="col-1-of-2">
              <img src={Grow} alt="grow your money" className="section-grow__img" />
            </div>

            <div className="col-1-of-2">
              <div className="u-center-text">
                <h1 className="heading-primary section-grow__heading">
                  Grow your Money
                </h1>

                <h2 className="heading-primary--sub section-grow-text--sub">
                  Join thousands of other as we create and invest in real estate opportunities.
                </h2>

                <button className="btn btn--small btn--uppercase btn--round btn--orange btn--shadow">
                  Get started
					        </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </>
  )
}

export default StaticFooter