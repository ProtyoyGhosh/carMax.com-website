import React from 'react';
import useAuth from '../hooks/useAuth';
import Bounce from 'react-reveal/Bounce';
import sectionBG from '../assets/images/sectionBg.png'
import Item from './Item';
import { Container } from 'react-bootstrap';

const ExploreUs = () => {
    const { items } = useAuth();
    return (
        <div className='py-5' style={{ background: `url(${sectionBG})` }}>
            <div className='text-center text-white' >
                <h3>
                    <Bounce left cascade>
                        Our All Items
                    </Bounce>
                </h3>
                <p>
                    <Bounce right cascade>
                        Choose your dream car and have a speedy life ahead.We are here for you everytime you need us.
                    </Bounce>
                </p>
            </div>


            <Container>
                <div className='d-flex flex-wrap justify-content-between my-3'>
                    {
                        items.map(item => <Item
                            key={item.product_id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default ExploreUs;