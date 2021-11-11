import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5 pb-4">
            <div className="row container text-center text-md-left">
                <div className="col-md-3 col-lg-3 mx-auto mt-3">
                    <h5 className='text-uppercase mb-4 font-weight-bold text-info'>
                        Desh Travel
                    </h5>
                    <p>Desh Travel brings you the places to visit in Bangladesh. We will guide you for visiting the tourist’s spots, historical places & ecotourism sites in Bangladesh</p>
                </div>

                <div className="col-md-2 col-lg-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                        terms
                    </h5>
                    <p>
                        <a href="#" className='text-white' style={{ textDecoration: 'none' }}>Payment Method</a>
                    </p>
                    <p><a href="#" className='text-white' style={{ textDecoration: 'none' }}>Booking Policy</a>
                    </p>
                    <p><a href="#" className='text-white' style={{ textDecoration: 'none' }}>Legal Help</a>
                    </p>
                    <p><a href="#" className='text-white' style={{ textDecoration: 'none' }}>Vat & Taxs</a>
                    </p>
                </div>

                <div className="col-md-3 col-lg-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-info">
                        links
                    </h5>
                    <p>
                        <a href="#" className='text-white' style={{ textDecoration: 'none' }}>Tours in Bangladesh</a>
                    </p>
                    <p><a href="#" className='text-white' style={{ textDecoration: 'none' }}>Popular Tours</a>
                    </p>
                    <p><a href="#" className='text-white' style={{ textDecoration: 'none' }}>World Heritages</a>
                    </p>
                    <p><a href="#" className='text-white' style={{ textDecoration: 'none' }}>Top Attractions</a>
                    </p>
                </div>

                <div className="col-md-4 col-lg-3 mx-auto mt-3">
                    <h5 className='text-uppercase mb-4 font-weight-bold text-info'>Contact</h5>
                    <p><small className='me-3'>72/2, BB ghosh Lane,Kalishankarpur,Kushtia,Dhaka.</small></p>
                    <p><small className='me-3'>+8801915441238,+918420421766</small></p>
                    <p><small className='me-3'>deshtravel@gmail.com</small></p>
                    <p><small className='me-3'>info.deshtravel@gmail.com</small></p>
                </div>
            </div>

            <hr className='mb-4' />
            <div className="row align-items-center">
                <div className="col-md-12">
                    <p>
                        Copyright @2021 ALL rights reserved by
                        <a href="" style={{ textDecoration: 'none' }}>
                            <strong className='text-info'> Protyoy Kumar Ghosh</strong>
                        </a>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Footer;