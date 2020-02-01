import React, { useState } from 'react';

import { Transaction, Card } from 'paystack-js';

import investor from "../../../../assets/images/dashboard/dashboard.png";
import success from "../../../../assets/images/dashboard/success.svg";
import { API } from '../../../../helpers/api.helpers';

const FirstStep = ({ data, payment, handlePaymentChange, setInvest }) => (
    <div>
        <section className="invest-modal__top">
            <div className="invest-modal-box">
                <div className="invest-modal-imgbox">
                    <img src={investor} alt="" className="invest-modal--img" />
                </div>
                <div className="invest-modal-details">
                    <h1>{data.name}</h1>
                    <h2>{data.location}</h2>

                    <div className="invest-modal-roi">
                        <h1>roi</h1>
                        <h2>{data.roi}%</h2>
                    </div>
                </div>
            </div>
            <hr />
        </section>

        <section className="invest-modal__bottom">

            <div className="invest-modal__input">
                <h2>How much do you want to invest? <strong>(&#8358;)</strong></h2>
                <input type="number" name="amountPaid" onChange={(e) => handlePaymentChange(e)} value={payment.amountPaid} />
            </div>

            <div className="invest-modal__input">
                <h2>What is the tenure of your investment? <strong>(In Years)</strong></h2>
                <input type="number" name="years" onChange={handlePaymentChange} value={payment.years} />
            </div>

            <button className="btn btn--small btn--uppercase btn--round btn--orange btn--focus" onClick={() => setInvest(1)}>continue</button>
        </section>

    </div>
)

const SecondStep = ({ data, handlePaymentChange, setInvest, payment }) => {
    return (
        <div>
            <section className="invest-modal__top">
                <div className="invest-modal-box">
                    <div className="invest-modal-imgbox">
                        <img src={investor} alt="" className="invest-modal--img" />
                    </div>
                    <div className="invest-modal-details">
                        <h1>{data.name}</h1>
                        <h2>{data.location}</h2>

                        <div className="invest-modal-roi">
                            <h1>roi</h1>
                            <h2>{data.roi}%</h2>
                        </div>
                    </div>
                </div>
                <hr />
            </section>

            <section className="invest-modal__bottom">

                <div className="invest-modal__input">
                    <h2>Enter your debit card details</h2>
                    <input type="number" name="cardNumber" placeholder="Card Number" onChange={handlePaymentChange} value={payment.cardNumber} />
                </div>

                <div className="invest-modal__input">
                    <div className="invest-modal-grid">
                        <input type="number" name="expireMonth" placeholder="MM" onChange={handlePaymentChange} value={payment.expireMonth} />
                        <input type="number" name="expireYear" placeholder="YY" onChange={handlePaymentChange} value={payment.expireYear} />
                        <input type="password" name="cvv" placeholder="CVV" onChange={handlePaymentChange} value={payment.cvv} />
                    </div>
                </div>

                <button className="btn btn--small btn--uppercase btn--round btn--orange btn--focus" onClick={() => setInvest(2)}>continue</button>
            </section>

        </div>
    )
}

const ThirdStep = ({ data, handlePaymentChange, attemptPayment, payment }) => {
    return (
        <div>
            <section className="invest-modal__top">
                <div className="invest-modal-box">
                    <div className="invest-modal-imgbox">
                        <img src={investor} alt="" className="invest-modal--img" />
                    </div>
                    <div className="invest-modal-details">
                        <h1>{data.name}</h1>
                        <h2>{data.location}</h2>

                        <div className="invest-modal-roi">
                            <h1>roi</h1>
                            <h2>{data.roi}%</h2>
                        </div>
                    </div>
                </div>
                <hr />
            </section>

            <section className="invest-modal__bottom">

                <div className="invest-modal__input">
                    <h2>Enter your Enter Card Pin</h2>
                    <input type="number" name="cardPin" placeholder="Card Pin" onChange={handlePaymentChange} value={payment.cardPin} />
                </div>

                <button type="submit" className="btn btn--small btn--uppercase btn--round btn--orange btn--focus" onClick={attemptPayment}>make payment</button>
            </section>

        </div>
    )
}
const FourthStep = ({  data, payment }) => {
    return (
        <div>
            <section className="invest-modal__top">
                <div className="invest-modal-box">
                    <div className="invest-modal-imgbox">
                        <img src={investor} alt="" className="invest-modal--img" />
                    </div>
                    <div className="invest-modal-details">
                        <h1>{data.name}</h1>
                        <h2>{data.location}</h2>

                        <div className="invest-modal-roi">
                            <h1>roi</h1>
                            <h2>{data.roi}%</h2>
                        </div>
                    </div>
                </div>
                <hr />
            </section>

            <section className="invest-modal__bottom">
                <div className="invest-modal__success">
                    <div className="invest-modal__success--img">
                        <img src={success} alt="success" />
                    </div>
                    <h1>Your transaction was successful!</h1>
                    <h2>{`You have successfully purchased N${payment.amount} worth of investment in`} <span>{`${data.name}`}</span></h2>
                </div>
            </section>

        </div>
    )
}

const initialState = {
    amountPaid: null,
    years: "",
    cardNumber: "",
    expireMonth: "",
    expireYear: "",
    cvv: "",
    cardPin: ""
};


export const PropertyModal = ({ data }) => {
    const [payment, setPayment] = useState(initialState);
    const [invest, setInvest] = useState(0);

    // const handleA = async () => {
    //     setError("");
    //     try {
            
    //     } catch (err) {
    //         errorHandler(err.response.data.error, setError);
    //     }

    // }


    const handlePaymentChange = (event) => {
        event.preventDefault();
        setPayment({
            ...payment,
            [event.target.name]: event.target.value
        });
    };
    const attemptPayment = async (e) => {
        e.preventDefault()

        const createPortfolio = {
            propertyId: data.id,
            amountPaid: parseInt(payment.amountPaid),
            years: payment.years
        }

        console.log("created port", createPortfolio)

        const requestData = {
            email: 'customer@email.com',
            amount: parseInt(payment.amountPaid) * 100, // amount in kobo
            key: 'pk_test_7ba0aaceedcecce5291d23553c0a53f5b7bc2a87',
        };

        // Request a new transaction
        const transaction = await Transaction.request(requestData);

        // Create a payment method instance that will be used e.g card
        const card = {
            number: payment.cardNumber,
            cvv: payment.cvv,
            month: payment.expireMonth,
            year: payment.expireYear,
            pin: payment.cardPin
        };

        var validation = Card.validate(card);
        console.log(validation)

        // Payment method instances provide validation functions that
        // you can use to check for validaty before setting payment method
        if (validation.isValid) {
            try {
                // transaction.setPaymentMethod('card', card);
                await transaction.setCard(card);
                // Charge the payment method
                const chargeResponse = await transaction.chargeCard();

                // Handle the charge response
                if (chargeResponse.status === 'success') {
                    const result = await API.post('/portfolio/v1/', JSON.stringify(createPortfolio))
                    if (result.status === 200) {
                        setInvest(3)
                    }
                   
                    // redirect to final page
                }
            } catch (e) {
               alert(e)
            }
        }

        
    }

  

    return (

        <form onSubmit={attemptPayment}>
            {invest === 0 ? <FirstStep data={data} handlePaymentChange={handlePaymentChange} setInvest={setInvest} payment={payment} /> :
                invest === 1 ? <SecondStep data={data} handlePaymentChange={handlePaymentChange} setInvest={setInvest} payment={payment} /> : invest === 2 ?
                    <ThirdStep data={data} handlePaymentChange={handlePaymentChange} setInvest={setInvest} attemptPayment={attemptPayment} payment={payment} /> : <FourthStep data={data} payment={payment}/>}
        </form>
    )

    // return 
}
