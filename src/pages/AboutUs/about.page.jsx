import React from 'react'

/*
	Components
*/
import StaticFooter from "../../components/StaticFooter/staticfooter.component";
import Header from "../../components/StaticHeader/header.component";
import ScrollToTopController from '../../components/ScrollTop/scrolltop.component';

/*
	Images
*/
import Cofounder1 from "../../assets/images/aboutpage/co-founder1.png";
import Cofounder2 from "../../assets/images/aboutpage/co-founder2.png";
import Cofounder3 from "../../assets/images/aboutpage/co-founder3.png";


const AboutPage = () => {
  const headerImg = "header-about";
  const headingText = "About Us";
  const descText = "We are technology, real estate and financial service professionals on a mission to create new opportunities for investors to take advantage of the positive returns real estate can provide. At the same time, we are helping re-developers access a new source of capital so they can focus on what they do best – finding and rehabilitating homes.";

  return (
    <>
      <ScrollToTopController />
      <div className="about section">
        <Header headerImg={headerImg} heading={headingText} desc={descText} />
        <main className="section">
          <section className="section section-wrap about-founders">
            <div className="u-center-text">
              <h1 className="heading-primary about-heading">
                Co-Founders
                            </h1>
              <div className="about__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                            </div>

              <div className="grid about-founders__grid">
                <div className="about-founders-box">
                  <div className="about-imgbox">
                    <img src={Cofounder1} alt="co-founder" className="about__img" />
                  </div>

                  <div className="about__text-info">
                    <h2 className="about__text--name">
                      Chidi Duncan
                                        </h2>

                    <p className="about__text--desc">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        </p>
                  </div>
                </div>

                <div className="about-founders-box">
                  <div className="about-imgbox">
                    <img src={Cofounder2} alt="co-founder" className="about__img" />
                  </div>

                  <div className="about__text-info">
                    <h2 className="about__text--name">
                      Lauretta Ekpo
                                        </h2>

                    <p className="about__text--desc">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        </p>
                  </div>
                </div>

                <div className="about-founders-box">
                  <div className="about-imgbox">
                    <img src={Cofounder3} alt="co-founder" className="about__img" />
                  </div>

                  <div className="about__text-info">
                    <h2 className="about__text--name">
                      Ayomide Owolabi
                    </h2>
                    <p className="about__text--desc">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-wrap about-boards">
            <div className="u-center-text">
              <h1 className="heading-primary about-heading">
                Governance Board
                            </h1>
              <div className="about__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                            </div>
            </div>
          </section>

          <section className="section section-wrap about-boards">

            <div className="u-center-text">
              <h1 className="heading-primary about-heading">
                Our Team
                                </h1>
              <div className="about__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </div>

              <div className="grid about-team__grid">
                <div className="about-team-box">
                  <div className="about-imgbox">
                    <img src={Cofounder3} alt="co-founder" className="about__img about__img--team" />
                  </div>

                  <h2 className="about__text--name">
                    Ayomide Owolabi
                                        </h2>
                </div>

                <div className="about-team-box">
                  <div className="about-imgbox">
                    <img src={Cofounder2} alt="co-founder" className="about__img about__img--team" />
                  </div>

                  <h2 className="about__text--name">
                    Ayomide Owolabi
                                        </h2>
                </div>

                <div className="about-team-box">
                  <div className="about-imgbox">
                    <img src={Cofounder1} alt="co-founder" className="about__img about__img--team" />
                  </div>

                  <h2 className="about__text--name">
                    Ayomide Owolabi
                                        </h2>
                </div>

                <div className="about-team-box">
                  <div className="about-imgbox about-imgbox--team">
                    <img src={Cofounder2} alt="co-founder" className="about__img about__img--team" />
                  </div>

                  <h2 className="about__text--name">
                    Ayomide Owolabi
                                        </h2>
                </div>
              </div>

              <div className="grid about-team__grid">
                <div className="about-team-box">
                  <div className="about-imgbox">
                    <img src={Cofounder3} alt="co-founder" className="about__img about__img--team" />
                  </div>

                  <h2 className="about__text--name">
                    Ayomide Owolabi
                                        </h2>
                </div>

                <div className="about-team-box">
                  <div className="about-imgbox">
                    <img src={Cofounder2} alt="co-founder" className="about__img about__img--team" />
                  </div>

                  <h2 className="about__text--name">
                    Ayomide Owolabi
                                        </h2>
                </div>

                <div className="about-team-box">
                  <div className="about-imgbox">
                    <img src={Cofounder1} alt="co-founder" className="about__img about__img--team" />
                  </div>

                  <h2 className="about__text--name">
                    Ayomide Owolabi
                                        </h2>
                </div>

                <div className="about-team-box">
                  <div className="about-imgbox about-imgbox--team">
                    <img src={Cofounder2} alt="co-founder" className="about__img about__img--team" />
                  </div>

                  <h2 className="about__text--name">
                    Ayomide Owolabi
                                        </h2>
                </div>
              </div>
            </div>

          </section>


          {/* 

                        HIRING SECTION (FUTURE USE)


                      */}

          {/* <section className="section section-wrap section-hiring">
                        <h1 className="heading-primary about-heading">
                            We're Hiring!
                        </h1>

                        <div className="col">
                            <div className="col-1-of-2">
                                <div className="heading-primary--sub about-heading">
                                    Want to join the team? There may be a role you will fit into perfectly. Vacancies exist.
                                </div>
                            </div>

                            <div className="col-1-of-2">
                            <button className="btn btn--small btn--uppercase btn--round btn--orange">
                                view available positions
					        </button>
                            </div>
                        </div>
                    </section> */}

          <StaticFooter />
        </main>
      </div>
    </>
  )
}

export default AboutPage;
