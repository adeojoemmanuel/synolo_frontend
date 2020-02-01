import React, {useState, useEffect} from 'react'
import { WatchlistCard } from '../../../components/Cards/cards.component'

/*
	Images
*/
import investor from "../../../assets/images/dashboard/dashboard.png";
import { API } from '../../../helpers/api.helpers';
import { useParams } from 'react-router-dom';

import Property from './property.page';
import PropertyContext from '../../../context/property';

const Insights = () => {
    let { id } = useParams();
    console.log(useParams());
		const [data, setData] = useState([]);

	let fundProgress = 0;
		
	useEffect(() => {
		const fetchData = async () => {
			let result;
			if (id) {
				result = await API.get(
					`/property/v1/${id}`
				);
			} else {
				result = await API.get(
					"/property/v1/"
				);
			}

			setData(result.data);
		};
		fetchData();
	}, [id])

    

    return (
        <PropertyContext.Provider value = {data}>
            <div>
                {id ? <Property data={data}/> :
                    <div className="investor-insight">
                        {data && data.map((property, index) => {
							fundProgress = fundProgress + ((property.raised / property.worth) * 100)
							return <WatchlistCard image={investor} header={property.name} description={property.description} pecnt={fundProgress} raised={property.raised} roi={property.roi} id={property.id} key={index} />
						})}
                    </div>}
            </div>
        </PropertyContext.Provider>
        
    )
}

export default Insights;
