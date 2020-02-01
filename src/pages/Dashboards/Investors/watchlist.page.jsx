import React, {useEffect, useState} from 'react'
import { WatchlistCard } from '../../../components/Cards/cards.component'

/*
	Images
*/
import investor from "../../../assets/images/dashboard/dashboard.png";
import { API } from '../../../helpers/api.helpers';

const Watchlist = () => {
    const [data, setData] = useState(null);

    let fundProgress = 0;

    console.log(data)

    useEffect(() => {
        const fetchData = async () => {
            let result;
       
                result = await API.get(
                    "/watchlist/v1/profile"
                );


            setData(result.data);
        };
        fetchData();
    }, [])

    return (
        <div className="investor-insight">
            {data && data.properties.map((property, index) => {
                fundProgress = fundProgress + ((property.raised / property.worth) * 100)
               return <WatchlistCard image={investor} header={property.name} description={property.description} pecnt={fundProgress} raised={property.raised} roi={property.roi} id={property.id} key={index} />
})}
            
        </div>
    )
}

export default Watchlist;
