import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Navbarcon from '../header/Navbar';
//import repoApi from '../assets/reopapi';
import Repolist from './Repolist';
import AppUrl from '../config/AppUrl';
import Loading from '../utils/Loading';
const Repos = ({ title, discription }) => {
    const [dev, setDev] = useState({ devapi: [] });
    const [loading, setLoading] = useState(false);
    const { devapi: listingData } = dev;

    useEffect(() => {
        devApiData();
    }, [])

    const devApiData = async () => {
        setLoading(true)
        const response = await fetch(`${AppUrl.REPO_LISTING_URL}`)
            .then(resp => resp.json())
            .then(data => {
                setDev({ devapi: data })
                setLoading(false)
            })
            .catch(error => console.log("Error:" + error));

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
                            {/* Repos listing section start here */}
                            {loading ? <Loading /> : <Repolist listingData={listingData} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Repos;