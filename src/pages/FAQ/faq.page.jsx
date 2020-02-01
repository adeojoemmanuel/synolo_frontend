import React from 'react';

/*
	Components
*/
import Header from "../../components/StaticHeader/header.component";
import StaticFooter from "../../components/StaticFooter/staticfooter.component";
import FAQDropdown from '../../components/DropDowns/faq.component';
import ScrollToTopController from '../../components/ScrollTop/scrolltop.component';

const options = [
  { title: "Who can invest?", desc: "Only accredited members who meet our KYC requirements can invest.", open: "false" },
  { title: "What Is the minimum investment?", desc: "Members are able to buy a minimum of 1% and maximum of 100% of any of our available projects on our platform.", open: "false" },
  {
    title: "What does each percentage unit offer?",
    desc: "Each percentage unit offers an investor beneficial ownership which entitles you to corresponding returns i.e. interest, rental Income and capital appreciation."
  },
  { title: "How do I choose the projects to invest into?", desc: "This will be based on your investment appetite, whether you want to use our investment vehicle to save towards your child’s university or, just to enjoy returns from capital appreciation for a period of time" },
  { title: "What if the project I invested in, does not get fully subscribed to?", desc: "The investments are open for subscription for a period of 60days. Where the investment does not get full funding in this period, you have the option to extend the investment, or ask for a return." },
  { title: "When do I get paid?", desc: "For Synollo Co-shared Purchase and Deferred Sale and Short term Property Development Investments, you are paid at the end of your investment cycle. For Co-shared Build, Manage and Sell, you get rental income annually, i.e. after building construction, and capital appreciation at point of sale." },
  { title: "What happens where I want to pull out of an active investment?", desc: "Following calculation of the Net Present Value of the investment, Synollo will put up your investment units for sale on Synollo platform as a secondary sale. However, the sale will be on the premise of finding a willing buyer and at a discounted rate, to give value to the new buyer." },
  { title: "Can I invest in more than one project?", desc: "Yes, Synollo always advises our members to invest in different projects for portfolio diversification. You can decide to invest NGN300,000 every other month for different projects" },
  { title: "Can my investment be transferred?", desc: "Yes, your investment can be transferred. You can transfer your Synollo investment to your next of kin, child or relative (as you deem fit). However, there is an associated cost involved in changing the beneficial owner of the investment." },
  { title: "Are there fees for managing the investment?", desc: "Yes, there is a 5% transaction processing fee per project you invest in. No, the cost of the acquisition already factors a charge" },
  { title: "Do I receive frequent reports?", desc: "Yes, each investor will get a report based on the type of project they have invested in." },
  { title: "How is Risk managed?", desc: "To protect the interest of Synollo members, we have appointed XXX Trustees acts as the Trustee to provide Trustee and Nominee Services to Synollo members. The trustee holds title of all assets, and maintains a register of our member contributors, and ensures strict compliance with the transaction agreement and investment guidelines." },
  { title: "Are the projects insured?", desc: "Yes, each project has insurance by a tier 1 insurance company to secure against fire, flood and other related damages." },
  { title: "How do I protect myself from land encroachment, during the investment cycle.", desc: "We only invest in assets which are not encumbered or affected by litigation, to avoid “stories that touch”. In addition the investment cost covers for perfection of the document, and land protection sometimes in form of fencing." },
  { title: "Is my information filled out on the platform secure?", desc: "Yes, Synollo uses XXX compliant technology to safe guard your information" },
  { title: "How do I know when the option I invested in is fully subscribed to?", desc: "You can check this on your investment dashboard. Also you are notified of all milestones via mail. These include – date of investment, date of full subscription, date of perfection and registration of the Trust amongst others." }

];



const FAQ = () => {
  const headingText = "Frequently Asked Questions";
  const descText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.";
  const headerImg = "header-faq"

  return (
    <>
      <ScrollToTopController />
      <Header headerImg={headerImg} heading={headingText} desc={descText} />
      <section className="section section-wrap section-faq">
        {
          options.map((option, i) => {
            console.log(option.title);
            return <FAQDropdown title={option.title} desc={option.desc} key={i} />
          })
        }

      </section>
      <StaticFooter />
    </>
  )
}

export default FAQ;
