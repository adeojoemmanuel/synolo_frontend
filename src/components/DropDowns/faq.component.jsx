import React, {useState} from 'react';


/**
 * Icons
 */
import dropdownIcon from '../../assets/icons/dropdown.svg';
import dropupIcon from '../../assets/icons/dropup.svg';

const FAQDropdown = ({title, desc}) => {

  const [active, setActive] = useState("");

  function toggleActive() {
    setActive(active === "" ? "active" : "");
  }


  return (
    <div className={`section-wrap section-faq__card card ${active}`} onClick={toggleActive}>
      <div className="section-faq__box">
        <h1 className="section-faq--title">{title}</h1>
        <img src={active === "" ? dropdownIcon : dropupIcon} alt="dropIcon" />
      </div>

      {active !== "" &&
        <div className="section-faq__content">
          <hr />
          <p>{desc}</p>
        </div>
      }
    </div>
  )
}

export default FAQDropdown;