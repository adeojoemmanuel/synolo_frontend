import React from 'react'

/**
 * Icons
 */
import dropdownIcon from '../../../assets/icons/dropdown.svg';

const Registerstep3 = ({profile, handleChange}) => {
  return (
    <>
      <form className="register-form register-form--3">
        <h1 className="heading-primary register-heading">Choose your Investment Preferences</h1>
        <p>Fill in the form below with your contact details for verification purposes</p>

        <div className="col register-form__reset">
          <div className="col-1-of-2 register-investment-form">
            <label htmlFor="register-invest-amount" className = "register-investment-label">What amount are you prepared to invest per deal?</label>
             <select className = "register-investment-amount" id="register-invest-amount" 
             name="investmentAmount" 
             onChange={handleChange}
             value={profile.investmentAmount}>

               <option defaultValue disabled>Please Select</option>
               <option value = "100,000 >">100,000 above</option>
               <option value = "500,000 >">500,000 above</option>
               <option value = "1,000,000 >">1,000,000 above</option>
               <option value = "10,000,000 >">10,000,000 above</option>
             </select>
              <img src={dropdownIcon} alt="drop down icon" className="register-investment-amount--icon"/>
          </div>

          <div className="col-1-of-2 register-investment-form">
            <label htmlFor="register-invest-amount" className = "register-investment-label">How will you define your risk tolerance</label>
             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="averse" 
               name="riskTolerance"
               value="risk averse"
               checked={profile.riskTolerance === "risk averse"}
               onChange={handleChange}/>

               <label htmlFor="averse" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                 Risk Averse
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="moderate" 
               name="riskTolerance"
               value="moderate"
               checked={profile.riskTolerance === "moderate"}
               onChange={handleChange}/>

               <label htmlFor="moderate" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                 Moderate
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="tolerant" 
               name="riskTolerance"
               value="risk tolerant"
               checked={profile.riskTolerance === "risk tolerant"}
               onChange={handleChange}/>

               <label htmlFor="tolerant" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
                 Risk Tolerant
               </label>
             </div>
          </div>
        </div>

        <div className="col register-form__reset">

        <div className="col-1-of-2 register-investment-form">
            <label htmlFor="register-invest-amount" className = "register-investment-label">What is your main investment objective</label>
             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="income" 
               name="investmentObjective"
               value="income"
               checked={profile.investmentObjective === "income"}
               onChange={handleChange}/>

               <label htmlFor="income" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                Income
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="capital" 
               name="investmentObjective"
               value="growth of capital"
               checked={profile.investmentObjective === "growth of capital"}
               onChange={handleChange}/>

               <label htmlFor="capital" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                  Growth of Capital
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="liquidity" 
               name="investmentObjective"
               value="liquidity"
               checked={profile.investmentObjective === "liquidity"}
               onChange={handleChange}/>

               <label htmlFor="liquidity" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
                Liquidity
               </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="others" 
               name="investmentObjective"
               value="others"
               checked={profile.investmentObjective === "others"}
               onChange={handleChange}/>

               <label htmlFor="others" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
                Others
               </label>
             </div>

          </div>

          <div className="col-1-of-2 register-investment-form">
            <label htmlFor="register-invest-amount" className = "register-investment-label">What is your investment horizon?</label>
             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="3 years" 
               name="investmentHorizon"
               value="< 3 years"
               checked={profile.investmentHorizon === "< 3 years"}
               onChange={handleChange}/>

               <label htmlFor="3 years" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                 &lt; 3 years
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="5-years" 
               name="investmentHorizon"
               value="3-5 years"
               checked={profile.investmentHorizon === "3-5 years"}
               onChange={handleChange}/>

               <label htmlFor="5-years" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                 3-5 years
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="10-years" 
               name="investmentHorizon"
               value="5-10 years"
               checked={profile.investmentHorizon === "5-10 years"}
               onChange={handleChange}/>

               <label htmlFor="10-years" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
               5-10 Years
               </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="10-years-above" 
               name="investmentHorizon"
               value="> 10 years"
               checked={profile.investmentHorizon === "> 10 years"}
               onChange={handleChange}/>

               <label htmlFor="10-years-above" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
               > 10 Years
               </label>
             </div>
             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="noHorizon" 
               name="investmentHorizon"
               value="No Particular Horizon"
               checked={profile.investmentHorizon === "No Particular Horizon"}
               onChange={handleChange}/>
               <label htmlFor="noHorizon" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
               No Particular Horizon
               </label>
             </div>

          </div>
        </div>
        <div className="col register-form__reset">

        <div className="col-1-of-2 register-investment-form">
            <label htmlFor="register-invest-amount" className = "register-investment-label">What type of investments are you interested in</label>
             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="capitalappreciation" 
               name="investmentType"
               value="Capital Appreciation"
               checked={profile.investmentType === "Capital Appreciation"}
               onChange={handleChange}/>

               <label htmlFor="capitalappreciation" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                 Capital Appreciation
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="rental" 
               name="investmentType"
               value="Rental Income"
               checked={profile.investmentType === "Rental Income"}
               onChange={handleChange}/>

               <label htmlFor="rental" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                 Rental Income
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="invts" 
               name="investmentType"
               value="Interest"
               checked={profile.investmentType === "Interest"}
               onChange={handleChange}/>
               <label htmlFor="invts" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
               Interest
               </label>
             </div>



          </div>

          <div className="col-1-of-2 register-investment-form">
            <label htmlFor="register-invest-amount" className = "register-investment-label">What type of capital structures are you interested in ?</label>
             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="equity" 
               name="capitalStructure"
               value="equity"
               checked={profile.capitalStructure === "equity"}
               onChange={handleChange}/>
               <label htmlFor="equity" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                  Equity
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="preferred-equity" 
               name="capitalStructure"
               value="preferred equity"
               checked={profile.capitalStructure === "preferred equity"}
               onChange={handleChange}/>
               <label htmlFor="preferred-equity" className="register-investment-form__radio-label">
                 <span className="register-investment-form__radio-button"></span>
                  Preferred Equity
                </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="xyz" 
               name="capitalStructure"
               value="XYZ Equity"
               checked={profile.capitalStructure === "XYZ Equity"}
               onChange={handleChange}/>
               <label htmlFor="xyz" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
               XYZ Equity
               </label>
             </div>

             <div className="register-investment-form__radio-group">
               <input 
               type="radio" 
               className="register-investment-form__radio-input" 
               id="other-struct" 
               name="capitalStructure"
               value="Others"
               checked={profile.capitalStructure === "Others"}
               onChange={handleChange}/>
               <label htmlFor="other-struct" className="register-investment-form__radio-label">
               <span className="register-investment-form__radio-button"></span> 
                others
               </label>
             </div>

          </div>
        </div>



      </form>
    </>
  )
}

export default Registerstep3;


