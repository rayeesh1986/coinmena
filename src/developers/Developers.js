import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
//import apiData from '../assets/api'
import Developerslist from './Developerslist';
import Navbarcon from '../header/Navbar';
import AppUrl from '../config/AppUrl';
import Loading from '../utils/Loading';
const Developers = ({ title, discription }) => {

    const [dev, setDev] = useState({ devapi: [] });
    const [loading, setLoading] = useState(false);
    const { devapi: listingData } = dev

    useEffect(() => {
        devApiData();
    }, [])

    const devApiData = async () => {
        setLoading(true)
        const response = await new Promise((resolve, reject) => {
            fetch(`${AppUrl.DEVELOPER_LISTING_URL}`)
                .then(resp => resp.json())
                .then(data => {
                    setDev({ devapi: data })
                    setLoading(false)
                })
                .catch(error => {
                    console.log("Error:" + error)
                });
        })
        return response;
    }
    return (
        <>
            <Header title={title} discription={discription} />
            <div className="container">
                <div className="row">
                    <div className="col_full">
                        <div className="con_outer">
                            <Navbarcon />
                            {/* Developers listing section start here */}
                            {loading ? <Loading /> : <Developerslist listingData={listingData} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Developers;