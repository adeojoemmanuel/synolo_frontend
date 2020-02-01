import React, { useState, useContext } from 'react'
import Modal from '../../../components/Modal/Modal.component'

/*
	Images
*/
import investor from "../../../assets/images/dashboard/dashboard.png";

import ProgressBar from '../../../components/ProgressBar/progressbar.component';
import PropertyContext from '../../../context/property';
import { API } from '../../../helpers/api.helpers';
/**
 * error alert
 */
import { errorHandler } from "../../../components/Errors/errors.component";
import { PropertyModal } from './Modal/property.modal';

const Property = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const data = useContext(PropertyContext);

    console.log(data)

    let fundProgress = 0; 
    fundProgress = fundProgress + ((data.raised / data.worth) * 100)

    

    const handleAddToWatchlist = async () => {
        setError("");
        try {
            const result = await API.post('/watchlist/v1/', JSON.stringify({ propertyId: data.id }))
            if (result.status === 200) {
                setSuccess("Added to your watchlist successfully");
            }
        } catch (err) {
            errorHandler(err.response.data.error, setError);
        }

    }

    const handleModal = () => {
        setOpenModal(openModal => !openModal)
    };
    
    
    return (
        
        <div className="property">
            {success && (
                <div className="alert slider alert-success">{success}</div>
            )}

            {error && (
                <div className="alert slider alert-success">{error}</div>
            )}
            <div className="property-top">
                <div className="property-img">
                    <img src={investor} alt="investor" />
                </div>

                <div className="property-invest">
                    <button className="property-invest__btn" onClick={() => handleModal()}>Invest Now</button>
                    <button className="property-invest__btn property-invest__btn--watchlist" onClick={() => handleAddToWatchlist()}>Add to watchlist</button>

                    { openModal &&
                        <Modal close={true} handleModal={handleModal}>
                            <PropertyModal data={data}/>
                        </Modal>

                    }

                    <div className="property-invest__funded">
                        <div className="property-invest__funded--progress">
                            <ProgressBar percentRange={fundProgress} />
                        </div>

                        <span>${fundProgress}% funded </span>
                    </div>

                    <div className="propery-invest__roi">
                        <h1>roi</h1>
                        <p>{data.roi}%</p>
                    </div>
                </div>
            </div>

            <div className="property-bottom">
                <div className="property-name">
                    {data.name}
                </div>
                <div className="property-location">
                    {data.location}
                </div>
                <div className="property-description">
                    <h1>Description</h1>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Property;
