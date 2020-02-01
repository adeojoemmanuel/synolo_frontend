import React from 'react'

/**
 * Components
 */
import Header from '../../components/StaticHeader/header.component';
import StaticFooter from '../../components/StaticFooter/staticfooter.component';
import ScrollToTopController from '../../components/ScrollTop/scrolltop.component';

/**
 * Images
 */
import nigeria from '../../assets/images/Market/nigeria.png';
import west from '../../assets/images/Market/west.png';
import global from '../../assets/images/Market/global.png';

const Market = () => {
  const headingText = "About The Market";
  const descText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.";
  const headerImg = "header-market"


  return (
    <>
      <ScrollToTopController />
      <Header headerImg={headerImg} heading={headingText} desc={descText} />
      <section className="section section-wrap">
        <div className="col section-market">
          <div className="col-1-of-4">
            <img src={nigeria} alt="nigeria" className="section-market--img" />
          </div>

          <div className="col-2-of-4">
            <div className=" section-market--nigeria">
              <div className="section-market-textbox">
                <h1 className="heading-small section-market-textbox--heading">
                  Nigeria
                </h1>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.

                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd </p>
              </div>
            </div>

          </div>
        </div>

        <div className="col section-market">
          <div className="col-2-of-4">
            <div className=" section-market--west">
              <div className="section-market-textbox">
                <h1 className="heading-small section-market-textbox--heading">
                  West Africa
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.

                  Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                </p>
              </div>
            </div>
          </div>

          <div className="col-1-of-4">
            <img src={west} alt="west-africa" className="section-market--img" />
          </div>
        </div>

        <div className="col section-market">
          <div className="col-1-of-4">
            <img src={global} alt="global" className="section-market--img" />
          </div>

          <div className="col-2-of-4">
            <div className=" section-market--global">
              <div className="section-market-textbox">
                <h1 className="heading-small section-market-textbox--heading">
                  Global
                </h1>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.

                Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <StaticFooter />
    </>
  )
}

export default Market;